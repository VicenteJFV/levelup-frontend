import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

describe("Footer Component", () => {
  
  // Test 1: Renderiza correctamente
  it("debe renderizarse sin errores", () => {
    render(<Footer />);
    expect(screen.getByText(/Level-Up Gamer/i)).toBeInTheDocument();
  });

  // Test 2: Muestra el año actual
  it("debe mostrar el año 2025", () => {
    render(<Footer />);
    expect(screen.getByText(/2025/i)).toBeInTheDocument();
  });

  // Test 3: Muestra que es proyecto académico DUOC UC
  it("debe indicar que es proyecto académico DUOC UC", () => {
    render(<Footer />);
    expect(screen.getByText(/DUOC UC/i)).toBeInTheDocument();
  });

  // Test 4: Tiene la clase CSS correcta
  it("debe tener la estructura correcta de footer", () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector("footer");
    expect(footer).toBeInTheDocument();
  });
});