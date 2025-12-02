import React from "react";
import { render, screen } from "@testing-library/react";

// Mock COMPLETO
jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
  Link: ({ children, to }) => <a href={to}>{children}</a>,
}));

import Registro from "../pages/Registro";

describe("Registro Page", () => {
  
  it("debe mostrar el título Crear cuenta", () => {
    render(<Registro />);
    expect(screen.getByRole("heading", { name: /crear cuenta/i })).toBeInTheDocument();
  });

  it("debe tener un campo para el nombre", () => {
    render(<Registro />);
    const nombreInput = document.querySelector('input[name="name"]');
    expect(nombreInput).toBeInTheDocument();
  });

  it("debe tener un campo para el correo", () => {
    render(<Registro />);
    const emailInput = document.querySelector('input[type="email"]');
    expect(emailInput).toBeInTheDocument();
  });

  it("debe tener un campo para la contraseña", () => {
    render(<Registro />);
    const passwordInput = document.querySelector('input[type="password"]');
    expect(passwordInput).toBeInTheDocument();
  });

  it("debe tener un botón de Registrarse", () => {
    render(<Registro />);
    expect(screen.getByRole("button", { name: /registrarse/i })).toBeInTheDocument();
  });

  it("debe tener enlace para iniciar sesión", () => {
    render(<Registro />);
    expect(screen.getByText(/inicia sesión/i)).toBeInTheDocument();
  });
});