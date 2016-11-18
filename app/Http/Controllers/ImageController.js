'use strict'

const Image = use('App/Model/Image')

class ImageController {

	* read(request,response){
		let images = yield Image.all()
		response.status(200).json(images)
	}

	* add(request,response){
		let data = request.only('image_url','description')
		let image = yield Image.create(data)
		response.status(201).send('Image added')
	}

	* addLike(request,response){
		let imageID = request.param('imageId')
		let image = yield Image.findBy('id',imageID)
		image.like += 1;
		yield image.save();
		response.status(201).send('Like Added')												
		
	}

	* readOne(request,response){
		let imageID = request.param('imageId')
		let image = yield Image.findBy('id',imageID)
		response.status(200).json(image)

	}

	* remove(request,response){
		let imageID = request.param('imageId')
		let image = yield Image.findBy('id',imageID)
		yield image.delete();
		response.status(200).json('Image Deleted')
	}

	* edit(request,response){
		let imageID = request.param('imageId')
		let descrip = request.only('description')
		let image = yield Image.findBy('id',imageID)
		image.fill(descrip)
		yield image.save()
		response.status(201).send('description updated')
	}

}

module.exports = ImageController
