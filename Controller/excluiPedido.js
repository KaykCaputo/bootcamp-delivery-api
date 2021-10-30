import * as PedidoRepository from "../repository/pedido.js";

export default async function deleteOrder(req, res){
    
    let { idEscolhido } = req.params;

    let pedido = await PedidoRepository.obterPedido(parseInt(idEscolhido));
    console.log(pedido);
    if (!pedido) {
      // não existe pedido
      res.status(404).send("Pedido não encontrado");
      return;  
    }

    await PedidoRepository.apagarPedido(pedido.index);
    res.send(`Pedido ${idEscolhido} Excluido`);

}