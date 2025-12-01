import { apiFetch } from "../api";

export async function getPedidos() {
  const res = await apiFetch("/orders");
  if (!res.ok) throw new Error("Error al obtener pedidos");
  return res.json();
}

export async function getProductosAdmin() {
  const res = await apiFetch("/products");
  if (!res.ok) throw new Error("Error al obtener productos");
  return res.json();
}

export async function crearProducto(producto) {
  const res = await apiFetch("/products", {
    method: "POST",
    body: JSON.stringify(producto),
  });
  if (!res.ok) throw new Error("Error al crear producto");
  return res. json();
}

export async function actualizarProducto(id, producto) {
  const res = await apiFetch(`/products/${id}`, {
    method: "PUT",
    body: JSON.stringify(producto),
  });
  if (! res.ok) throw new Error("Error al actualizar producto");
  return res.json();
}

export async function eliminarProducto(id) {
  const res = await apiFetch(`/products/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Error al eliminar producto");
  return res;
}