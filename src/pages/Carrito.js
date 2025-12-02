import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { crearPedido } from "../services/orderService";

const Carrito = () => {
  const {
    items,
    removeFromCart,
    clearCart,
    totalPrice,
    increaseQty,
    decreaseQty,
  } = useCart();

  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);

  // Si el carrito está vacío
  if (items.length === 0) {
    return (
      <div className="text-center py-5">
        <h2 className="text-light mb-4">Tu carrito está vacío</h2>
        <p className="text-muted mb-4">¡Agrega productos para comenzar!</p>
        <Link to="/productos" className="btn btn-primary">
          Ver productos
        </Link>
      </div>
    );
  }

  const handleCheckout = async () => {
    if (loading) return;
    setLoading(true);

    try {
      // Armamos el objeto pedido según el backend (Order)
      const order = {
        customerName: user?.name || "Invitado",
        customerEmail: user?.email || "sin-correo@levelup.cl",
        total: totalPrice,
        // El backend espera una lista de items con product anidado
        items: items.map((i) => ({
          quantity: i.qty,
          unitPrice: i.product.price,
          product: { id: i.product.id },
        })),
        // status y createdAt los completa el backend
      };

      await crearPedido(order);

      // Limpiar carrito y mandar al home
      clearCart();
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Ocurrió un error al procesar el pedido 😢");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-light mb-4">Carrito de compras</h2>

      <div className="row">
        {/* Lista de productos */}
        <div className="col-lg-8">
          <div className="card">
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th className="text-center">Cantidad</th>
                    <th className="text-end">Precio</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.product.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={
                              item.product.imageUrl ||
                              "https://via.placeholder.com/60"
                            }
                            alt={item.product.name}
                            style={{
                              width: 60,
                              height: 60,
                              objectFit: "cover",
                              borderRadius: 8,
                            }}
                            className="me-3"
                          />
                          <div>
                            <h6 className="mb-0">{item.product.name}</h6>
                            <small className="text-muted">
                              {item.product.category}
                            </small>
                          </div>
                        </div>
                      </td>
                      {/* Cantidad */}
                      <td className="text-center align-middle">
                        <div className="d-flex align-items-center justify-content-center gap-2">
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() => decreaseQty(item.product.id)}
                            disabled={item.qty <= 1}
                          >
                            −
                          </button>
                          <span className="badge bg-secondary px-3 py-2">
                            {item.qty}
                          </span>
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() => increaseQty(item.product.id)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="text-end align-middle">
                        {(item.product.price * item.qty).toLocaleString(
                          "es-CL",
                          {
                            style: "currency",
                            currency: "CLP",
                          }
                        )}
                      </td>
                      <td className="text-end align-middle">
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => removeFromCart(item.product.id)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <button className="btn btn-outline-danger mt-3" onClick={clearCart}>
            Vaciar carrito
          </button>
        </div>

        {/* Resumen */}
        <div className="col-lg-4">
          <div className="card resumen-compra-card">
            <div className="card-body">
              <h5 className="section-title">Resumen de compra</h5>
              <hr />
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>
                  {totalPrice.toLocaleString("es-CL", {
                    style: "currency",
                    currency: "CLP",
                  })}
                </span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Envío</span>
                <span className="text-success">Gratis</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4">
                <strong>Total</strong>
                <strong className="text-success h5">
                  {totalPrice.toLocaleString("es-CL", {
                    style: "currency",
                    currency: "CLP",
                  })}
                </strong>
              </div>
              <button
                className="btn btn-primary w-100"
                onClick={handleCheckout}
                disabled={loading}
              >
                {loading ? "Procesando..." : "Proceder al pago"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
