import React, { useState, useEffect } from 'react'
import API_USUARIO from '../../../API_METHODS/Usuario/API_USUARIO';


export function HistorialArreglo() {
  const [data, setData] = useState([]);

  const [idusuario, setidusuario] = useState(localStorage.getItem('user_autoPower_id'));



  useEffect(() => {
    API_USUARIO.obtenerArreglos(idusuario).then((respuesta)=>{
      return respuesta;
    })
    .then(data=>{
      if(data.status){
        setData(data.data);
      }else{
        alert(data.message)
      }
    })
    .catch(err=>console.error(err));
  }, [idusuario])

  return (
    <div className="container">
      <table>
        <thead>
          <th>Automovil</th>
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
