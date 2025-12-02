import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { CartProvider, useCart } from "../context/CartContext";

// Componente de prueba para acceder al contexto
const TestComponent = () => {
  const { items, addToCart, removeFromCart, clearCart, totalItems, totalPrice, increaseQty, decreaseQty } = useCart();
  
  const testProduct = { id: 1, name: "Test Product", price: 10000 };
  
  return (
    <div>
      <span data-testid="total-items">{totalItems}</span>
      <span data-testid="total-price">{totalPrice}</span>
      <span data-testid="items-count">{items.length}</span>
      <button onClick={() => addToCart(testProduct)}>Agregar</button>
      <button onClick={() => removeFromCart(1)}>Eliminar</button>
      <button onClick={() => clearCart()}>Vaciar</button>
      <button onClick={() => increaseQty(1)}>Aumentar</button>
      <button onClick={() => decreaseQty(1)}>Disminuir</button>
    </div>
  );
};

describe("CartContext", () => {
  
  // Test 1: Inicia con carrito vacío
  it("debe iniciar con el carrito vacío", () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );
    
    expect(screen.getByTestId("total-items").textContent).toBe("0");
    expect(screen.getByTestId("items-count").textContent).toBe("0");
  });

  // Test 2: Agregar producto al carrito
  it("debe agregar un producto al carrito", () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );
    
    fireEvent.click(screen.getByText("Agregar"));
    
    expect(screen.getByTestId("total-items").textContent).toBe("1");
  });

  // Test 3: Calcular precio total correctamente
  it("debe calcular el precio total correctamente", () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );
    
    fireEvent.click(screen.getByText("Agregar"));
    
    expect(screen.getByTestId("total-price").textContent).toBe("10000");
  });

  // Test 4: Incrementar cantidad de producto
  it("debe incrementar la cantidad del producto", () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );
    
    fireEvent.click(screen.getByText("Agregar"));
    fireEvent.click(screen.getByText("Aumentar"));
    
    expect(screen.getByTestId("total-items").textContent).toBe("2");
    expect(screen.getByTestId("total-price").textContent).toBe("20000");
  });

  // Test 5: Eliminar producto del carrito
  it("debe eliminar un producto del carrito", () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );
    
    fireEvent.click(screen.getByText("Agregar"));
    fireEvent.click(screen.getByText("Eliminar"));
    
    expect(screen.getByTestId("total-items").textContent).toBe("0");
  });

  // Test 6: Vaciar carrito completamente
  it("debe vaciar el carrito completamente", () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );
    
    fireEvent.click(screen.getByText("Agregar"));
    fireEvent.click(screen.getByText("Agregar"));
    fireEvent.click(screen.getByText("Vaciar"));
    
    expect(screen.getByTestId("total-items").textContent).toBe("0");
    expect(screen.getByTestId("items-count").textContent).toBe("0");
  });
});