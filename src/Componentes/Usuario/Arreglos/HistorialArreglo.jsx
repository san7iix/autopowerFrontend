import React, { useState, useEffect } from 'react'
import API_USUARIO from '../../../API_METHODS/Usuario/API_USUARIO';


export function HistorialArreglo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API_USUARIO.obtenerArreglos().then((respuesta)=>{
      return respuesta;
    })
    .then(data=>{
      if(data.status){
        console.log(data);
        setData(data.data);
      }else{
        alert(data.message)
      }
    })
    .catch(err=>console.error(err));
  }, [])

  return (
    <div className="container">
      <table>
        <thead>
          <th>Automovil</th>
          <th>Cedula, Nombre del propietario</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Taller</th>
          <th>Tipo de arreglo</th>
          <th>Descripción</th>
          <th>Fecha</th>
          <th>Precio</th>
        </thead>
        <tbody>
          {data.map((arreglo) => (
            <tr>
              <td>{arreglo.nombre}</td>
              <td>{`${arreglo.cedula_propietario}, ${arreglo.nombre_propietario}`}</td>
              <td>{arreglo.marca}</td>
              <td>{arreglo.modelo}</td>
              <td>{arreglo.direccion}</td>
              <td>{arreglo.tipo_arreglo}</td>
              <td>{arreglo.descripcion}</td>
              <td>{arreglo.fecha}</td>
              <td>${arreglo.precio} COP</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
