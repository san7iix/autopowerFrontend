import React from 'react'
import { Link } from 'react-router-dom'

export function CardMenu({ data }) {
  return (
    <div className="card_menu">
      <Link to={data.url}>
        <img src={data.imagen} alt={data.titulo} />
        <h3>{data.titulo}</h3>
      </Link>
    </div>
  )
}
