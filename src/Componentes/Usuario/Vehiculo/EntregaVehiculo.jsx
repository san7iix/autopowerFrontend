import react, { useEffect, useState } from 'react'
import API_USUARIO from '../../../API_METHODS/Usuario/API_USUARIO'

export function EntregaVehiculo() {
  const [vehiculos, setVehiculos] = useState([])

  useEffect(() => {
    obtenerAutos()
  }, [vehiculos])

  function actualizar() {
    obtenerAutos()
  }

  function obtenerAutos() {
    API_USUARIO.obtenerAutosEntregar()
      .then((respuesta) => respuesta)
      .then((data) => {
        if (data.status) {
          setVehiculos(data.data)
        } else {
          alert(data.message)
        }
      })
  }

  function entregarVehiculo(vehiculo) {
    API_USUARIO.entregarVehiculo(vehiculo)
      .then((respuesta) => respuesta)
      .then((data) => {
        if (data.status) {
            alert(data.message)
        } else {
          alert(data.message)
        }
      })
    obtenerAutos()
  }

  return (
    <div className="container columna">
      <button onClick={actualizar} className="button_primary">
        Actualizar
      </button>
      <table>
        <thead>
          <th>Placa</th>
          <th>Modelo</th>
          <th>Cedula propietario, Nombre propietario</th>
          <th>Acciones</th>
        </thead>
        <tbody>
          {vehiculos.map((vehiculo) => (
            <tr key={vehiculo.idvehiculo}>
              <td>{vehiculo.placa}</td>
              <td>{vehiculo.modelo}</td>
              <td>{`${vehiculo.cedula_propietario}, ${vehiculo.nombre_propietario}`}</td>
              <td>
                <button onClick={()=>entregarVehiculo(vehiculo.idvehiculo)} className="button_primary">
                  Entregar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
