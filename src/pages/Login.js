import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login(form.email, form.password);
      navigate("/productos"); // o a la página que quieras
    } catch (err) {
      console.error(err);
      setError("Credenciales inválidas");
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-5">
        <h2 className="text-light mb-4">Ingresar</h2>

        <form onSubmit={onSubmit} className="card card-body bg-dark">
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
            Ingresar
          </button>

          <p className="text-muted mt-3 mb-0">
            ¿No tienes cuenta? <Link to="/registro">Regístrate aquí</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
