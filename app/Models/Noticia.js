'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Noticia extends Model {
    time(){
        return this.belongsTo('App/Models/Time')
    }
}

module.exports = Noticia
