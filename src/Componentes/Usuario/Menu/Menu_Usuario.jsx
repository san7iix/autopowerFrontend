import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { CardMenu } from './CardMenu'

let opciones = [
  {
    titulo: 'Editar perfil',
    imagen: 'servicio1.jpeg',
    url: 'editar_perfil',
  },
  {
    titulo: 'Agregar nuevo vehiculo',
    imagen: 'servicio1.jpeg',
    url: 'agregar_vehiculo',
  },
  {
    titulo: 'Agendar arreglo',
    imagen: 'servicio1.jpeg',
    url: 'consultar_arreglos',
  },
  {
    titulo: 'Historial de arreglos',
    imagen: 'servicio1.jpeg',
    url: 'historial_arreglos',
  },
  {
    titulo: 'Estado del vehiculo',
    imagen: 'servicio1.jpeg',
    url: 'estado_vehiculo',
  },
  {
    titulo: 'Etrega de vehiculo',
    imagen: 'servicio1.jpeg',
    url: 'entrega_vehiculo',
  },
]

export function MenuUsuario() {
  const [user, setuser] = useState(localStorage.getItem('user_autoPower'))

  useEffect(() => {
    setuser(localStorage.getItem('user_autoPower'))
  }, [])

  let menu = <div className="container">
  {opciones.map((opcion) => (
    <CardMenu className="card_menu" data={opcion} />
  ))}
</div>

  return (
    user ? menu : <Redirect to="/"/>
  )
}
