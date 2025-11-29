const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8080/api";

export async function getPedidos() {
  const res = await fetch(`${API_BASE_URL}/orders`);
  if (!res.ok) throw new Error("Error al obtener pedidos");
  return res.json();
}
