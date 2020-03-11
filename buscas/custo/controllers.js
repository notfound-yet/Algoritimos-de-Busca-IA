const services = require("./services");

const v = new Validator();

module.exports = {
  create: async ctx => {
    const {
      request: { body },
      response
    } = ctx;

    const busca = await services.create(body);

    response.body = busca;
  }
};
