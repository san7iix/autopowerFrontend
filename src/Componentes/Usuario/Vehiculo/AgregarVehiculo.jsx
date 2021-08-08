import React, { useState } from 'react'
import API_USUARIO from '../../../API_METHODS/Usuario/API_USUARIO'
import { useHistory } from 'react-router-dom'

export function AgregarVehiculo() {
  const [nombre, setNombre] = useState('')
  const [marca, setMarca] = useState('')
  const [modelo, setModelo] = useState('')
  const [color, setColor] = useState('')
  const [placa, setPlaca] = useState('')
  const [cedulaPropietario, setcedulaPropietario] = useState('')
  const [nombrePropietario, setnombrePropietario] = useState('')

  let history = useHistory()

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
      case 'placa':
        setPlaca(value)
        break
      case 'cedula_propietario':
        setcedulaPropietario(value)
        break
      case 'nombre_propietario':
        setnombrePropietario(value)
        break
      default:
        break
    }
  }

  function agregarVehiculo() {
    if (
      nombre === '' ||
      nombrePropietario === '' ||
      cedulaPropietario === '' ||
      placa === '' ||
      color === '' ||
      marca === '' ||
      modelo === ''
    ) {
      alert('Debe llenar todos los campos')
      return
    }

    API_USUARIO.verificarPLaca(placa)
      .then((res) => {
        return res
      })
      .then((data) => {
        if (data.status) {
          API_USUARIO.agregarVehiculo(
            nombrePropietario,
            cedulaPropietario,
            nombre,
            marca,
            modelo,
            color,
            placa,
          )
            .then((respuesta) => {
              return respuesta
            })
            .then((data) => {
              if (data.status) {
                alert(data.message)
                history.push('/inicio_usuario')
              } else {
                alert(data.message)
              }
            })
            .catch((err) => console.error(err))
        } else {
          alert(data.message)
        }
      })
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
        <input
          type="text"
          name="placa"
          id="placa"
          placeholder="Placa"
          onChange={handleChange}
          value={placa}
        ></input>
        <input
          type="text"
          name="nombre_propietario"
          id="nombre_propietario"
          placeholder="Nombre del propietario"
          onChange={handleChange}
          value={nombrePropietario}
        ></input>
        <input
          type="text"
          name="cedula_propietario"
          id="cedula_propietario"
          placeholder="Cédula del propietario"
          onChange={handleChange}
          value={cedulaPropietario}
        ></input>
        <button id="login" className="button_primary" onClick={agregarVehiculo}>
          Agregar vehiculo
        </button>
      </div>
    </div>
  )
}
