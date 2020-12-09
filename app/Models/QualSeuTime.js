'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class QualSeuTime extends Model {

    user(){
        return this.belongsToMany('App/Models/User')
    }
    cadastrarnoticia(){
        return this.belongsTo('App/Models/Cadastrarnoticia')
    }
}

module.exports = QualSeuTime
