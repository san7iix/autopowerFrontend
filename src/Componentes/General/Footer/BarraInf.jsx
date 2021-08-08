import React from 'react'
import { Link } from 'react-router-dom'

export function BarraInf() {
  return (
    <footer>
      <div>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/quienes_somos">¿Quienes somos?</Link>
          </li>
          <li>
            <Link to="/servicios">Servicios</Link>
          </li>
        </ul>
      </div>
      <div>
          <p>No olvides seguirnos para recibir todas las noticias.</p>
          <div>
              <input type="text" placeholder="Email"></input>
              <button className="button_secondary">Suscribirme</button>
          </div>
          <div>
              Redes
          </div>
      </div>
    </footer>
  )
}
