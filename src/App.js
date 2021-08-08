import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { BarraSup } from './Componentes/General/Navbar/BarraSup'
import { BarraInf } from './Componentes/General/Footer/BarraInf'
import { Home } from './Componentes/General/Home/Home'
import { Servicios } from './Componentes/General/Servicios/Servicios'
import { LoginUsuario } from './Componentes/General/Login/LoginUsuario'
import { LoginMecanico } from './Componentes/General/Login/LoginMecanico'
import { RegistroUsuario } from './Componentes/General/Registro/RegistroUsuario'
import { MenuUsuario } from './Componentes/Usuario/Menu/Menu_Usuario'
import { EditarPerfil } from './Componentes/Usuario/EditarPerfil/EditarPerfil'
import { HistorialArreglo } from './Componentes/Usuario/Arreglos/HistorialArreglo'
import { EstadoVehiculo } from './Componentes/Usuario/Vehiculo/EstadoVehiculo'
import { AgregarVehiculo } from './Componentes/Usuario/Vehiculo/AgregarVehiculo'
import { AgendarArreglo } from './Componentes/Usuario/Arreglos/AgendarArreglo'
import { MenuMecanico } from './Componentes/Mecanico/Menu/Menu_Mecanico'
import { EditarPerfilMecanico } from './Componentes/Mecanico/EditarPerfil/EditarPerfilMecanico'
import { Calendario } from './Componentes/Mecanico/Calendario/Calendario'
import { FinalizarReparacion } from './Componentes/Mecanico/Reparacion/FinalizarReparacion'
import { EntregaVehiculo } from './Componentes/Usuario/Vehiculo/EntregaVehiculo'


function App() {


  return (
    <Router>
      <div className="container_general">
        <BarraSup />
        <Switch>
          <Route path="/servicios">
            <Servicios/>
          </Route>
          <Route path="/como_funciona">
            <p>Como funciona</p>
          </Route>
          <Route path="/loginUsuario">
            <LoginUsuario/>
          </Route>
          <Route path="/loginMecanico">
            <LoginMecanico/>
          </Route>
          <Route path="/registro">
            <RegistroUsuario/>
          </Route>
          <Route path="/inicio_usuario">
            <MenuUsuario/>
          </Route>
          <Route path="/inicio_mecanico">
            <MenuMecanico/>
          </Route>
          <Route path="/editar_perfil">
            <EditarPerfil/>
          </Route>
          <Route path="/editar_perfil_mecanico">
            <EditarPerfilMecanico/>
          </Route>
          <Route path="/calendario">
            <Calendario/>
          </Route>
          <Route path="/agregar_vehiculo">
            <AgregarVehiculo/>
          </Route>
          <Route path="/consultar_arreglos">
            <AgendarArreglo/>
          </Route>
          <Route path="/entrega_vehiculo">
            <EntregaVehiculo/>
          </Route>
          <Route path="/reparacion/:idarreglo/:idvehiculo">
            <FinalizarReparacion/>
          </Route>
          <Route path="/historial_arreglos">
            <HistorialArreglo/>
          </Route>
          <Route path="/estado_vehiculo">
            <EstadoVehiculo/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
        <BarraInf/>
      </div>
    </Router>
  )
}

export default App
