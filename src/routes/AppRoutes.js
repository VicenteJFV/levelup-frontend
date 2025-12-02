import { Route } from "react-router-dom";
import Home from "../pages/Home";
import Productos from "../pages/Productos";
import Carrito from "../pages/Carrito";
import Login from "../pages/Login";
import Registro from "../pages/Registro";
import AdminDashboard from "../pages/AdminDashboard";
import AdminProductos from "../pages/AdminProductos";
import AdminPedidos from "../pages/AdminPedidos";
import PrivateRoute from "../components/PrivateRoute";

export const appRoutes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/productos" element={<Productos />} />
    <Route path="/carrito" element={<Carrito />} />
    <Route path="/login" element={<Login />} />
    <Route path="/registro" element={<Registro />} />

    <Route
      path="/admin"
      element={
        <PrivateRoute>
          <AdminDashboard />
        </PrivateRoute>
      }
    />
    <Route
      path="/admin/productos"
      element={
        <PrivateRoute>
          <AdminProductos />
        </PrivateRoute>
      }
    />
    <Route
      path="/admin/pedidos"
      element={
        <PrivateRoute>
          <AdminPedidos />
        </PrivateRoute>
      }
    />
  </>
);
