import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="card h-100">
      <img
        src={product.imageUrl || "https://via.placeholder.com/300x200"}
        className="card-img-top"
        alt={product.name}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text text-muted mb-1">{product.category}</p>
        <p className="fw-bold text-success mb-3">
          ${product.price?.toLocaleString("es-CL")}
        </p>
        <div className="mt-auto d-flex justify-content-between">
          <Link to={`/productos/${product.id}`} className="btn btn-outline-primary btn-sm">
            Ver detalle
          </Link>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => addToCart(product)}
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
