
import { readFile, writeFile } from "fs/promises";


export async function lerPedidos() {
 
  const orderStr = await readFile("orders/pedidos.json", "utf-8");
  return JSON.parse(orderStr);
}

export async function gravarPedidos(pedidos){
  await writeFile("orders/pedidos.json", JSON.stringify(pedidos, null, 2), {encoding: 'utf-8' });
}
