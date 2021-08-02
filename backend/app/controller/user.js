'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx, app } = this;
    ctx.body = 'hi, user page';
  }
}

module.exports = UserController;
