import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__left">
        <li className="navbar__logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
            alt="Pinterest Logo"
          />
        </li>
        <li>
          <button className="navbar-logo">Pinterest</button>
        </li>
        <li>
          <button>Hoy</button>
        </li>
        <li>
          <button>Crear</button>
        </li>
      </ul>
      <ul className="navbar__right">
        
        <li>
          <button>Info</button>
        </li>
        <li>
          <button>Empresa</button>
        </li>
        <li>
          <button>Blog</button>
        </li>
        <li>
          <button className="boton-inicio">Iniciar Sesion</button>
        </li>
        <li>
          <button>Registrarse</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
