import React, { useState } from 'react'
import ReactDom from 'react-dom'
import { Link } from 'react-router-dom'



export function LoginMecanico(params) {
    return(
        <div className="div_login">
            <h1>Inciar Sesión</h1>
            <p className="text_secondary">Ingrese sus credenciales de mecánico</p>
            <input type="number" name="cedula" id="cedula" placeholder="Cédula"></input>
            <input type="password" name="clave" id="clave" placeholder="Contraseña"></input>
            <button id="login" className="button_primary">Inciar Sesión</button>
            <Link to="/loginUsuario">Incio sesión usuario</Link>
        </div>
    );
}