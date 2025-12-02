import React, { useEffect, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import { getPedidos, actualizarPedido } from "../services/adminService";

const AdminPedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargar = async () => {
      try {
        const data = await getPedidos();
        setPedidos(data);
      } catch (err) {
        console.error(err);
      } finally {
        setCargando(false);
      }
    };

    cargar();
  }, []);

  const handleEstadoChange = async (pedidoId, nuevoEstado) => {
    const pedido = pedidos.find((p) => p.id === pedidoId);
    if (!pedido) return;

    const pedidoActualizado = { ...pedido, status: nuevoEstado };

    try {
      await actualizarPedido(pedidoId, pedidoActualizado);

      // Actualizar estado local para que se vea el cambio al tiro
      setPedidos((prev) =>
        prev.map((p) => (p.id === pedidoId ? { ...p, status: nuevoEstado } : p))
      );
    } catch (err) {
      console.error(err);
      alert("Error al actualizar el estado del pedido");
    }
  };

  return (
    <div className="row">
      <div className="col-md-3 mb-3">
        <AdminSidebar />
      </div>

      <div className="col-md-9">
        <h2 className="text-light mb-3">Gestión de pedidos</h2>

        {cargando ? (
          <p className="text-muted">Cargando pedidos...</p>
        ) : pedidos.length === 0 ? (
          <p className="text-muted">No hay pedidos registrados.</p>
        ) : (
          <table className="table table-dark table-striped table-sm align-middle">
            <thead>
              <tr>
                <th>ID pedido</th>
                <th>Cliente</th>
                <th>Correo</th>
                <th className="text-end">Total</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {pedidos.map((p) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.customerName}</td>
                  <td>{p.customerEmail}</td>
                  <td className="text-end">
                    {p.total?.toLocaleString("es-CL", {
                      style: "currency",
                      currency: "CLP",
                    })}
                  </td>
                  <td style={{ minWidth: 170 }}>
                    <select
                      className="form-select form-select-sm bg-dark text-light border-secondary"
                      value={p.status}
                      onChange={(e) => handleEstadoChange(p.id, e.target.value)}
                    >
                      <option value="PENDIENTE">PENDIENTE</option>
                      <option value="CANCELADO">CANCELADO</option>
                      <option value="ENTREGADO">ENTREGADO</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminPedidos;
