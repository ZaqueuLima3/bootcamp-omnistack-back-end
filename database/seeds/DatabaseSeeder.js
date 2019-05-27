'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const User = use('App/Models/User')

class DatabaseSeeder {
  async run () {
    const user = await User.create({
      name: 'Zaqueu Lima',
      email: 'zaqueulima1@gmail.com',
      password: '123456'
    })

    await user.teams().create({
      name: 'Rocket',
      user_id: user.id
    })
  }
}

module.exports = DatabaseSeeder
