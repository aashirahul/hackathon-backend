'use strict'

const Image = use('App/Model/Image')

class ImageController {

	* read(request,response){
		let images = yield Image.all()
		response.status(201).json(images)
	}

	* add(request,response){
		let data = request.only('image_url')
		let image = yield Image.create(data)
		response.status(200).send('Image added')
	}

	* addLike(request,response){
		
	}

}

module.exports = ImageController
