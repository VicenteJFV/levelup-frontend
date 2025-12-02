// src/pages/AdminProductos.js
import React, { useEffect, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import {
  getProductosAdmin,
  crearProductoAdmin,
  actualizarProductoAdmin,
  eliminarProductoAdmin,
} from "../services/adminService";

const EMPTY_PRODUCT = {
  name: "",
  category: "",
  price: 0,
  stock: 0,
  description: "",
  imageUrl: "",
};

const AdminProductos = () => {
  const [productos, setProductos] = useState([]);
  const [nuevo, setNuevo] = useState(EMPTY_PRODUCT);
  const [editando, setEditando] = useState(null); // producto que se está editando

  const cargar = async () => {
    try {
      const data = await getProductosAdmin();
      setProductos(data);
    } catch (err) {
      console.error(err);
      alert("Error al cargar productos");
    }
  };

  useEffect(() => {
    cargar();
  }, []);

  const onChangeNuevo = (e) => {
    const { name, value } = e.target;

    // parsear numéricos
    if (name === "price" || name === "stock") {
      setNuevo((prev) => ({
        ...prev,
        [name]: value === "" ? "" : Number(value),
      }));
    } else {
      setNuevo((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const onSubmitNuevo = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...nuevo,
        price: Number(nuevo.price),
        stock: Number(nuevo.stock),
      };

      await crearProductoAdmin(payload);
      setNuevo(EMPTY_PRODUCT);
      await cargar();
    } catch (err) {
      console.error(err);
      alert("Error al crear producto");
    }
  };

  const onClickEditar = (producto) => {
    setEditando({ ...producto });
  };

  const onCancelEditar = () => {
    setEditando(null);
  };

  const onChangeEditar = (e) => {
    const { name, value } = e.target;

    setEditando((prev) => {
      if (!prev) return prev;
      if (name === "price" || name === "stock") {
        return {
          ...prev,
          [name]: value === "" ? "" : Number(value),
        };
      }
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onSubmitEditar = async (e) => {
    e.preventDefault();
    if (!editando) return;

    try {
      const payload = {
        ...editando,
        price: Number(editando.price),
        stock: Number(editando.stock),
      };

      await actualizarProductoAdmin(editando.id, payload);
      setEditando(null);
      await cargar();
    } catch (err) {
      console.error(err);
      alert("Error al actualizar producto");
    }
  };

  const onEliminar = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar este producto?")) return;

    try {
      await eliminarProductoAdmin(id);
      await cargar();
    } catch (err) {
      console.error(err);
      alert("Error al eliminar producto");
    }
  };

  return (
    <div className="row">
      <div className="col-md-3 mb-3">
        <AdminSidebar />
      </div>

      <div className="col-md-9">
        <h2 className="text-light mb-3">Gestión de productos</h2>

        {/* FORMULARIO NUEVO PRODUCTO */}
        <form className="card card-body bg-dark mb-4" onSubmit={onSubmitNuevo}>
          <h5 className="text-light mb-3">Nuevo producto</h5>

          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label text-light">Nombre</label>
              <input
                name="name"
                value={nuevo.name}
                onChange={onChangeNuevo}
                className="form-control"
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label text-light">Categoría</label>
              <input
                name="category"
                value={nuevo.category}
                onChange={onChangeNuevo}
                className="form-control"
                placeholder="Juego PS5, Accesorio, Consola..."
              />
            </div>

            <div className="col-md-3">
              <label className="form-label text-light">Precio</label>
              <input
                name="price"
                type="number"
                min="0"
                value={nuevo.price}
                onChange={onChangeNuevo}
                className="form-control"
                required
              />
            </div>

            <div className="col-md-3">
              <label className="form-label text-light">Stock</label>
              <input
                name="stock"
                type="number"
                min="0"
                value={nuevo.stock}
                onChange={onChangeNuevo}
                className="form-control"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label text-light">URL de imagen</label>
              <input
                name="imageUrl"
                type="url"
                value={nuevo.imageUrl}
                onChange={onChangeNuevo}
                className="form-control"
                placeholder="https://..."
              />
            </div>

            <div className="col-12">
              <label className="form-label text-light">Descripción</label>
              <textarea
                name="description"
                value={nuevo.description}
                onChange={onChangeNuevo}
                className="form-control"
                rows={3}
              />
            </div>

            <div className="col-12 text-end">
              <button className="btn btn-primary px-4" type="submit">
                Guardar
              </button>
            </div>
          </div>
        </form>

        {/* TABLA DE PRODUCTOS */}
        <table className="table table-dark table-striped table-sm align-middle">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Categoría</th>
              <th className="text-end">Precio</th>
              <th className="text-end">Stock</th>
              <th className="text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.category}</td>
                <td className="text-end">
                  {p.price?.toLocaleString("es-CL", {
                    style: "currency",
                    currency: "CLP",
                  })}
                </td>
                <td className="text-end">{p.stock}</td>
                <td className="text-center">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-info me-2"
                    onClick={() => onClickEditar(p)}
                    title="Editar"
                  >
                    ✏️
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => onEliminar(p.id)}
                    title="Eliminar"
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
            {productos.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center text-muted py-3">
                  No hay productos registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* FORMULARIO EDICIÓN */}
        {editando && (
          <form
            className="card card-body bg-dark mt-4 border border-success"
            onSubmit={onSubmitEditar}
          >
            <h5 className="text-light mb-3">
              Editar producto (ID: {editando.id})
            </h5>

            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label text-light">Nombre</label>
                <input
                  name="name"
                  value={editando.name}
                  onChange={onChangeEditar}
                  className="form-control"
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label text-light">Categoría</label>
                <input
                  name="category"
                  value={editando.category}
                  onChange={onChangeEditar}
                  className="form-control"
                />
              </div>

              <div className="col-md-3">
                <label className="form-label text-light">Precio</label>
                <input
                  name="price"
                  type="number"
                  min="0"
                  value={editando.price}
                  onChange={onChangeEditar}
                  className="form-control"
                  required
                />
              </div>

              <div className="col-md-3">
                <label className="form-label text-light">Stock</label>
                <input
                  name="stock"
                  type="number"
                  min="0"
                  value={editando.stock}
                  onChange={onChangeEditar}
                  className="form-control"
                />
              </div>

              <div className="col-md-6">
                <label className="form-label text-light">URL de imagen</label>
                <input
                  name="imageUrl"
                  type="url"
                  value={editando.imageUrl}
                  onChange={onChangeEditar}
                  className="form-control"
                />
              </div>

              <div className="col-12">
                <label className="form-label text-light">Descripción</label>
                <textarea
                  name="description"
                  value={editando.description}
                  onChange={onChangeEditar}
                  className="form-control"
                  rows={3}
                />
              </div>

              <div className="col-12 d-flex justify-content-end gap-2">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={onCancelEditar}
                >
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary">
                  Guardar cambios
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AdminProductos;
