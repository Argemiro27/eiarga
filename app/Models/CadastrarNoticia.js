'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Cadastrarnoticia extends Model {
    time(){
        return this.belongsToMany('App/Models/Time')
    }
    
}

module.exports = Cadastrarnoticia
