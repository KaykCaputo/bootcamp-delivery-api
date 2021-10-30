import updateOrder from "../Controller/atualizaPedido.js";
import createOrder from "../Controller/criarPedidos.js";

export default function registerRoutes(app) {
  app.post("/criarPedido", createOrder);
  app.post("/atualizaPedido", updateOrder);
}
