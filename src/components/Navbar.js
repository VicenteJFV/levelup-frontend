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
          src="/logo192.png"
          alt="Level-Up Gamer"
          style={{ width: 40, marginRight: 8 }}
        />
        Level-Up Gamer
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
            <NavLink className="nav-link" to="/productos">
              Productos
            </NavLink>
          </li>
        </ul>

        <ul className="navbar-nav ms-auto align-items-center">
          <li className="nav-item me-3">
            <Link to="/carrito" className="badge bg-primary text-decoration-none">
              🛒 Carrito: {totalItems} ítems
            </Link>
          </li>

          {user ? (
            <>
              {(user.role === "ADMIN" || user.role === "ROLE_ADMIN") && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/admin">
                    Admin
                  </NavLink>
                </li>
              )}
              <li className="nav-item">
                <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>
                  Cerrar sesión
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <NavLink className="btn btn-outline-light btn-sm me-2" to="/login">
                  Ingresar
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="btn btn-primary btn-sm" to="/registro">
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
