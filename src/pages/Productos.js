import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import { getProductos } from "../services/productosService";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    async function cargar() {
      try {
        const data = await getProductos();
        setProductos(data);
      } catch (err) {
        console.error("Error cargando productos", err);
      } finally {
        setCargando(false);
      }
    }
    cargar();
  }, []);

  if (cargando) return <Loader />;

  return (
    <div>
      <h2 className="text-light mb-4">Productos</h2>
      {productos.length === 0 ? (
        <p className="text-muted">No hay productos disponibles.</p>
      ) : (
        <div className="row g-3">
          {productos.map((p) => (
            <div className="col-md-3" key={p.id}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Productos;
