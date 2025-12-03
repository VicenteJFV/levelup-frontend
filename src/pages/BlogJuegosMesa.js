import React from "react";
import { Link } from "react-router-dom";

const BlogJuegosMesa = () => {
  return (
    <div className="container">
      <Link to="/blog" className="btn btn-outline-primary btn-sm mb-4">
        ← Volver al Blog
      </Link>

      <h2 className="text-light mb-2">Top 5 Juegos de Mesa para Familia</h2>
      <p className="text-muted mb-4">25 de Noviembre, 2024</p>

      <div className="row">
        {/* Contenido del blog - Izquierda */}
        <div className="col-lg-7">
          <div className="card bg-dark text-light border-primary mb-4">
            <div className="card-body">
              <h4 className="text-primary mb-3">
                Diversión para todas las edades
              </h4>
              <p>
                Los juegos de mesa son perfectos para desconectarse de las
                pantallas y disfrutar tiempo de calidad en familia. Aquí te
                dejamos nuestro top 5 favoritos.
              </p>

              <h5 className="text-primary mt-4 mb-2">1. Catan</h5>
              <p>
                El clásico juego de estrategia donde debes construir
                asentamientos, comerciar recursos y expandir tu territorio.
                Ideal para partidas de 3 a 4 jugadores.
              </p>

              <h5 className="text-primary mt-4 mb-2">2. Ticket to Ride</h5>
              <p>
                Construye rutas de tren a través del mapa. Fácil de aprender
                pero con suficiente estrategia para mantenerte enganchado.
                Perfecto para toda la familia.
              </p>

              <h5 className="text-primary mt-4 mb-2">3. Dixit</h5>
              <p>
                Un juego de creatividad e imaginación. Usa cartas con
                ilustraciones hermosas para contar historias. Excelente para
                niños y adultos por igual.
              </p>

              <h5 className="text-primary mt-4 mb-2">4. Codenames</h5>
              <p>
                Juego de palabras en equipos. Un jugador da pistas y los demás
                deben adivinar las palabras correctas. Genera momentos muy
                divertidos.
              </p>

              <h5 className="text-primary mt-4 mb-2">5. Uno</h5>
              <p>
                El clásico que nunca falla. Simple, rápido y siempre genera
                risas (y algo de competencia sana). Ideal para todas las edades
                y cualquier ocasión.
              </p>
            </div>
          </div>

          {/* Otros artículos */}
          <div className="card bg-dark text-light border-primary">
            <div className="card-body">
              <h5 className="text-primary mb-3">Otros artículos</h5>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <Link to="/blog/guia-setup-gamer" className="text-light">
                    → Guía para Armar tu Setup Gamer
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog/mejores-auriculares-2025"
                    className="text-light"
                  >
                    → Mejores Auriculares 2025
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Imagen - Derecha */}
        <div className="col-lg-5 mt-4 mt-lg-0">
          <img
            src="/b2.jpg"
            alt="Juegos de Mesa"
            className="img-fluid rounded shadow"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogJuegosMesa;
