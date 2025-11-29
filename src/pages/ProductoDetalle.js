import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { getProductoPorId } from "../services/productosService";
import { useCart } from "../context/CartContext";

const ProductoDetalle = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    async function cargar() {
      try {
        const data = await getProductoPorId(id);
        setProducto(data);
      } catch (err) {
        console.error("Error cargando producto", err);
      } finally {
        setCargando(false);
      }
    }
    cargar();
  }, [id]);

  if (cargando) return <Loader />;
  if (!producto) return <p className="text-muted">Producto no encontrado.</p>;

  return (
    <div className="row">
      <div className="col-md-6">
        <img
          src={producto.imageUrl || "https://via.placeholder.com/600x400"}
          alt={producto.name}
          className="img-fluid rounded shadow-sm"
        />
      </div>
      <div className="col-md-6">
        <h2 className="text-light">{producto.name}</h2>
        <p className="text-muted">{producto.description}</p>
        <p className="fw-bold text-success h4">
          ${producto.price?.toLocaleString("es-CL")}
        </p>
        <button className="btn btn-primary" onClick={() => addToCart(producto)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductoDetalle;
