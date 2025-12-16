import { apiFetch } from "../api";

export async function crearPreferenciaMercadoPago(payload) {
  const res = await apiFetch("/payment/create-preference", {
    method: "POST",
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Error al crear preferencia de pago");
  }

  return res.json(); // { initPoint }
}
