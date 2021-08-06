import React, { useState } from 'react'
import API_USUARIO from '../../../API_METHODS/Usuario/API_USUARIO'
import {useHistory } from 'react-router-dom';


export function AgregarVehiculo() {
  const [idUsuario, setidUsuario] = useState(
    localStorage.getItem('user_autoPower_id')
  )
  const [nombre, setNombre] = useState('')
  const [marca, setMarca] = useState('')
  const [modelo, setModelo] = useState('')
  const [color, setColor] = useState('')

  let history = useHistory();


  function handleChange(e) {
    const { name, value } = e.target

    switch (name) {
      case 'nombre':
        setNombre(value)
        break
      case 'marca':
        setMarca(value)
        break
      case 'modelo':
        setModelo(value)
        break
      case 'color':
        setColor(value)
        break
      default:
        break
    }
  }

  function agregarVehiculo() {
    API_USUARIO.agregarVehiculo(idUsuario, nombre, marca, modelo, color)
      .then((respuesta) => {
        return respuesta
      })
      .then((data) => {
        if(data.status){
          alert(data.message);
          history.push('/inicio_usuario')
        }else{
          alert(data.message);
        }
      })
      .catch((err) => console.error(err))
  }

  return (
    <div className="container">
      <div className="div_login">
        <h1>Agregar vehiculo</h1>
        <input
          type="text"
          name="nombre"
          id="nombre"
          placeholder="Nombre"
          value={nombre}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="marca"
          id="marca"
          placeholder="Marca"
          onChange={handleChange}
          value={marca}
        ></input>
        <input
          type="text"
          name="modelo"
          id="modelo"
          placeholder="Modelo"
          value={modelo}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="color"
          id="color"
          placeholder="Color"
          onChange={handleChange}
          value={color}
        ></input>
        <button id="login" className="button_primary" onClick={agregarVehiculo}>
          Agregar vehiculo
        </button>
      </div>
    </div>
  )
}
