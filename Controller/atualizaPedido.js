import { gravarPedidos, lerPedidos } from "../orders/index.js";
import * as PedidoRepository from '../repository/pedido.js'

export default async function updateOrder(req, res) {
  let { idEscolhido } = req.params;

  let pedido = await PedidoRepository.obterPedido(parseInt(idEscolhido));
  console.log(pedido);
  if (!pedido) {
    // não existe pedido
    res.status(404).send("Pedido não encontrado");
    return;
  }

  let pedidoAtualizado = { ...pedido.pedido, ...req.body };
  
  await PedidoRepository.atualizarPedido(pedidoAtualizado);

  res.send(pedidoAtualizado);
}
