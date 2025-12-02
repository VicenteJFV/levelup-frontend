import React from "react";
import { render, screen } from "@testing-library/react";

// Mock de react-router-dom
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: ({ children, to }) => <a href={to}>{children}</a>,
  NavLink: ({ children, to }) => <a href={to}>{children}</a>,
  useNavigate: () => jest.fn(),
}));

// Mock de contexts
jest.mock("../context/AuthContext", () => ({
  useAuth: () => ({
    user: null,
    logout: jest.fn(),
  }),
}));

jest.mock("../context/CartContext", () => ({
  useCart: () => ({
    totalItems: 0,
  }),
}));

import Navbar from "../components/Navbar";

describe("Navbar Component", () => {
  
  it("debe mostrar el nombre de la marca", () => {
    render(<Navbar />);
    expect(screen.getByText("Level-Up Gamer")).toBeInTheDocument();
  });

  it("debe mostrar el enlace a Productos", () => {
    render(<Navbar />);
    expect(screen.getByText("Productos")).toBeInTheDocument();
  });

  it("debe mostrar el contador del carrito", () => {
    render(<Navbar />);
    expect(screen.getByText(/carrito/i)).toBeInTheDocument();
  });

  it("debe mostrar botón Ingresar cuando no hay usuario", () => {
    render(<Navbar />);
    expect(screen.getByText("Ingresar")).toBeInTheDocument();
  });
});