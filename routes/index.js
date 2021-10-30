import UpdateOrderStatus from "../Controller/atualizaEntrega.js";
import updateOrder from "../Controller/atualizaPedido.js";
import createOrder from "../Controller/criarPedidos.js";

export default function registerRoutes(app) {
  app.post("/criarPedido", createOrder);
  app.post("/atualizaPedido/:idEscolhido", updateOrder);
  app.post("/atualizaEntrega/:idEscolhido/:valorEscolhido", UpdateOrderStatus);
}
