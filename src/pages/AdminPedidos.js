import React, { useEffect, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import { getPedidos } from "../services/adminService";

const AdminPedidos = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    async function cargar() {
      const data = await getPedidos();
      setPedidos(data);
    }
    cargar();
  }, []);

  return (
    <div className="row">
      <div className="col-md-3 mb-3">
        <AdminSidebar />
      </div>
      <div className="col-md-9">
        <h2 className="text-light mb-3">Gestión de pedidos</h2>
        <table className="table table-dark table-striped table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Cliente</th>
              <th>Total</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {pedidos.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.customerName}</td>
                <td>${p.total?.toLocaleString("es-CL")}</td>
                <td>{p.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {pedidos.length === 0 && (
          <p className="text-muted">No hay pedidos registrados.</p>
        )}
      </div>
    </div>
  );
};

export default AdminPedidos;
