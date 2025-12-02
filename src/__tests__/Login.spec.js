import React from "react";
import { render, screen } from "@testing-library/react";

// Mock COMPLETO
jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
  Link: ({ children }) => <span>{children}</span>,
}));

jest.mock("../context/AuthContext", () => ({
  useAuth: () => ({
    login: jest.fn(),
  }),
}));

import Login from "../pages/Login";

describe("Login Page", () => {
  
  // Usar getByRole con heading para el título
  it("debe mostrar el título Ingresar", () => {
    render(<Login />);
    expect(screen.getByRole("heading", { name: /ingresar/i })).toBeInTheDocument();
  });

  // Usar getByPlaceholderText o buscar por tipo de input
  it("debe tener un campo de tipo email", () => {
    render(<Login />);
    const emailInput = document.querySelector('input[type="email"]');
    expect(emailInput).toBeInTheDocument();
  });

  it("debe tener un campo de tipo password", () => {
    render(<Login />);
    const passwordInput = document.querySelector('input[type="password"]');
    expect(passwordInput).toBeInTheDocument();
  });

  it("debe tener un botón de submit", () => {
    render(<Login />);
    expect(screen.getByRole("button", { name: /ingresar/i })).toBeInTheDocument();
  });

  it("debe mostrar el texto de registro", () => {
    render(<Login />);
    expect(screen.getByText(/no tienes cuenta/i)).toBeInTheDocument();
  });
});