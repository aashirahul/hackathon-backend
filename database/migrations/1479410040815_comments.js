'use strict'

const Schema = use('Schema')

class CommentsTableSchema extends Schema {

  up () {
    this.create('comments', (table) => {
      table.increments()
      table.timestamps()
      table.string('comment')
      table.integer('image_id').unsigned()
      table.foreign('image_id').references('images.id')

    })
  }

  down () {
    this.drop('comments')
  }

}

module.exports = CommentsTableSchema
