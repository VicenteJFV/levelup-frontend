import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/authService";

const Registro = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await registerUser(form);
      navigate("/login");
    } catch (err) {
      console.error(err);
      setError("No se pudo registrar el usuario.");
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-5">
        <h2 className="text-light mb-4">Crear cuenta</h2>
        <form onSubmit={onSubmit} className="card card-body bg-dark">
          <div className="mb-3">
            <label className="form-label text-light">Nombre</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={form.name}
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-light">Correo</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={form.email}
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-light">Contraseña</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={form.password}
              onChange={onChange}
              required
            />
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <button className="btn btn-primary w-100" type="submit">
            Registrarse
          </button>
          <p className="text-muted mt-3 mb-0">
            ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registro;
