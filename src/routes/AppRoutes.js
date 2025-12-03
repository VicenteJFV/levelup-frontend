import { Route } from "react-router-dom";
import Home from "../pages/Home";
import Productos from "../pages/Productos";
import Carrito from "../pages/Carrito";
import Login from "../pages/Login";
import Registro from "../pages/Registro";
import AdminDashboard from "../pages/AdminDashboard";
import AdminProductos from "../pages/AdminProductos";
import AdminPedidos from "../pages/AdminPedidos";
import Nosotros from "../pages/Nosotros";
import Blog from "../pages/Blog";
import BlogSetupGamer from "../pages/BlogSetupGamer";
import BlogJuegosMesa from "../pages/BlogJuegosMesa";
import BlogAuriculares from "../pages/BlogAuriculares";
import PrivateRoute from "../components/PrivateRoute";

export const appRoutes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/productos" element={<Productos />} />
    <Route path="/carrito" element={<Carrito />} />
    <Route path="/login" element={<Login />} />
    <Route path="/registro" element={<Registro />} />
    <Route path="/nosotros" element={<Nosotros />} />

    {/* Blog */}
    <Route path="/blog" element={<Blog />} />
    <Route path="/blog/guia-setup-gamer" element={<BlogSetupGamer />} />
    <Route path="/blog/top-juegos-mesa-familia" element={<BlogJuegosMesa />} />
    <Route
      path="/blog/mejores-auriculares-2025"
      element={<BlogAuriculares />}
    />

    {/* Admin */}
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
