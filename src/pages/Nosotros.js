import React from "react";

const Nosotros = () => {
  return (
    <div className="container">
      <h2 className="text-light mb-4">¿Quiénes Somos?</h2>

      <div className="row align-items-center">
        {/* Imagen del equipo */}
        <div className="col-md-5 mb-4 mb-md-0">
          <img
            src="/nosotros-team.jpg"
            alt="Equipo Level Up Gamer"
            className="img-fluid rounded shadow"
            style={{ maxHeight: "400px", objectFit: "cover", width: "100%" }}
          />
        </div>

        {/* Texto de presentación */}
        <div className="col-md-7">
          <div className="card bg-dark text-light border-primary">
            <div className="card-body">
              <h4 className="text-primary mb-3">Level Up Gamer</h4>
              <p>
                ¡Bienvenidos a Level Up Gamer! Somos un equipo joven y
                apasionado por el mundo gaming. Nacimos con una misión clara:
                hacer que los mejores productos gamer estén al alcance de todos.
              </p>
              <p>
                Creemos que no necesitas gastar una fortuna para disfrutar de
                una experiencia gaming de calidad. Por eso, seleccionamos
                cuidadosamente cada producto que ofrecemos, buscando siempre el
                mejor equilibrio entre calidad y precio.
              </p>
              <p>
                Somos gamers como tú. Entendemos lo que buscas porque nosotros
                también lo buscamos. Desde consolas hasta periféricos, desde
                accesorios hasta componentes, estamos aquí para ayudarte a
                llevar tu setup al siguiente nivel.
              </p>
              <p className="mb-0">
                <strong className="text-primary">Level Up Gamer</strong> — Donde
                los gamers compran.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Misión, Visión y Valores */}
      <div className="row mt-4 g-3">
        <div className="col-md-4">
          <div className="card bg-dark text-light h-100 border-primary">
            <div className="card-body text-center">
              <h5 className="text-primary mb-3">🎯 Nuestra Misión</h5>
              <p className="mb-0">
                Democratizar el acceso a productos gaming de calidad en Chile,
                brindando una experiencia de compra simple, segura y accesible
                para todos los gamers.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-dark text-light h-100 border-primary">
            <div className="card-body text-center">
              <h5 className="text-primary mb-3">🚀 Nuestra Visión</h5>
              <p className="mb-0">
                Ser la tienda gamer líder en Chile, reconocida por la calidad de
                nuestros productos, la confianza de nuestros clientes y nuestra
                pasión por el gaming.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-dark text-light h-100 border-primary">
            <div className="card-body text-center">
              <h5 className="text-primary mb-3">💎 Nuestros Valores</h5>
              <p className="mb-0">
                <strong>Innovación</strong> · <strong>Accesibilidad</strong> ·
                <strong> Pasión</strong> · <strong>Confianza</strong> ·
                <strong> Comunidad</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de contacto */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="card bg-dark text-light border-primary">
            <div className="card-body text-center">
              <h5 className="text-primary mb-3">📍 Encuéntranos</h5>
              <div className="row">
                <div className="col-md-4">
                  <p className="mb-md-0">
                    <strong>📧 Email</strong>
                    <br />
                    contacto@levelupgamer.cl
                  </p>
                </div>
                <div className="col-md-4">
                  <p className="mb-md-0">
                    <strong>📱 Teléfono</strong>
                    <br />
                    +56 9 1234 5678
                  </p>
                </div>
                <div className="col-md-4">
                  <p className="mb-0">
                    <strong>📍 Ubicación</strong>
                    <br />
                    Santiago, Chile
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
