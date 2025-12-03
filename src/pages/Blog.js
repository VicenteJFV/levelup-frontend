import React from "react";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    slug: "guia-setup-gamer",
    titulo: "Guía para Armar tu Setup Gamer",
    imagen: "/b1.jpg",
    resumen:
      "Todo lo que necesitas saber para crear el setup gamer perfecto.  Desde el escritorio hasta los periféricos.",
    fecha: "1 de Diciembre, 2024",
  },
  {
    id: 2,
    slug: "top-juegos-mesa-familia",
    titulo: "Top 5 Juegos de Mesa para Familia",
    imagen: "/b2.jpg",
    resumen:
      "Los mejores juegos de mesa para disfrutar en familia.  Diversión garantizada para todas las edades.",
    fecha: "25 de Noviembre, 2024",
  },
  {
    id: 3,
    slug: "mejores-auriculares-2025",
    titulo: "Mejores Auriculares 2025",
    imagen: "/b3.jpg",
    resumen:
      "Análisis y comparativa de los mejores auriculares gaming del mercado para este 2025.",
    fecha: "20 de Noviembre, 2024",
  },
];

const Blog = () => {
  return (
    <div className="container">
      <h2 className="text-light mb-2">Blog Level Up</h2>
      <p className="text-muted mb-4">
        Noticias, guías y consejos del mundo gaming para que siempre estés al
        día.
      </p>

      <div className="row g-4">
        {blogs.map((blog) => (
          <div className="col-md-4" key={blog.id}>
            <div className="card bg-dark text-light h-100 border-primary">
              <img
                src={blog.imagen}
                alt={blog.titulo}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-primary">{blog.titulo}</h5>
                <p className="card-text text-muted small mb-2">{blog.fecha}</p>
                <p className="card-text">{blog.resumen}</p>
                <div className="mt-auto">
                  <Link
                    to={`/blog/${blog.slug}`}
                    className="btn btn-outline-primary btn-sm"
                  >
                    Leer más →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
