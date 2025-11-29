import { setToken, setUser } from "../api";

const API_BASE_URL =
  process.env.REACT_APP_API_URL || "http://localhost:8080/api";

export async function loginUser(email, password) {
  const res = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) throw new Error("Error de login");

  const data = await res.json(); // token + user

  // Guardar en localStorage
  setToken(data.token);
  setUser(data.user);

  return data;
}

export async function registerUser(user) {
  const res = await fetch(`${API_BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  if (!res.ok) throw new Error("Error al registrar usuario");

  return res.json();
}
