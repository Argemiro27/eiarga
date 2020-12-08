'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Time = use("App/Models/QualSeuTime")


/**
 * Resourceful controller for interacting with qualseutimes
 */
class QualSeuTimeController {
  /**
   * Show a list of all qualseutimes.
   * GET qualseutimes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const time = await time.all()
    return time
  }


  /**
   * Create/save a new qualseutime.
   * POST qualseutimes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {
    const {nome} = request.only(["nome"])
    const time = await Time.create({nome,user_id:auth.user.id})
    return time
  }

  /**
   * Display a single qualseutime.
   * GET qualseutimes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const time = await Time.findOrFail(params.id)
  }

  /**
   * Render a form to update an existing qualseutime.
   * GET qualseutimes/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update qualseutime details.
   * PUT or PATCH qualseutimes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const time = await Time.findOrFail(params.id)
    const {nome}=request.only(["nome"])
    time.nome = nome
    await time.save()
    return time
  }

  /**
   * Delete a qualseutime with id.
   * DELETE qualseutimes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const time = await Time.findOrFail(params.id)
    await time.delete()
    return time
  }
}

module.exports = QualSeuTimeController