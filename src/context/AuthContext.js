import React, { createContext, useContext, useEffect, useState } from "react";
import { loginUser } from "../services/authService";
import { getToken, setToken, clearToken, getUser, setUser } from "../api";
import { API_BASE_URL } from "../api";
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUserState] = useState(null);
  const [token, setTokenState] = useState(null);

  useEffect(() => {
    const storedToken = getToken();
    const storedUser = getUser(); // ✔ CORREGIDO

    if (storedToken && storedUser) {
      setTokenState(storedToken);
      setUserState(storedUser);
    }
  }, []);

  const login = async (email, password) => {
    const data = await loginUser(email, password); // llama al servicio

    // Guardar globalmente
    setTokenState(data.token);
    setUserState(data.user);

    // Guardar en localStorage
    setToken(data.token);
    setUser(data.user);
  };

  const logout = () => {
    clearToken();
    setTokenState(null);
    setUserState(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
