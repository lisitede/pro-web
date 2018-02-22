const Controller = require('egg').Controller;


class ViewController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('index.html');
  }
}

module.exports = ViewController;
