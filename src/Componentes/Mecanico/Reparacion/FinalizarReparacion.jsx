import react, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import API_MECANICO from '../../../API_METHODS/Mecanico/API_MECANICO'

export function FinalizarReparacion() {
  const { idvehiculo, idarreglo } = useParams()

  const [descripcion, setdescripcion] = useState('')

  let history = useHistory()

  function finalizarArreglo() {
    API_MECANICO.finalizarReparacion(idvehiculo, descripcion, idarreglo)
      .then((respuesta) => {
        return respuesta
      })
      .then((data) => {
        alert(data.message)
        if (data.status) {
          history.push('/calendario')
        }
      })
      .catch((err) => console.error(err))
  }

  function handleChange(e) {
    const { name, value } = e.target

    switch (name) {
      case 'descripcion':
        setdescripcion(value)
        break

      default:
        break
    }

  }

  function iniciarReparacion() {
    API_MECANICO.iniciarReparacion(idvehiculo)
      .then((respuesta) => {
        return respuesta
      })
      .then((data) => {
        if (data.status) {
          alert(data.message)
        } else {
          alert(data.message)
        }
      })
  }

  useEffect(() => {
    iniciarReparacion()
  }, [])

  return (
    <div className="container columna">
      <div>
        <p for="descripcion">Descripcion del arreglo:</p>
        <textarea
          name="descripcion"
          value={descripcion}
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <button
          id="finalizar"
          onClick={finalizarArreglo}
          className="button_primary"
        >
          Finalizar arreglo
        </button>
      </div>
    </div>
  )
}
