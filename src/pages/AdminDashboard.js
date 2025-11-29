import React from "react";
import AdminSidebar from "../components/AdminSidebar";

const AdminDashboard = () => {
  return (
    <div className="row">
      <div className="col-md-3 mb-3">
        <AdminSidebar />
      </div>
      <div className="col-md-9">
        <h2 className="text-light mb-3">Panel de administración</h2>
        <p className="text-muted">
          Desde aquí podrás gestionar productos, pedidos y revisar métricas
          básicas de la tienda. Esta vista se usará para la defensa de la EP3
          (roles y JWT).
        </p>
      </div>
    </div>
  );
};

export default AdminDashboard;
