import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import API_USUARIO from '../../../API_METHODS/Usuario/API_USUARIO'

export function RegistroUsuario() {
  const [usuario, setUsuario] = useState('')
  const [nombres, setNombres] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  let history = useHistory()

  function handleChange(e) {
    const { name, value } = e.target

    switch (name) {
      case 'usuario':
        setUsuario(value)
        break
      case 'clave':
        setPassword(value)
        break
      case 'nombres':
        setNombres(value)
        break
      case 'email':
        setEmail(value)
        break
      default:
        break
    }
  }

  function registrar() {

    if(usuario==='' || password==='' || nombres==='' || email===''){
        alert("Debe llenar todos los campos");
        return;
    }

    API_USUARIO.registrarUsuario(usuario, password, nombres, email)
      .then((respuesta) => {
        return respuesta
      })
      .then((data) => {
        if (data.status) {
          alert(data.message)
          history.push('/loginUsuario')
        } else {
          alert(data.message)
        }
      })
      .catch((err) => console.error(err))
  }

  return (
    <div className="div_login">
      <h1>Registro</h1>
      <input
        type="text"
        name="usuario"
        id="usuario"
        placeholder="Usuario"
        onChange={handleChange}
        value={usuario}
        autoComplete="off"
      ></input>
      <input
        type="text"
        name="nombres"
        id="nombres"
        placeholder="Nombres"
        onChange={handleChange}
        value={nombres}
        autoComplete="off"
      ></input>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        onChange={handleChange}
        value={email}
        autoComplete="off"
      ></input>
      <input
        type="password"
        name="clave"
        id="clave"
        placeholder="Contraseña"
        onChange={handleChange}
        value={password}
        autoComplete="off"
      ></input>
      <button id="login" className="button_primary" onClick={registrar}>
        Registrarme
      </button>
    </div>
  )
}
