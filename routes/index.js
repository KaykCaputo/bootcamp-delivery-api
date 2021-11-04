import UpdateOrderStatus from "../Controller/atualizaEntrega.js";
import updateOrder from "../Controller/atualizaPedido.js";
import findOrder from "../Controller/consultaPedido.js";
import createOrder from "../Controller/criarPedidos.js";
import deleteOrder from "../Controller/excluiPedido.js";
import contarProdutos from "../Controller/maisPedidos.js";
import sumProdutsValues from "../Controller/somaProdutos.js";
import sumCostumerValues from "../Controller/somaValoresCliente.js";

export default function registerRoutes(app) {
  app.post("/criarPedido", createOrder);
  app.post("/atualizaPedido/:idEscolhido", updateOrder);
  app.post("/atualizaEntrega/:idEscolhido/:valorEscolhido", UpdateOrderStatus);
  app.post("/excluiPedido/:idEscolhido", deleteOrder);
  app.post("/consultaPedido/:idEscolhido", findOrder);
  app.post("/somaValores/:nomeCliente", sumCostumerValues);
  app.post("/somaProduto/:nomeProduto", sumProdutsValues);
  app.get("/maisPedidos", contarProdutos);
}
