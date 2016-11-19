'use strict'

const Image = use('App/Model/Image')
const Comment = use('App/Model/Comment')

class ImageController {

	* read(request,response){
		let images = yield Image.all()
		response.status(200).json(images)
	}

	* add(request,response){
		let data = request.only('image_url','description')
		let image = yield Image.create(data)
		response.status(201).json(image)
	}

	* addLike(request,response){
		let imageID = request.param('imageId')
		let image = yield Image.findBy('id',imageID)
		image.like += 1;
		yield image.save();
		response.status(201).json(image)												
		
	}
	
	* readOne(request,response){
		let imageID = request.param('imageId')
		let image = yield Image.findBy('id',imageID)
		response.status(200).json(image)

	}

	* remove(request,response){
		let imageID = request.param('imageId')
		let image = yield Image.findBy('id',imageID)

		if(image){
			let comments = yield Comment.query().where('image_id',imageID).fetch()
			console.log(comments);
			for(var i = 0; i < comments.value().length; i++) {
				yield comments[i].delete();
			}
			yield image.delete();
			response.status(200).json(image)
		} else {
			response.status(400).json({error: "no such image exists"})
		}
		
	}

	* edit(request,response){
		let imageID = request.param('imageId')
		let descrip = request.only('description')
		let image = yield Image.findBy('id',imageID)
		image.fill(descrip)
		yield image.save()
		response.status(201).json(image)
	}

}

module.exports = ImageController
