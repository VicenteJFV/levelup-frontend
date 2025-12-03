import React from "react";
import { Link } from "react-router-dom";

const BlogAuriculares = () => {
  return (
    <div className="container">
      <Link to="/blog" className="btn btn-outline-primary btn-sm mb-4">
        ← Volver al Blog
      </Link>

      <h2 className="text-light mb-2">Mejores Auriculares 2025</h2>
      <p className="text-muted mb-4">20 de Noviembre, 2024</p>

      <div className="row">
        {/* Contenido del blog - Izquierda */}
        <div className="col-lg-7">
          <div className="card bg-dark text-light border-primary mb-4">
            <div className="card-body">
              <h4 className="text-primary mb-3">
                Los mejores headsets del mercado
              </h4>
              <p>
                Elegir los auriculares correctos puede marcar la diferencia en
                tu experiencia gaming. Aquí analizamos los mejores modelos para
                este 2025.
              </p>

              <h5 className="text-primary mt-4 mb-2">1. HyperX Cloud III</h5>
              <p>
                Excelente calidad de sonido, micrófono desmontable y muy cómodos
                para sesiones largas. La mejor opción calidad-precio del
                mercado.
              </p>

              <h5 className="text-primary mt-4 mb-2">2. Logitech G Pro X 2</h5>
              <p>
                Audio de alta fidelidad con tecnología inalámbrica Lightspeed.
                Usado por profesionales de esports. Batería de hasta 50 horas.
              </p>

              <h5 className="text-primary mt-4 mb-2">
                3. SteelSeries Arctis Nova 7
              </h5>
              <p>
                Sonido espacial 360°, conexión simultánea a PC y móvil, y un
                diseño elegante. Ideal para quienes buscan versatilidad.
              </p>

              <h5 className="text-primary mt-4 mb-2">
                4. Razer BlackShark V2 Pro
              </h5>
              <p>
                Micrófono con aislamiento de voz, drivers de titanio de 50mm y
                almohadillas de espuma con memoria. Comodidad premium.
              </p>

              <h5 className="text-primary mt-4 mb-2">5. Corsair HS80 RGB</h5>
              <p>
                Audio Dolby Atmos, construcción duradera y RGB personalizable.
                Una opción sólida para gaming y contenido multimedia.
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
                    to="/blog/top-juegos-mesa-familia"
                    className="text-light"
                  >
                    → Top 5 Juegos de Mesa para Familia
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Imagen - Derecha */}
        <div className="col-lg-5 mt-4 mt-lg-0">
          <img
            src="/b3.jpg"
            alt="Auriculares Gaming"
            className="img-fluid rounded shadow"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogAuriculares;
