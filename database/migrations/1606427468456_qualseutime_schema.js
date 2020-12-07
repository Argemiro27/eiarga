'use strict'
 
/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
class QualseutimeSchema extends Schema {
  up () {
    this.create('qualseutimes', (table) => {
      table.increments()
      table.string('nome',50).notNullable().unique()
      table
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onUpdate("cascade")
      .onDelete("cascade")
      .notNullable();
      table.timestamps()
    })
  }
 
  down () {
    this.drop('qualseutimes')
  }
}
 
module.exports = QualseutimeSchema
