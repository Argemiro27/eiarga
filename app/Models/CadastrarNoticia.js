'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class CadastrarNoticia extends Model {
    qualseutime(){
        return this.belongsToMany('App/Models/Qualseutime')
    }
    
}

module.exports = CadastrarNoticia
