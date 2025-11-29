import React from "react";
import ReactDOM from "react-dom/client";
import Login from "../pages/Login";
import { AuthProvider } from "../context/AuthContext";
import { BrowserRouter } from "react-router-dom";

describe("Login page", function () {
  it("muestra el formulario de login", function () {
    const div = document.createElement("div");
    const root = ReactDOM.createRoot(div);
    root.render(
      <BrowserRouter>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </BrowserRouter>
    );
    expect(div.innerHTML).toContain("Ingresar");
    expect(div.innerHTML).toContain("Correo");
    expect(div.innerHTML).toContain("Contraseña");
  });
});
