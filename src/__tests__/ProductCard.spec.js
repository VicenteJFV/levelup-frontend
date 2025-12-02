import React from "react";
import { render, screen } from "@testing-library/react";
import { CartProvider } from "../context/CartContext";

// Mock de react-router-dom ANTES de importar el componente
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: ({ children, to }) => <a href={to}>{children}</a>,
}));

import ProductCard from "../components/ProductCard";

const mockProduct = {
  id: 1,
  name: "Teclado Mecánico RGB",
  category: "Periféricos",
  price: 34990,
  imageUrl: "https://example.com/teclado.jpg",
};

describe("ProductCard Component", () => {
  
  it("debe mostrar el nombre del producto", () => {
    render(
      <CartProvider>
        <ProductCard product={mockProduct} />
      </CartProvider>
    );
    expect(screen.getByText("Teclado Mecánico RGB")).toBeInTheDocument();
  });

  it("debe mostrar la categoría del producto", () => {
    render(
      <CartProvider>
        <ProductCard product={mockProduct} />
      </CartProvider>
    );
    expect(screen.getByText("Periféricos")).toBeInTheDocument();
  });

  it("debe mostrar el botón Agregar", () => {
    render(
      <CartProvider>
        <ProductCard product={mockProduct} />
      </CartProvider>
    );
    expect(screen.getByText("Agregar")).toBeInTheDocument();
  });

  it("debe mostrar el enlace Ver detalle", () => {
    render(
      <CartProvider>
        <ProductCard product={mockProduct} />
      </CartProvider>
    );
    expect(screen.getByText("Ver detalle")).toBeInTheDocument();
  });
});