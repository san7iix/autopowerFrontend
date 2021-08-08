import React from 'react'
import { Card } from './Card'

let servicios = [
  {
    titulo: 'Mecánica básica',
    descripcion: 'Cambios de neumáticos. Medición deel nivel del aceite. Medir el nivel del agua y anticongelante. Medir el nivel del líquido de frenos. Saber identificar los símbolos del tablero.',
    imagen: 'servicio1.jpeg',
  },
  {
    titulo: 'Mecánica especializada',
    descripcion: 'El mejor equipo humano especializado en nuestro taller automotriz para el manejo y revisión de cada sistema de tu vehículo, nos apoyados con información específica del fabricante y contamos con equipos de última generación para talleres mecánicos.',
    imagen: 'servicio1.jpeg',
  },
  {
    titulo: 'Revisión Automotriz',
    descripcion: 'Mantenimiento legal preventivo en que un vehículo es inspeccionado periódicamente por un ente certificador, el cual verifica el cumplimiento de las normas de seguridad y emisiones contaminantes que le sean aplicables.',
    imagen: 'servicio1.jpeg',
  },
  {
    titulo: 'Estética Automotriz',
    descripcion: 'Cambia tu color de automovil, las llantas, los rines, color de las luces, polarizados, Tono del claxon, entre otras mejoras.',
    imagen: 'servicio1.jpeg',
  },
]

export function Servicios() {
  return (
    <div className="container">
      {servicios.map((servicio) => (
        <Card info={servicio} />
      ))}
    </div>
  )
}
