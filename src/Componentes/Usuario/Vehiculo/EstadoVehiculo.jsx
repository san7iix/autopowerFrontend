import React, { useState, useEffect } from 'react'
import API_USUARIO from '../../../API_METHODS/Usuario/API_USUARIO'

export function EstadoVehiculo() {
  let [estado, setEstado] = useState(0)
  let [auto, setAuto] = useState('')
  let [autos, setAutos] = useState([])
  const [usuario] = useState(localStorage.getItem('user_autoPower_id'))

  let [estados, setEstados] = useState([
    {
      titulo: 'Agendamiento',
      estado: false,
    },
    {
      titulo: 'Recepción del vehículo',
      estado: false,
    },
    {
      titulo: 'Mecánico asignado',
      estado: false,
    },
    {
      titulo: 'Revisión en progreso',
      estado: false,
    },
    {
      titulo: 'Revisión completada',
      estado: false,
    },
    {
      titulo: 'Entrega de vehículo',
      estado: false,
    },
  ])

  useEffect(() => {
    obtenerAutos(usuario)
    if (auto !== '') {
      obtenerEstadoVehiculo(auto)
      modificarEstado()
    }
  }, [auto, estado])

  function modificarEstado() {
    setEstados(
      estados.map(function (dato, index) {
        if (index + 1 <= estado) {
          dato.estado = true
        }else{
          dato.estado = false          
        }
        return dato
      }),
    )
  }

  function handleChange(e) {
    const value = e.target.options[e.target.selectedIndex].value
    switch (e.target.id) {
      case 'auto':
        setAuto(value)
        break
      default:
        break
    }
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

  function obtenerEstadoVehiculo() {
    API_USUARIO.consultarVehiculo(auto)
      .then((respuesta) => {
        return respuesta
      })
      .then((data) => {
        if(data.status){
          setEstado(data.data.estado);
        }else{
          alert(data.message);
        }
      })
  }

  return (
    <div className="container">
      <table>
        <tbody>
          <tr>
            <td>
              <select id="auto" onChange={handleChange}>
                <option disabled selected>
                  Seleccione un auto
                </option>
                {autos.map((auto) => (
                  <option key={auto.idvehiculo} value={auto.idvehiculo}>
                    {auto.nombre + ' - ' + auto.marca}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          {estados.map((estado, index) => (
            <tr key={index}>
              <td>{estado.estado ? 'X' : ''}</td>
              <td>{estado.titulo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
