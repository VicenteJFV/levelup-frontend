import React from "react";
import { render, screen } from "@testing-library/react";
import { AuthProvider, useAuth } from "../context/AuthContext";

// Componente de prueba
const TestComponent = () => {
  const { user, token } = useAuth();
  
  return (
    <div>
      <span data-testid="user">{user ?  user.name : "null"}</span>
      <span data-testid="token">{token || "null"}</span>
      <span data-testid="logged-in">{user ?  "true" : "false"}</span>
    </div>
  );
};

describe("AuthContext", () => {
  
  beforeEach(() => {
    // Limpiar localStorage antes de cada test
    localStorage.clear();
  });

  it("debe iniciar sin usuario autenticado", () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );
    
    expect(screen.getByTestId("user").textContent).toBe("null");
    expect(screen.getByTestId("logged-in").textContent).toBe("false");
  });

  it("debe iniciar sin token", () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );
    
    expect(screen.getByTestId("token").textContent).toBe("null");
  });

  it("debe proporcionar el contexto a los componentes hijos", () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );
    
    expect(screen.getByTestId("user")).toBeInTheDocument();
    expect(screen.getByTestId("token")).toBeInTheDocument();
  });

  it("debe renderizarse sin errores", () => {
    const { container } = render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );
    
    expect(container).toBeInTheDocument();
  });
});