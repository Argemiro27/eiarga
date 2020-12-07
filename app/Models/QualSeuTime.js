'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Qualseutime extends Model {

    user(){
        return this.belongsToMany('App/Models/User')
    }
    cadastrarnoticia(){
        return this.belongsTo('App/Models/Cadastrarnoticia')
    }
}

<<<<<<< HEAD
module.exports = Qualseutime
=======
module.exports = Qualseutime
>>>>>>> 2b96b8773ca9391a7ddae4bc68920effecbf512f
