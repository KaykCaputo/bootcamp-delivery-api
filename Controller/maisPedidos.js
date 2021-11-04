import { lerPedidos } from "../orders/index.js";
import * as PedidoRepository from "../repository/pedido.js";

export default async function contarProdutos(req, res) {
  let arquivo = await lerPedidos();
  let listaPedidos = arquivo.pedidos;

  let arrayProdutos = listaPedidos.map((pedido) => pedido.produto);
 
  let produtosVendidos = arrayProdutos.reduce(function(todosProdutos, produto){
      if(produto in todosProdutos){
          todosProdutos[produto]++;
      }else{
          todosProdutos[produto] = 1;
      }
      return todosProdutos;
  },{});

  console.log(arrayProdutos);
  console.log(produtosVendidos);
  res.send(produtosVendidos);
}
