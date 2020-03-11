const services = require("./services");
const Boom = require("boom");
const Validator = require("fastest-validator");
const jwt = require("jsonwebtoken");

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
