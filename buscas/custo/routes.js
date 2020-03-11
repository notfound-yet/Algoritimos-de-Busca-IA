const controller = require("./controllers");

module.exports = router => {
  router.post("/v1/api/custo", controller.create);
};
