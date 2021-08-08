import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import API_MECANICO from '../../../API_METHODS/Mecanico/API_MECANICO'

export function LoginMecanico(params) {
  const [cedula, setCedula] = useState('')
  const [password, setPassword] = useState('')
  const [mensaje, setMensaje] = useState('')

  let history = useHistory()

  function loguear() {
    API_MECANICO.login(cedula, password)
      .then((res) => {
        return res
      })
      .then((res) => {
        if (res.result) {
          localStorage.setItem('user_autoPower', cedula)
          history.push('/inicio_mecanico')
          window.location.reload();
        } else {
          setMensaje(res.message)
        }
      })
      .catch((err) => console.error(err))
  }

  function handleChange(e) {
    const { name, value } = e.target

    switch (name) {
      case 'cedula':
        setCedula(value)
        break
      case 'clave':
        setPassword(value)
        break
      default:
        break
    }
  }

  return (
    <div className="div_login">
      <h1>Inciar Sesión</h1>
      <p className="text_secondary">Ingrese sus credenciales de mecánico</p>
      <input
        type="number"
        name="cedula"
        id="cedula"
        placeholder="Cédula"
        value={cedula}
        onChange={handleChange}
        autoComplete="off"
      ></input>
      <input
        type="password"
        name="clave"
        id="clave"
        placeholder="Contraseña"
        value={password}
        onChange={handleChange}
        autoComplete="off"
      ></input>
      <div>
        <p className="msg_error">{mensaje}</p>
      </div>
      <button id="login" className="button_primary" onClick={loguear}>
        Inciar Sesión
      </button>
      <Link to="/loginUsuario">Incio sesión usuario</Link>
    </div>
  )
}
