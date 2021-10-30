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
  let indexPedido = listaPedidos.findIndex((pedido) => pedido.id === id);
  
  if (indexPedido === -1) {
    // não existe pedido
    return;
  }

  return { index: indexPedido, pedido: listaPedidos[indexPedido]};
}

export async function atualizarPedido(pedido) {
  let arquivo = await lerPedidos();
  let pedidoArquivo = await obterPedido(pedido.id);

  arquivo.pedidos[pedidoArquivo.index] = pedido;
  await gravarPedidos(arquivo);
}

export async function apagarPedido(index) {
  let arquivo = await lerPedidos();

  arquivo.pedidos.splice(index, 1);
  await gravarPedidos(arquivo);
}
