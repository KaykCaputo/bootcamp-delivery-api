import * as PedidoRepository from "../repository/pedido.js";

export default async function findOrder(req, res) {
  let { idEscolhido } = req.params;

  let pedido = await PedidoRepository.obterPedido(parseInt(idEscolhido));
;
  if (!pedido) {
    // não existe pedido
    res.status(404).send("Pedido não encontrado");
    return;
  }
  res.send(pedido.pedido);
}
