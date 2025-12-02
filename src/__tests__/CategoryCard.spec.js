import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CategoryCard from "../components/CategoryCard";

describe("CategoryCard Component", () => {
  
  const mockOnClick = jest.fn();

  // Test 1: Renderiza el nombre de la categoría
  it("debe mostrar el nombre de la categoría", () => {
    render(
      <CategoryCard 
        name="Consolas" 
        description="PlayStation, Xbox, Nintendo" 
        onClick={mockOnClick} 
      />
    );
    expect(screen.getByText("Consolas")).toBeInTheDocument();
  });

  // Test 2: Renderiza la descripción
  it("debe mostrar la descripción de la categoría", () => {
    render(
      <CategoryCard 
        name="Consolas" 
        description="PlayStation, Xbox, Nintendo" 
        onClick={mockOnClick} 
      />
    );
    expect(screen.getByText("PlayStation, Xbox, Nintendo")).toBeInTheDocument();
  });

  // Test 3: Ejecuta onClick al hacer clic
  it("debe ejecutar la función onClick al hacer clic", () => {
    render(
      <CategoryCard 
        name="Consolas" 
        description="PlayStation, Xbox, Nintendo" 
        onClick={mockOnClick} 
      />
    );
    
    const card = screen.getByRole("button");
    fireEvent.click(card);
    
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  // Test 4: Funciona sin descripción
  it("debe renderizarse correctamente sin descripción", () => {
    render(
      <CategoryCard 
        name="Periféricos" 
        onClick={mockOnClick} 
      />
    );
    expect(screen.getByText("Periféricos")).toBeInTheDocument();
  });

  // Test 5: Tiene la clase CSS correcta
  it("debe tener la clase category-card", () => {
    const { container } = render(
      <CategoryCard 
        name="Test" 
        onClick={mockOnClick} 
      />
    );
    expect(container.querySelector(".category-card")).toBeInTheDocument();
  });
});