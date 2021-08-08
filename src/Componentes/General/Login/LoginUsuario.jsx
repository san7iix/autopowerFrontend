import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import API_USUARIO from '../../../API_METHODS/Usuario/API_USUARIO'

export function LoginUsuario() {
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')
  const [mensaje, setMensaje] = useState('')

  let history = useHistory()

  function loguear() {
    API_USUARIO.login(usuario, password).then((res) => {
      return res;
    }).then(res=>{
      if (res.result) {
        localStorage.setItem('user_autoPower', usuario)
        localStorage.setItem('user_autoPower_id', res.idusuario)
        history.push('/inicio_usuario')
        window.location.reload();
      } else {
        setMensaje(res.message);
      }
    }).catch(err=>console.error(err));
  }

  function handleChange(e) {
    const { name, value } = e.target

    switch (name) {
      case 'usuario':
        setUsuario(value)
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
      <p className="text_secondary">Ingrese sus credenciales de usuario</p>
      <input
        type="text"
        name="usuario"
        id="usuario"
        placeholder="Usuario"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="clave"
        id="clave"
        placeholder="Contraseña"
        onChange={handleChange}
      ></input>
      <div>
        <p className="msg_error">{mensaje}</p>
      </div>
      <button id="login" className="button_primary" onClick={loguear}>
        Inciar Sesión
      </button>
      <Link to="/registro">
        ¿Usuario nuevo ? <br />
        ¡Registrate dando click aquí!
      </Link>
      <Link to="/loginMecanico">Incio sesión mecánico</Link>
    </div>
  )
}
