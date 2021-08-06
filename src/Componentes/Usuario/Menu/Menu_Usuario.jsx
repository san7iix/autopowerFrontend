import React from 'react'
import { CardMenu } from './CardMenu'


let opciones = [
  {
    titulo: 'Editar perfil',
    imagen: 'servicio1.jpeg',
    url: 'editar_perfil'
  },
  {
    titulo: 'Agregar nuevo vehiculo',
    imagen: 'servicio1.jpeg',
    url: 'agregar_vehiculo'
  },
  {
    titulo: 'Consultar arreglos',
    imagen: 'servicio1.jpeg',
    url: 'consultar_arreglos'
  },
  {
    titulo: 'Historial de arreglos',
    imagen: 'servicio1.jpeg',
    url: 'historial_arreglos'
  },
  {
    titulo: 'Estado del vehiculo',
    imagen: 'servicio1.jpeg',
    url: 'estado_vehiculo'
  },
]

export function MenuUsuario() {
  return (
    <div className="container">
      {opciones.map((opcion) => (
          <CardMenu className="card_menu" data={opcion}/>
      ))}
    </div>
  )
}
