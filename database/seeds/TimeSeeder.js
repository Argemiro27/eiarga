'use strict'

/*
|--------------------------------------------------------------------------
| TimeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Time = use("App/Models/Time");

class TimeSeeder {
  async run () {
    const times = [
      { nome: "São Paulo" },
      { nome: "Corinthians" },
      { nome: "Cruzeiro" },
    ];
    await Time.createMany(times);
  }
}

module.exports = TimeSeeder
