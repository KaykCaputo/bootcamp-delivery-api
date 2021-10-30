import { lerPedidos } from "../orders/index.js";
import * as PedidoRepository from "../repository/pedido.js";

export default async function sumCostumerValues(req, res) {
  let { nomeCliente } = req.params;
  let arquivo = await lerPedidos();
  let listaPedidos = arquivo.pedidos;
  const reducer = (previousValue, currentItem) => previousValue + currentItem.valor;
  console.log(nomeCliente);

  // let valores = [];
  // for (let i = 0; i < listaPedidos.length; i++) {
  //   let itemAtual = listaPedidos[i];
  //   valores.push(itemAtual.valor);
  // }
  let valorTotal = listaPedidos
    .filter((p) => nomeCliente.toLocaleLowerCase() === p.cliente?.toLocaleLowerCase() && p.entregue)
    .reduce(reducer,0);

  console.log(valorTotal);
  res.send(`O valor total dos pedidos do cliente ${nomeCliente} $${valorTotal} Reais`);
}
