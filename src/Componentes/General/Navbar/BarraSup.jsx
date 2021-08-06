import React from 'react'
import ReactDom from 'react-dom'
import { Link, useHistory } from 'react-router-dom'


export function BarraSup() {

  let history = useHistory();

  function logout() {
    localStorage.removeItem('user_autoPower');
    localStorage.removeItem('user_autoPower_id');
    history.push('/');
  }

  return (
    <header>
      <div className="logo_div">
        <img class="logo" src="raster.png" alt="logo"></img>
        <h1>Auto Power</h1>
      </div>
      <nav>
        <ul class="nav__links">
          <li className="active">
            <Link to="/">Inicio</Link>
          </li>
          <li className="">
            <Link to="/inicio_usuario">Inicio Usuario</Link>
          </li>
          <li>
            <Link to="/servicios">Servicios</Link>
          </li>
          <li>
            <Link to="/como_funciona">¿Cómo funciona?</Link>
          </li>
          <li>
            <Link to="/redes">Redes</Link>
          </li>
          <li>
            <Link to="/loginUsuario">
              <b>Login</b>
            </Link>
          </li>
          <li>
            <Link onClick={logout}>
              <b>Logout</b>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
