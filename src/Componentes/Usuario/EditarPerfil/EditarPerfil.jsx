import React, { useState, useEffect } from 'react';
import {useHistory } from 'react-router-dom';
import API_USUARIO from '../../../API_METHODS/Usuario/API_USUARIO'



export function EditarPerfil() {
  const [usuario, ] = useState(localStorage.getItem('user_autoPower'))
  const [nombres, setNombres] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [nuevoUsuario, setNuevoUsuario] = useState('')


  let history = useHistory();

  function handleChange(e) {
    const { name, value } = e.target

    switch (name) {
      case 'usuario':
        setNuevoUsuario(value)
        break
      case 'clave':
        setPassword(value)
        break
      case 'email':
        setEmail(value)
        break
      case 'nombres':
        setNombres(value)
        break
      default:
        break
    }
  }

  function editarUsuario() {
    API_USUARIO.editar_usuario(usuario,nuevoUsuario, nombres, email, password).then(respuesta=>{
      return respuesta;
    }).then((data)=>{
      if(data.status){
        localStorage.setItem('user_autoPower', nuevoUsuario);
        alert(data.message)
        history.push('/inicio_usuario')
      }else{        
        alert(data.message)
      }
    })
    .catch(err=>{
      console.error(err);
    })
  }


  useEffect(() => {
    API_USUARIO.obtener_datos_usuario(usuario).then((respuesta) => {
      return respuesta
    }).then((data)=>{
      if(data){
        setEmail(data.email);
        setNombres(data.nombres);
        setPassword('')
      }
    }).catch((err)=>{
      console.error(err)
    })
    setNuevoUsuario(usuario)
  }, [usuario])

  return (
    <div className="container">
      <div className="div_login">
        <h1>Editar pefil</h1>
        <input
          type="text"
          name="usuario"
          id="usuario"
          placeholder="Usuario"
          value={nuevoUsuario}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="nombres"
          id="nombres"
          placeholder="Nombres"
          value={nombres}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="clave"
          id="clave"
          placeholder="Contraseña"
          value={password}
          onChange={handleChange}
          autoComplete="off"
        ></input>
        <button id="login" className="button_primary" onClick={editarUsuario}>
          Editar
        </button>
      </div>
    </div>
  )
}
