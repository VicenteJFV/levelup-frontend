import React from "react";
import { useNavigate, Link } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";

const categoriasMock = [
  {
    id: 1,
    name: "Consolas",
    description: "PlayStation, Xbox, Nintendo.",
    filtro: "Consola",
  },
  {
    id: 2,
    name: "Periféricos",
    description: "Teclados, mouse, headsets, monitores.",
    filtro: "Periférico",
  },
  {
    id: 3,
    name: "Accesorios",
    description: "Sillas, controles, almacenamiento.",
    filtro: "Accesorio",
  },
];

const beneficios = [
  {
    icon: "🚚",
    titulo: "Envío a todo Chile",
    descripcion: "Despacho rápido y seguro a cualquier región del país.",
  },
  {
    icon: "💳",
    titulo: "Pago Seguro",
    descripcion: "Múltiples métodos de pago con transacciones protegidas.",
  },
  {
    icon: "🛡️",
    titulo: "Garantía Oficial",
    descripcion:
      "Todos nuestros productos cuentan con garantía del fabricante.",
  },
  {
    icon: "🎧",
    titulo: "Soporte Gamer",
    descripcion: "Atención personalizada de gamers para gamers.",
  },
];

const blogDestacados = [
  {
    slug: "guia-setup-gamer",
    titulo: "Guía para Armar tu Setup Gamer",
    imagen: "/b1.jpg",
  },
  {
    slug: "top-juegos-mesa-familia",
    titulo: "Top 5 Juegos de Mesa para Familia",
    imagen: "/b2.jpg",
  },
  {
    slug: "mejores-auriculares-2025",
    titulo: "Mejores Auriculares 2025",
    imagen: "/b3.jpg",
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container" style={{ paddingBottom: "3rem" }}>
      {/* Hero Section */}
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

      {/* Beneficios */}
      <section className="mb-5">
        <div className="row g-3">
          {beneficios.map((beneficio, index) => (
            <div className="col-md-3 col-6" key={index}>
              <div className="card bg-dark text-light h-100 border-primary text-center">
                <div className="card-body py-4">
                  <div style={{ fontSize: "2rem" }}>{beneficio.icon}</div>
                  <h6 className="text-primary mt-2 mb-1">{beneficio.titulo}</h6>
                  <small className="text-muted">{beneficio.descripcion}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categorías destacadas */}
      <section className="mb-5">
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
                onClick={() =>
                  navigate(
                    `/productos?categoria=${encodeURIComponent(cat.filtro)}`
                  )
                }
              />
            </div>
          ))}
        </div>
      </section>

      {/* Banner promocional */}
      <section className="mb-5">
        <div
          className="card border-primary"
          style={{
            background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
          }}
        >
          <div className="card-body text-center py-5">
            <h3
              className="text-primary mb-2"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              🔥 ¡Ofertas de Temporada! 🔥
            </h3>
            <p className="text-light mb-3">
              Hasta 30% de descuento en periféricos seleccionados. ¡No te lo
              pierdas!
            </p>
            <button
              className="btn btn-primary"
              onClick={() => navigate("/productos")}
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              Ver ofertas
            </button>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="mb-5">
        <div className="row align-items-center">
          <div className="col-md-5 mb-4 mb-md-0">
            <img
              src="/nosotros-team.jpg"
              alt="Equipo Level Up Gamer"
              className="img-fluid rounded shadow"
              style={{
                maxHeight: "350px",
                width: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          <div className="col-md-7">
            <h2
              className="h4 text-primary mb-3"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              ¿Por qué elegirnos?
            </h2>
            <p className="text-light">
              En Level Up Gamer somos más que una tienda, somos una comunidad de
              gamers apasionados. Entendemos lo que buscas porque nosotros
              también lo vivimos.
            </p>
            <ul className="text-light list-unstyled">
              <li className="mb-2">✅ Productos originales con garantía</li>
              <li className="mb-2">✅ Asesoría personalizada</li>
              <li className="mb-2">✅ Precios competitivos</li>
              <li className="mb-2">✅ Comunidad activa de gamers</li>
            </ul>
            <button
              className="btn btn-outline-primary mt-2"
              onClick={() => navigate("/nosotros")}
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              Conoce más sobre nosotros
            </button>
          </div>
        </div>
      </section>

      {/* Blog destacado */}
      <section className="mb-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2
            className="h4 text-light mb-0"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            📝 Últimos del Blog
          </h2>
          <Link
            to="/blog"
            className="btn btn-outline-primary btn-sm"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            Ver todos →
          </Link>
        </div>
        <div className="row g-4">
          {blogDestacados.map((blog, index) => (
            <div className="col-md-4" key={index}>
              <Link to={`/blog/${blog.slug}`} className="text-decoration-none">
                <div className="card bg-dark text-light h-100 border-primary">
                  <img
                    src={blog.imagen}
                    alt={blog.titulo}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h6 className="text-primary mb-0">{blog.titulo}</h6>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section>
        <div className="card bg-dark border-primary">
          <div className="card-body text-center py-4">
            <h4
              className="text-primary mb-2"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              📬 Únete a nuestra comunidad
            </h4>
            <p className="text-light mb-3">
              Recibe ofertas exclusivas, noticias gaming y descuentos
              especiales.
            </p>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control bg-dark text-light border-primary"
                    placeholder="Tu correo electrónico"
                  />
                  <button
                    className="btn btn-primary"
                    style={{ fontFamily: "Orbitron, sans-serif" }}
                  >
                    Suscribirse
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
