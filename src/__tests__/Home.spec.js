import React from "react";
import { render, screen } from "@testing-library/react";

// Mock completo de react-router-dom ANTES de importar el componente
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
  Link: ({ children, to }) => <a href={to}>{children}</a>, // Mock de Link
}));

import Home from "../pages/Home";

describe("Home Page", () => {
  
  it("debe mostrar el título principal", () => {
    render(<Home />);
    expect(screen.getByText(/Sube de nivel/i)).toBeInTheDocument();
  });

  it("debe mostrar el botón Explorar productos", () => {
    render(<Home />);
    expect(screen.getByText("Explorar productos")).toBeInTheDocument();
  });

  it("debe mostrar el botón Crear cuenta", () => {
    render(<Home />);
    expect(screen.getByText("Crear cuenta")).toBeInTheDocument();
  });

  it("debe mostrar Categorías destacadas", () => {
    render(<Home />);
    expect(screen.getByText("Categorías destacadas")).toBeInTheDocument();
  });

  it("debe mostrar la categoría Consolas", () => {
    render(<Home />);
    expect(screen.getByText("Consolas")).toBeInTheDocument();
  });
});