import React, { useState, useEffect } from 'react'
import API_USUARIO from '../../../API_METHODS/Usuario/API_USUARIO'
import { useHistory } from 'react-router-dom'

let lista_tipo_arreglo = [
  {
    titulo: 'Mecánica básica',
  },
  {
    titulo: 'Mecánica especializada',
  },
  {
    titulo: 'Revisión Automotriz',
  },
  {
    titulo: 'Estética Automotriz',
  },
]

export function AgendarArreglo() {
  const [talleres, setTalleres] = useState([])
  const [autos, setAutos] = useState([])
  const [usuario] = useState(localStorage.getItem('user_autoPower_id'))

  const [auto, setAuto] = useState('')
  const [taller, setTaller] = useState('')
  const [tipoArreglo, settipoArreglo] = useState('')
  const [fecha, setFecha] = useState('')

  let history = useHistory()

  useEffect(() => {
    obtenerTalleres()
    obtenerAutos(usuario)
  }, [usuario])

  function obtenerTalleres() {
    API_USUARIO.obtenerTalleres()
      .then((respuesta) => {
        return respuesta
      })
      .then((data) => {
        if (data.status) {
          setTalleres(data.data)
        } else {
          alert(data.message)
        }
      })
  }

  function obtenerAutos(usuario) {
    API_USUARIO.obtenerAutos(usuario)
      .then((respuesta) => {
        return respuesta
      })
      .then((data) => {
        if (data.status) {
          setAutos(data.data)
        } else {
          alert(data.message)
        }
      })
      .catch((err) => console.error(err))
  }

  function handleChange(e) {
    const value = e.target.options[e.target.selectedIndex].value

    switch (e.target.id) {
      case 'auto_agendar':
        setAuto(value)
        break
      case 'tipo_arreglo_agendar':
        settipoArreglo(value)
        break
      case 'taller_agendar':
        setTaller(value)
        break
      default:
        break
    }
  }

  function handleFecha(e) {
    const { value } = e.target
    setFecha(value)
  }

  function agendar() {
    if (auto === '' || taller === '' || tipoArreglo === '' || fecha === '') {
      alert('Debe llenar todos los campos para continuar la operación')
      return
    }

    API_USUARIO.agendarArreglo(auto, fecha, tipoArreglo, taller)
      .then((respuesta) => {
        return respuesta
      })
      .then((data) => {
        if (data.status) {
          alert(data.message)
        } else {
          alert(data.message)
        }
        history.push('/historial_arreglos')
      })
      .catch((err) => console.error(err))
  }

  return (
    <div className="container">
      <select id="auto_agendar" onChange={handleChange}>
        <option disabled selected>
          Seleccione un auto
        </option>
        {autos.map((auto) => (
          <option value={auto.idvehiculo}>
            {auto.nombre + ' - ' + auto.marca}
          </option>
        ))}
      </select>
      <select id="tipo_arreglo_agendar" onChange={handleChange}>
        <option disabled selected>
          Seleccione un tipo de arreglo
        </option>
        {lista_tipo_arreglo.map((tipo) => (
          <option value={tipo.titulo}>{tipo.titulo}</option>
        ))}
      </select>
      <select id="taller_agendar" onChange={handleChange}>
        <option disabled selected>
          Seleccione un taller
        </option>
        {talleres.map((taller) => (
          <option key={taller.idtaller} value={taller.idtaller}>
            {taller.direccion}
          </option>
        ))}
      </select>

      <input type="date" id="fecha" name="fecha" onChange={handleFecha}></input>

      <button className="button_primary" onClick={agendar}>
        Agendar
      </button>
    </div>
  )
}
