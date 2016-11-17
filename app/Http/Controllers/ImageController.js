'use strict'

const Image = use('App/Model/Image')

class ImageController {

	* read(request,response){
		let images = yield Image.all()
		response.status(200).json(images)
	}

	* add(request,response){
		let data = request.only('image_url')
		let image = yield Image.create(data)
		response.status(201).send('Image added')
	}

	* addLike(request,response){
		let imageID = request.param('imageId')
		let image = yield Image.findBy('id',imageID)
		image.like =+ 1;
		yield image.save();
		
		response.status(201).send('Like Added')
	
													
		
	}

}

module.exports = ImageController
