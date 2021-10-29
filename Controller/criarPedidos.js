import { novoPedido } from "../repository/pedido.js";

export default async function createOrder(req, res) {
 
  let atributosPedido = req.body;
  let pedido = await novoPedido(atributosPedido.cliente, atributosPedido.produto, atributosPedido.valor);
  res.send(pedido);

}
