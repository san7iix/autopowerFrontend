import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

export function BarraSup() {
  let history = useHistory()

  const [usuario, setUsuario] = useState(localStorage.getItem('user_autoPower'))

  function logout() {
    localStorage.removeItem('user_autoPower');
    localStorage.removeItem('user_autoPower_id');
    history.push('/');
    window.location.reload();
  }

  let login_btn = (
    <li>
      <Link to="/loginUsuario">
        <b>Login</b>
      </Link>
    </li>
  )

  let logOut_btn = (
    <li>
      <Link onClick={logout}>
        <b>Logout</b>
      </Link>
    </li>
  )

  useEffect(() => {
    
  }, [usuario])

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
            <Link to="/inicio_usuario">Menú usuario</Link>
          </li>
          <li>
            <Link to="/servicios">Servicios</Link>
          </li>
          <li>
            <Link to="/como_funciona">¿Cómo funciona?</Link>
          </li>
          {usuario ? logOut_btn : ''}
          {!usuario ? login_btn : ''}
          <li>
            <Link to="/redes">Redes</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
