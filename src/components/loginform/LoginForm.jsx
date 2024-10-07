import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para manejar el inicio de sesión
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '38vh' }}>
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
        <h2 className="text-center mb-4 text-white">Iniciar Sesión</h2>
        <div className="mb-3">
          <label htmlFor="email" className="form-label text-white">Correo Electrónico</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label text-white">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default LoginForm;
