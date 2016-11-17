'use strict'

const Comment = use('App/Model/Comment')

class CommentController {

	* read(request,response) {
		let imageID = request.param('imageId')
		let comments = yield Comment.query().where('image_id',imageID).fetch()
		response.json(comments)
	}

	* add(request,response){
		let imageID = request.param('imageId')
		let data = request.only('comment')
		data.image_id = imageID;
		let comment = yield Comment.create(data)
		response.status(201).json(comment)

	}

}

module.exports = CommentController
