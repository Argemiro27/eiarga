'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Time extends Model {
    users() {
        return this.hasMany("App/Models/User")
    }
    noticias() {
        return this.hasMany("App/Models/Cadastrarnoticia")
    }    
}   

module.exports = Time
