import { lerPedidos, gravarPedidos } from "../orders/index.js";
import fs from "fs/promises";

/**
 *
 * @param {number} id
 * @param {string} cliente
 * @param {string} produto
 * @param {number} valor
 * @returns
 */
export async function novoPedido(cliente, produto, valor) {
  const arquivo = await lerPedidos();

  let pedido = {
    id: arquivo.nextId,
    cliente,
    produto,
    valor,
    timestamp: new Date(),
    entregue: false,
  };
  arquivo.nextId++;

  arquivo.pedidos.push(pedido);
  await gravarPedidos(arquivo);

  return pedido;
}

export async function obterPedido(id) {
  
  let arquivo = await lerPedidos();
  let listaPedidos = arquivo.pedidos;
  let idPedido = listaPedidos.findIndex((pedido) => pedido.id === id);

  if (idPedido === -1) {
    // não existe pedido
    res.status(404).send("Pedido não encontrado");
    return;
  }

  return listaPedidos[idPedido];
}

export async function atualizarPedido(pedido) {

}

export async function apagarPedido(id) {

}
