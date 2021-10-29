import createOrder from "../Controller/criarPedidos.js";

export default function registerRoutes(app) {
  app.post("/criarPedido", createOrder);
}
