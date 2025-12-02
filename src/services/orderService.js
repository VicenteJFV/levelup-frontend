// src/services/orderService.js
import { apiFetch } from "../api";

export async function crearPedido(order) {
  const res = await apiFetch("/orders", {
    method: "POST",
    body: JSON.stringify(order),
  });

  if (!res.ok) throw new Error("Error al crear pedido");
  return res.json();
}
