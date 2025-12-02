import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  // Verifica si el usuario está autenticado y es ADMIN
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== "ADMIN" && user.role !== "ROLE_ADMIN") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
