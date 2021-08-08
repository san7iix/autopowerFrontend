import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import API_MECANICO from '../../../API_METHODS/Mecanico/API_MECANICO'

export function Calendario() {
  const [arreglos, setArreglos] = useState([])
  const [cedula] = useState(localStorage.getItem('user_autoPower'))
  const [fecha, setFecha] = useState('')

  function obtenerArreglos() {
    API_MECANICO.consultarArreglos(cedula, fecha)
      .then((respuesta) => {
        return respuesta
      })
      .then((data) => {
        if(data.status){
            setArreglos(data.data);
        }
      })
      .catch((err) => console.error(err))
  }

  function handleFecha(e) {
    const { value } = e.target
    setFecha(value)
  }

  useEffect(() => {
    if (fecha !== '') obtenerArreglos()
  }, [fecha, arreglos])

  return (
    <div className="container">
      <div>
        <label for="fecha">Fecha: </label>
        <input type="date" name="fecha" id="fecha" onChange={handleFecha} />
      </div>
      <div>
        <table>
          <thead>
            <th>Placa</th>
            <th>Tipo de arreglo</th>
            <th>Direccion</th>
            <th>Acciones</th>
          </thead>
          <tbody>
            {arreglos.map((arreglo) => (
              <tr>
                <td>{arreglo.placa}</td>
                <td>{arreglo.tipo_arreglo}</td>
                <td>{arreglo.direccion}</td>
                <td>
                    <Link to={`reparacion/${arreglo.idarreglo}/${arreglo.idvehiculo}`}>
                        <button className="button_primary">Iniciar reparacion</button>
                    </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
