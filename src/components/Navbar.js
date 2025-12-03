import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const { totalItems } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand d-flex align-items-center" to="/">
        <img
          src="/logo412.png"
          alt="Level-Up Gamer"
          style={{ width: 40, marginRight: 8 }}
        />
        <span style={{ fontFamily: "Orbitron, sans-serif" }}>
          Level-Up Gamer
        </span>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/productos"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              Productos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/nosotros"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              Nosotros
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/blog"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              Blog
            </NavLink>
          </li>
        </ul>

        <ul className="navbar-nav ms-auto align-items-center">
          <li className="nav-item me-3">
            <Link
              to="/carrito"
              className="btn btn-success btn-sm"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              🛒 Carrito: {totalItems} ítems
            </Link>
          </li>

          {user ? (
            <>
              {(user.role === "ADMIN" || user.role === "ROLE_ADMIN") && (
                <li className="nav-item me-2">
                  <Link
                    to="/admin"
                    className="btn btn-outline-light btn-sm"
                    style={{ fontFamily: "Orbitron, sans-serif" }}
                  >
                    Usuario: {user.name || user.email}
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={handleLogout}
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                >
                  Cerrar sesión
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <NavLink
                  className="btn btn-outline-light btn-sm me-2"
                  to="/login"
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                >
                  Ingresar
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="btn btn-primary btn-sm"
                  to="/registro"
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                >
                  Crear cuenta
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
