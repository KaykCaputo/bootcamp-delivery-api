import { lerPedidos } from "../orders/index.js";
import * as PedidoRepository from '../repository/pedido.js'

export default async function updateOrder(req, res) {
  let idEscolhido = req.body.id;

  let arquivo = await lerPedidos();
  let listaPedidos = arquivo.pedidos;

  let idPedido = listaPedidos.findIndex((pedido) => pedido.id === idEscolhido);

  if (idPedido === -1) {
    // não existe pedido
    res.status(404).send("Pedido não encontrado");
    return;
  }

  listaPedidos[idPedido] = { ...listaPedidos[idPedido], ...req.body };

  res.send(listaPedidos[idPedido]);
}
