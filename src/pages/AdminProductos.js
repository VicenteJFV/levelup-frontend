import React, { useEffect, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import { getProductos, crearProducto } from "../services/productosService";

const AdminProductos = () => {
  const [productos, setProductos] = useState([]);
  const [nuevo, setNuevo] = useState({ name: "", price: 0 });

  const cargar = async () => {
    const data = await getProductos();
    setProductos(data);
  };

  useEffect(() => {
    cargar();
  }, []);

  const onChange = (e) =>
    setNuevo({ ...nuevo, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    await crearProducto(nuevo);
    setNuevo({ name: "", price: 0 });
    await cargar();
  };

  return (
    <div className="row">
      <div className="col-md-3 mb-3">
        <AdminSidebar />
      </div>
      <div className="col-md-9">
        <h2 className="text-light mb-3">Gestión de productos</h2>

        <form className="card card-body bg-dark mb-4" onSubmit={onSubmit}>
          <h5 className="text-light">Nuevo producto</h5>
          <div className="row g-2 align-items-end">
            <div className="col-md-6">
              <label className="form-label text-light">Nombre</label>
              <input
                name="name"
                value={nuevo.name}
                onChange={onChange}
                className="form-control"
                required
              />
            </div>
            <div className="col-md-3">
              <label className="form-label text-light">Precio</label>
              <input
                name="price"
                type="number"
                min="0"
                value={nuevo.price}
                onChange={onChange}
                className="form-control"
                required
              />
            </div>
            <div className="col-md-3">
              <button className="btn btn-primary w-100" type="submit">
                Guardar
              </button>
            </div>
          </div>
        </form>

        <table className="table table-dark table-striped table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>${p.price?.toLocaleString("es-CL")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProductos;
