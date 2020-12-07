'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('/register', 'AuthController.register');
Route.post("/authenticate", "AuthController.authenticate");

<<<<<<< HEAD
=======

>>>>>>> 2b96b8773ca9391a7ddae4bc68920effecbf512f
Route.group(() => {
  Route.resource('cadastrarnoticia', 'CadastrarNoticiaController')
  Route.resource('qualseutime', 'QualseutimeController')
}).middleware(["auth"]);