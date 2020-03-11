const controller = require("./controllers");

module.exports = router => {
  router.post("/v1/api/largura", controller.create);
};
