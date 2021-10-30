import { lerPedidos } from "../orders/index.js";
import * as PedidoRepository from "../repository/pedido.js";

export default async function sumProdutsValues(req, res) {
  let { nomeProduto } = req.params;
  let arquivo = await lerPedidos();
  let listaPedidos = arquivo.pedidos;
  const reducer = (previousValue, currentItem) => previousValue + currentItem.valor;
  console.log(nomeProduto);

  let valorTotal = listaPedidos
    .filter((p) => nomeProduto.toLocaleLowerCase() === p.produto.toLocaleLowerCase() && p.entregue)
    .reduce(reducer,0);

  console.log(valorTotal);
  res.send(`O valor total dos pedidos do produto:${nomeProduto} e o total de dinheiro arrecadado com as vendas dele é de:$${valorTotal} Reais`);
}
