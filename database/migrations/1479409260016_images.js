'use strict'

const Schema = use('Schema')

class ImagesTableSchema extends Schema {

  up () {
    this.create('images', (table) => {
      table.increments()
      table.timestamps()
      table.string('description')
      table.string('image_url')
      table.integer('like')
    })
  }

  down () {
    this.drop('images')
  }

}

module.exports = ImagesTableSchema
