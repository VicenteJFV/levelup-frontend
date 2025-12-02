// src/services/adminService.js
import { apiFetch } from "../api";

// ---------- PEDIDOS ----------

export async function getPedidos() {
  const res = await apiFetch("/orders");
  if (!res || !res.ok) throw new Error("Error al obtener pedidos");
  return res.json();
}

export async function actualizarPedido(id, pedido) {
  const res = await apiFetch(`/orders/${id}`, {
    method: "PUT",
    body: JSON.stringify(pedido),
  });

  if (!res.ok) throw new Error("Error al actualizar pedido");
  return res.json();
}

// ---------- PRODUCTOS (ADMIN) ----------

export async function getProductosAdmin() {
  const res = await apiFetch("/products");
  if (!res || !res.ok) throw new Error("Error al obtener productos");
  return res.json();
}

export async function crearProductoAdmin(producto) {
  const res = await apiFetch("/products", {
    method: "POST",
    body: JSON.stringify(producto),
  });

  if (!res.ok) throw new Error("Error al crear producto");
  return res.json();
}

export async function actualizarProductoAdmin(id, producto) {
  const res = await apiFetch(`/products/${id}`, {
    method: "PUT",
    body: JSON.stringify(producto),
  });

  if (!res.ok) throw new Error("Error al actualizar producto");
  return res.json();
}

export async function eliminarProductoAdmin(id) {
  const res = await apiFetch(`/products/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Error al eliminar producto");
  return res;
}
