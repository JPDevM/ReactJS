import { useState } from 'react';

function NavBarMenuV2 () {
  /*
    1. Setear un estado que permite saber si la navbar se muestra, default false.
    2. Generar el comportamiento de dar click sobte el botón de acción:
      2.1. Cambie el estado de false a true y vcsa.
    3. Con el estado generado y el comportamiento del botón:
      3.1. Aplicar la clase "is-show" al main-navbar, cuando el estado sea true
  */

  /*
    Para el Desktop vamos a tener que implementar Media-queries:
      1. Ocultar el botón de acción
      2. Pensar en el evento de scroll para que el main-header quede estático
  */ 
  return (
    <header className="main-header">
      <div className="navbar-container">
        <article className="header-logo">
          <h2>Logo</h2>
          <button className="action-navbar-button">
            <i className="fa fa-bars"></i>
          </button>
        </article>

        <nav className="main-navbar">
          <ul>
            <li><a href="#home">About</a></li>
            <li><a href="#home">Experience</a></li>
            <li><a href="#features">Work</a></li>
            <li><a href="#pricing">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default NavBarMenuV2