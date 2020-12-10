'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Noticia = use("App/Models/Cadastrarnoticia")

/**
 * Resourceful controller for interacting with cadastrarnoticias
 */
class CadastrarNoticiaController {
  /**
   * Show a list of all cadastrarnoticias.
   * GET cadastrarnoticias
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
   * Render a form to be used for creating a new cadastrarnoticia.
   * GET cadastrarnoticias/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {

  }

  /**
   * Create/save a new cadastrarnoticia.
   * POST cadastrarnoticias
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
   * Display a single cadastrarnoticia.
   * GET cadastrarnoticias/:id
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
   * Render a form to update an existing cadastrarnoticia.
   * GET cadastrarnoticias/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update cadastrarnoticia details.
   * PUT or PATCH cadastrarnoticias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */

  async update ({ params, request, response }) {
    const noticia = await Noticia.findOrFail(params.id);
    const { titulo, time_id,datahora, noticia,descricao } = request.only([
      "titulo", 
      "time_id",
      "datahora", 
      "noticia",
      "descricao"
    ]);
    noticia.titulo = titulo;
    noticia.time_id = time_id;
    noticia.descricao = descricao;
    noticia.datahora = datahora;
    noticia.noticia = noticia;
    await noticia.save();
    return noticia;
  }

  /**
   * Delete a cadastrarnoticia with id.
   * DELETE cadastrarnoticias/:id
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

module.exports = CadastrarNoticiaController
