import React from "react";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="list-group">
      <NavLink to="/admin" end className="list-group-item list-group-item-action">
        Dashboard
      </NavLink>
      <NavLink to="/admin/productos" className="list-group-item list-group-item-action">
        Gestión de productos
      </NavLink>
      <NavLink to="/admin/pedidos" className="list-group-item list-group-item-action">
        Gestión de pedidos
      </NavLink>
    </div>
  );
};

export default AdminSidebar;
