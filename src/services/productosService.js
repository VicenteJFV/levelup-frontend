const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8080/api";

export async function getProductos() {
  const res = await fetch(`${API_BASE_URL}/products`);
  if (!res.ok) throw new Error("Error al obtener productos");
  return res.json();
}

export async function getProductoPorId(id) {
  const res = await fetch(`${API_BASE_URL}/products/${id}`);
  if (!res.ok) throw new Error("Error al obtener producto");
  return res.json();
}

export async function crearProducto(producto) {
  const res = await fetch(`${API_BASE_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(producto),
  });
  if (!res.ok) throw new Error("Error al crear producto");
  return res.json();
}
