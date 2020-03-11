const custoRoutes = require("../features/custo/routes");
const larguraRoutes = require("../features/largura/routes");

module.exports = router => {
  custoRoutes(router);
  larguraRoutes(router);
};
