'use strict'

class Session {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      email: 'required|email',
      passowrd: 'required'
    }
  }
}

module.exports = Session
