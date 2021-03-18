'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Time = use("App/Models/Time")

/**
 * Resourceful controller for interacting with times
 */
class TimeController {
  /**
   * Show a list of all times.
   * GET times
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const time = await Time.all();
    return time;
  }

  /**
   * Render a form to be used for creating a new time.
   * GET times/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new time.
   * POST times
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    try{
      const data = request.only(["noticia_id","nome","descricao"]);
      const times = await Time.create(data);
      return times;
    } catch(error) {
      response.status(500).send("Erro ao inserir notícia!");
    }
  }

  /**
   * Display a single time.
   * GET times/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const times = await Time.findOrFail(params.id);
    return times;    
  }

  /**
   * Render a form to update an existing time.
   * GET times/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update time details.
   * PUT or PATCH times/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */

  async noticias({params, request, response, view}){
    // const time = await Time.findOrFail(params.id);
    // return time;
    const time = await Time.query().where("time_id", params.id).fetch();
    return time;
  }

  async update ({ params, request, response }) {
    try{
      const times = await Time.findOrFail(params.id);
      const{ nome, time_id } = request.only([
        "nome",
        "time_id",
      ]);
      times.nome = nome;
      times.time_id = time_id;
      await times.save();
      return times;
    } catch (error) {
      response.status(500).send("Erro ao atualizar o aluno!");
  }
}

  /**
   * Delete a time with id.
   * DELETE times/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    try{
      const times = await Time.findOrFail(params.id);
      await times.delete();
      return times;
    } catch (error) {
      response.status(500).send("Erro ao apagar o time!");
    }
  }
}

module.exports = TimeController;
