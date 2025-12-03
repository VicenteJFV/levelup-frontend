import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import { getProductos } from "../services/productosService";

const categorias = ["Todas", "Consola", "Periférico", "Accesorio"];

const Productos = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [busqueda, setBusqueda] = useState("");
  const [categoriaActiva, setCategoriaActiva] = useState("Todas");
  const [ordenAscendente, setOrdenAscendente] = useState(true);

  // Leer categoría de la URL al cargar
  useEffect(() => {
    const categoriaUrl = searchParams.get("categoria");
    if (categoriaUrl && categorias.includes(categoriaUrl)) {
      setCategoriaActiva(categoriaUrl);
    }
  }, [searchParams]);

  useEffect(() => {
    async function cargar() {
      try {
        const data = await getProductos();
        const ordenados = data.sort((a, b) => a.name.localeCompare(b.name));
        setProductos(ordenados);
      } catch (err) {
        console.error("Error cargando productos", err);
      } finally {
        setCargando(false);
      }
    }
    cargar();
  }, []);

  // Filtrar por búsqueda y categoría
  useEffect(() => {
    let filtrados = productos;

    // Filtrar por categoría
    if (categoriaActiva !== "Todas") {
      filtrados = filtrados.filter((p) => p.category === categoriaActiva);
    }

    // Filtrar por búsqueda
    if (busqueda) {
      filtrados = filtrados.filter((p) =>
        p.name.toLowerCase().includes(busqueda.toLowerCase())
      );
    }

    // Ordenar
    filtrados = [...filtrados].sort((a, b) => {
      if (ordenAscendente) {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

    setProductosFiltrados(filtrados);
  }, [busqueda, productos, categoriaActiva, ordenAscendente]);

  // Cambiar categoría
  const cambiarCategoria = (categoria) => {
    setCategoriaActiva(categoria);
    if (categoria === "Todas") {
      setSearchParams({});
    } else {
      setSearchParams({ categoria });
    }
  };

  // Cambiar orden A-Z / Z-A
  const toggleOrden = () => {
    setOrdenAscendente(!ordenAscendente);
  };

  if (cargando) return <Loader />;

  return (
    <div className="container">
      <h2 className="text-light mb-4">Productos</h2>

      {/* Filtro por categoría */}
      <div className="mb-3">
        {categorias.map((cat) => (
          <button
            key={cat}
            className={`btn btn-sm me-2 mb-2 ${
              categoriaActiva === cat ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => cambiarCategoria(cat)}
          >
            {cat === "Todas" ? "Todas" : `${cat}s`}
          </button>
        ))}
      </div>

      {/* Barra de búsqueda y ordenamiento */}
      <div className="row mb-4 g-2">
        <div className="col-12 col-md-8">
          <input
            type="text"
            className="form-control"
            placeholder="🔍 Buscar productos..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
        <div className="col-12 col-md-4">
          <button
            className="btn btn-outline-primary w-100"
            onClick={toggleOrden}
          >
            Ordenar: {ordenAscendente ? "A → Z" : "Z → A"}
          </button>
        </div>
      </div>

      {/* Resultados */}
      {productosFiltrados.length === 0 ? (
        <p className="text-muted">No se encontraron productos. </p>
      ) : (
        <div className="row g-3">
          {productosFiltrados.map((p) => (
            <div className="col-6 col-md-4 col-lg-3" key={p.id}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Productos;
