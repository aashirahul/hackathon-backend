'use strict'

class ImageController {

	* read(request,response){
		let images = yield Image.all()
		response.status(201).json(images)
	}

	* add(request,response){
		let data = request.only('image_url')
		let image = yield Image.create(data)
		response.status(200).show('Image added')
	}

}

module.exports = ImageController
