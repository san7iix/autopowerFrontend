import React from 'react'
import { CardMenu } from './CardMenu'


let opciones = [
  {
    titulo: 'Editar perfil',
    imagen: 'servicio1.jpeg',
    url: 'editar_perfil_mecanico'
  },
  {
    titulo: 'Calendario',
    imagen: 'servicio1.jpeg',
    url: 'calendario'
  }
]

export function MenuMecanico() {
  return (
    <div className="container">
      {opciones.map((opcion) => (
          <CardMenu className="card_menu" data={opcion}/>
      ))}
    </div>
  )
}
