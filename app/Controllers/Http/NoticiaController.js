'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Noticia = use("App/Models/Noticia")

/**
 * Resourceful controller for interacting with noticias
 */
class NoticiaController {
  /**
   * Show a list of all noticias.
   * GET noticias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const noticias = await Noticia.all();
    return noticias;
  }

  /**
   * Render a form to be used for creating a new noticia.
   * GET noticias/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new noticia.
   * POST noticias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only(["titulo", "time_id","datahora", "noticia","descricao"]);
    const noticia = await Noticia.create(data);
    return noticia;
  }

  /**
   * Display a single noticia.
   * GET noticias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const noticia = await Noticia.findOrFail(params.id);
    return noticia;
  }

  /**
   * Render a form to update an existing noticia.
   * GET noticias/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update noticia details.
   * PUT or PATCH noticias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const noticia1 = await Noticia.findOrFail(params.id);
    const { titulo, time_id,datahora, noticia,descricao } = request.only([
      "titulo", 
      "time_id",
      "datahora", 
      "noticia",
      "descricao"
    ]);
    noticia1.titulo = titulo;
    noticia1.time_id = time_id;
    noticia1.descricao = descricao;
    noticia1.datahora = datahora;
    noticia1.noticia = noticia;
    await noticia1.save();
    return noticia1;
  }

  /**
   * Delete a noticia with id.
   * DELETE noticias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const noticia = await Noticia.findOrFail(params.id);
    await noticia.delete();
    return noticia;
  }
}

module.exports = NoticiaController;
