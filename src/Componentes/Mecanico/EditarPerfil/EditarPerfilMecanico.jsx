import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import API_MECANICO from '../../../API_METHODS/Mecanico/API_MECANICO'

export function EditarPerfilMecanico() {
  const [cedula] = useState(localStorage.getItem('user_autoPower'))
  const [nombres, setNombres] = useState('')
  const [password, setPassword] = useState('')
  const [nuevoCedula, setNuevaCedula] = useState('')

  let history = useHistory()

  function handleChange(e) {
    const { name, value } = e.target

    switch (name) {
      case 'cedula':
        setNuevaCedula(value)
        break
      case 'clave':
        setPassword(value)
        break
      case 'nombres':
        setNombres(value)
        break
      default:
        break
    }
  }

  function editarMecanico() {
    API_MECANICO.editar_mecanico(cedula, nuevoCedula, nombres, password)
      .then((respuesta) => {
        return respuesta
      })
      .then((data) => {
        if (data.status) {
          localStorage.setItem('user_autoPower', nuevoCedula)
          alert(data.message)
          history.push('/inicio_mecanico')
        } else {
          alert(data.message)
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }

  useEffect(() => {
    API_MECANICO.obtener_datos_mecanico(cedula)
      .then((respuesta) => {
        return respuesta
      })
      .then((data) => {
        if (data.status) {
          setNombres(data.data.nombre)
          setPassword('')
        }
      })
      .catch((err) => {
        console.error(err)
      })
    setNuevaCedula(cedula)
  }, [cedula])

  return (
    <div className="container">
      <div className="div_login">
        <h1>Editar pefil</h1>
        <input
          type="text"
          name="cedula"
          id="cedula"
          placeholder="Cedula"
          value={nuevoCedula}
          onChange={handleChange}
          autoComplete="off"
        ></input>
        <input
          type="text"
          name="nombres"
          id="nombres"
          placeholder="Nombres"
          value={nombres}
          onChange={handleChange}
          autoComplete="off"
        />
        <input
          type="password"
          name="clave"
          id="clave"
          placeholder="Contraseña"
          value={password}
          onChange={handleChange}
          autoComplete="off"
        ></input>
        <button id="login" className="button_primary" onClick={editarMecanico}>
          Editar
        </button>
      </div>
    </div>
  )
}
