import React from "react";
import { Link } from "react-router-dom";

const BlogSetupGamer = () => {
  return (
    <div className="container">
      <Link to="/blog" className="btn btn-outline-primary btn-sm mb-4">
        ← Volver al Blog
      </Link>

      <h2 className="text-light mb-2">Guía para Armar tu Setup Gamer</h2>
      <p className="text-muted mb-4">1 de Diciembre, 2024</p>

      <div className="row">
        {/* Contenido del blog - Izquierda */}
        <div className="col-lg-7">
          <div className="card bg-dark text-light border-primary mb-4">
            <div className="card-body">
              <h4 className="text-primary mb-3">¿Por dónde empezar?</h4>
              <p>
                Armar el setup gamer perfecto puede parecer abrumador, pero con
                la guía correcta, es más fácil de lo que piensas. Lo primero es
                definir tu presupuesto y el espacio disponible.
              </p>

              <h5 className="text-primary mt-4 mb-2">1. El Escritorio</h5>
              <p>
                El escritorio es la base de todo. Busca uno con suficiente
                espacio para tu monitor, teclado, mouse y accesorios. Los
                escritorios en L son ideales si tienes espacio, ya que te dan
                más superficie de trabajo.
              </p>

              <h5 className="text-primary mt-4 mb-2">2. La Silla Gamer</h5>
              <p>
                No escatimes en tu silla. Pasarás muchas horas sentado, así que
                invierte en una silla ergonómica con buen soporte lumbar.Tu
                espalda te lo agradecerá.
              </p>

              <h5 className="text-primary mt-4 mb-2">3. Monitor</h5>
              <p>
                Para gaming competitivo, busca monitores de 144Hz o más. Si
                prefieres juegos con gráficos impresionantes, un monitor 4K con
                buen HDR es tu mejor opción.
              </p>

              <h5 className="text-primary mt-4 mb-2">4. Periféricos</h5>
              <p>
                Teclado mecánico, mouse con buen sensor y un headset cómodo son
                esenciales. No olvides un mousepad grande para mayor precisión
                en tus movimientos.
              </p>

              <h5 className="text-primary mt-4 mb-2">5. Iluminación RGB</h5>
              <p>
                El toque final. Las tiras LED y los periféricos con RGB le dan
                personalidad a tu setup. Puedes sincronizarlos para crear
                ambientes únicos mientras juegas.
              </p>
            </div>
          </div>

          {/* Otros artículos */}
          <div className="card bg-dark text-light border-primary">
            <div className="card-body">
              <h5 className="text-primary mb-3">Otros artículos</h5>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <Link
                    to="/blog/top-juegos-mesa-familia"
                    className="text-light"
                  >
                    → Top 5 Juegos de Mesa para Familia
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
            src="/b1.jpg"
            alt="Setup Gamer"
            className="img-fluid rounded shadow"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogSetupGamer;
