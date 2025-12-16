const API_BASE_URL = process.env. REACT_APP_BACKEND_URL || "http://localhost:8080";

console.log("🔧 API_BASE_URL cargada:", API_BASE_URL);  // Para debugging

// ----- TOKEN -----

export function getToken() {
  return localStorage. getItem("token");
}

export function setToken(token) {
  localStorage.setItem("token", token);
}

export function clearToken() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}

export function setUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

export function getUser() {
  const u = localStorage. getItem("user");
  return u ? JSON.parse(u) : null;
}

// ----- REQUEST WRAPPER -----

export async function apiFetch(url, options = {}) {
  const token = getToken();

  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  // Construir URL completa
  const fullUrl = `${API_BASE_URL}${url}`;
  console.log("📡 Fetching:", fullUrl);  // Para debugging

  const response = await fetch(fullUrl, {
    ...options,
    headers,
  });

  if (response.status === 401 || response.status === 403) {
    clearToken();
    window.location.href = "/login";
    return;
  }

  return response;
}

// Exportar también la URL base por si se necesita
export { API_BASE_URL };
