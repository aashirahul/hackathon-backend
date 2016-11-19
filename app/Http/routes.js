'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome')

Route.get('/images','ImageController.read')
Route.post('/images/create','ImageController.add')
Route.get('/images/:imageId','ImageController.readOne')

Route.put('/images/like/:imageId','ImageController.addLike')
Route.put('/images/edit/:imageId/','ImageController.edit')

Route.delete('images/remove/:imageId','ImageController.remove')


Route.get('/images/comments/:imageId','CommentController.read')
Route.post('/images/comments/create/:imageId','CommentController.add')

