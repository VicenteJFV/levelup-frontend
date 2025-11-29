import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "../components/Navbar";
import { AuthProvider } from "../context/AuthContext";
import { CartProvider } from "../context/CartContext";

describe("Navbar component", function () {
  it("se renderiza sin errores", function () {
    const div = document.createElement("div");
    const root = ReactDOM.createRoot(div);
    root.render(
      <AuthProvider>
        <CartProvider>
          <Navbar />
        </CartProvider>
      </AuthProvider>
    );
    expect(div.innerHTML).toContain("Level-Up Gamer");
  });
});
