import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Productos from "./pages/Productos";
import ProductoDetalle from "./pages/ProductoDetalle";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProductos from "./pages/AdminProductos";
import AdminPedidos from "./pages/AdminPedidos";

import { useAuth } from "./context/AuthContext";

function PrivateRoute({ children, roles }) {
  const { user } = useAuth();

  if (!user) {
    return <Login />;
  }

  if (roles && !roles.includes(user.role)) {
    return <h2 className="text-center mt-5">No tienes permisos para ver esta sección.</h2>;
  }

  return children;
}

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:id" element={<ProductoDetalle />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />

          {/* Rutas de administración protegidas */}
          <Route
            path="/admin"
            element={
              <PrivateRoute roles={["ADMIN"]}>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/productos"
            element={
              <PrivateRoute roles={["ADMIN"]}>
                <AdminProductos />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/pedidos"
            element={
              <PrivateRoute roles={["ADMIN"]}>
                <AdminPedidos />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default AppRoutes;
