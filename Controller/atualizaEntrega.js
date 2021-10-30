import * as PedidoRepository from "../repository/pedido.js";

export default async function updateOrderStatus(req, res) {
  let { idEscolhido, valorEscolhido } = req.params;

  let pedido = await PedidoRepository.obterPedido(parseInt(idEscolhido));

  if (!pedido) {
    // não existe pedido
    res.status(404).send("Pedido não encontrado");
    return;
  }
  if (valorEscolhido !== "true" && valorEscolhido !== "false") {
    res.status(400).send("Parametro Incorreto");
    return;
  }

  let pedidoAtualizado = {
    ...pedido.pedido,
    entregue: valorEscolhido == "true",
  };

  await PedidoRepository.atualizarPedido(pedidoAtualizado);

  res.send(pedidoAtualizado);
}
