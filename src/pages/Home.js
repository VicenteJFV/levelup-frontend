import React from "react";
import { useNavigate } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";

const categoriasMock = [
  {
    id: 1,
    name: "Computadores Gamers",
    description: "PCs armados para FPS y MMO.",
  },
  { id: 2, name: "Consolas", description: "PlayStation, Xbox, Nintendo." },
  { id: 3, name: "Periféricos", description: "Teclados, mouse, headsets RGB." },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container" style={{ paddingBottom: "5rem" }}>
      <section className="row align-items-center mb-5">
        <div className="col-md-6">
          <h1
            className="display-5 text-primary fw-bold mb-3"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            Sube de nivel tu setup
          </h1>
          <p className="lead text-light">
            Consolas, periféricos y PCs gamers con envío a todo Chile. Descubre
            promociones, blogs y eventos.
          </p>
          <div className="mt-4 d-flex flex-wrap gap-2">
            <button
              className="btn btn-primary"
              onClick={() => navigate("/productos")}
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              Explorar productos
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => navigate("/registro")}
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              Crear cuenta
            </button>
          </div>
        </div>

        <div className="col-md-6 text-center">
          <img
            src="https://images.pexels.com/photos/9072300/pexels-photo-9072300.jpeg"
            alt="Setup gamer"
            className="img-fluid rounded-3 shadow-lg"
          />
        </div>
      </section>

      <section>
        <h2
          className="h4 text-light mb-4"
          style={{ fontFamily: "Orbitron, sans-serif" }}
        >
          Categorías destacadas
        </h2>
        <div className="row g-4">
          {categoriasMock.map((cat) => (
            <div className="col-md-4" key={cat.id}>
              <CategoryCard
                name={cat.name}
                description={cat.description}
                onClick={() => navigate("/productos")}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
