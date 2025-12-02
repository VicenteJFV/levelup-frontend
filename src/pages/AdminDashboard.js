import React, { useEffect, useMemo, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import { getPedidos } from "../services/adminService";

const AdminDashboard = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    async function cargar() {
      try {
        const data = await getPedidos();
        setPedidos(data);
      } catch (err) {
        console.error("Error cargando pedidos para dashboard:", err);
      }
    }
    cargar();
  }, []);

  const stats = useMemo(() => {
    if (!pedidos || pedidos.length === 0) {
      return {
        totalSales: 0,
        totalOrders: 0,
        pending: 0,
        delivered: 0,
        salesByMonth: [],
      };
    }

    const totalSales = pedidos.reduce((acc, p) => acc + (p.total || 0), 0);
    const totalOrders = pedidos.length;
    const pending = pedidos.filter((p) => p.status === "PENDIENTE").length;
    const delivered = pedidos.filter((p) => p.status === "ENTREGADO").length;

    const salesByMonthMap = new Map();

    pedidos.forEach((p) => {
      if (!p.createdAt || !p.total) return;

      const date = new Date(p.createdAt);
      // ejemplo: "dic 2025"
      const key = date.toLocaleDateString("es-CL", {
        month: "short",
        year: "numeric",
      });

      const current = salesByMonthMap.get(key) || 0;
      salesByMonthMap.set(key, current + p.total);
    });

    const salesByMonth = Array.from(salesByMonthMap.entries())
      .map(([month, total]) => ({ month, total }))
      .sort((a, b) => {
        const [mA, yA] = a.month.split(" ");
        const [mB, yB] = b.month.split(" ");

        const idx = [
          "ene",
          "feb",
          "mar",
          "abr",
          "may",
          "jun",
          "jul",
          "ago",
          "sep",
          "oct",
          "nov",
          "dic",
        ];

        const monthIndexA = idx.findIndex(
          (m) => m.toLowerCase() === mA.toLowerCase()
        );
        const monthIndexB = idx.findIndex(
          (m) => m.toLowerCase() === mB.toLowerCase()
        );

        const yearA = parseInt(yA, 10);
        const yearB = parseInt(yB, 10);

        if (yearA === yearB) return monthIndexA - monthIndexB;
        return yearA - yearB;
      });

    return { totalSales, totalOrders, pending, delivered, salesByMonth };
  }, [pedidos]);

  return (
    <div className="row g-0">
      <div
        className="col-md-3 bg-dark vh-100 position-sticky top-0"
        style={{ padding: "1.5rem" }}
      >
        <AdminSidebar />
      </div>
      <div className="col-md-9" style={{ padding: "2rem" }}>
        <h2 className="text-light mb-4">Panel de administración</h2>

        {/* Tarjetas de KPIs */}
        <div className="row g-3 mb-4">
          <div className="col-md-3">
            <div className="card bg-dark text-light h-100 border-success">
              <div className="card-body">
                <h6 className="card-title text-uppercase text-muted small mb-3">
                  Ventas totales
                </h6>
                <p
                  className="h3 fw-bold text-success mb-0"
                  style={{ fontSize: "1.75rem" }}
                >
                  ${stats.totalSales.toLocaleString("es-CL")}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card bg-dark text-light h-100 border-primary">
              <div className="card-body">
                <h6 className="card-title text-uppercase text-muted small mb-3">
                  Pedidos totales
                </h6>
                <p className="h1 fw-bold text-primary mb-0">
                  {stats.totalOrders}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card bg-dark text-light h-100 border-warning">
              <div className="card-body">
                <h6 className="card-title text-uppercase text-muted small mb-3">
                  Pendientes
                </h6>
                <p className="h1 fw-bold text-warning mb-0">{stats.pending}</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card bg-dark text-light h-100 border-info">
              <div className="card-body">
                <h6 className="card-title text-uppercase text-muted small mb-3">
                  Entregados
                </h6>
                <p className="h1 fw-bold text-info mb-0">{stats.delivered}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Ventas por mes */}
        <div className="card bg-dark text-light mb-4">
          <div className="card-body">
            <h5 className="card-title mb-3">Ventas por mes</h5>

            {stats.salesByMonth.length === 0 ? (
              <p className="text-muted mb-0">
                Aún no hay datos de ventas por mes.
              </p>
            ) : (
              <table className="table table-dark table-striped table-sm mb-0">
                <thead>
                  <tr>
                    <th>Mes</th>
                    <th className="text-end">Ventas</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.salesByMonth.map((m) => (
                    <tr key={m.month}>
                      <td>{m.month}</td>
                      <td className="text-end">
                        ${m.total.toLocaleString("es-CL")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        <p className="text-muted">
          Esta vista se usará para la defensa de la EP3 (roles y JWT).
        </p>
      </div>
    </div>
  );
};

export default AdminDashboard;
