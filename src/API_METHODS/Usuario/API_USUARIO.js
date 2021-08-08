import config from '../config';


class API_USUARIO_SERVICE {
    async login(usuario, password) {
        try {
            const res = await fetch(`${config.API_URL}usuario/login`, {
                method: 'POST',
                body: JSON.stringify({
                    'usuario': usuario,
                    'password': password
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
                }
            });
            const data = await res.json();
            return data;
        } catch (error) {
            console.error(error);
        }
    }


    async registrarUsuario(usuario, password, nombres, email) {
        try {
            const res = await fetch(`${config.API_URL}usuario/registro`, {
                method: 'POST',
                body: JSON.stringify({
                    "usuario": usuario,
                    "password": password,
                    "email": email,
                    "nombres": nombres
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
                }
            })

            const data = res.json();

            return data;
        } catch (error) {
            console.error(error);
        }
    }


    async obtener_datos_usuario(usuario) {
        try {
            const res = await fetch(`${config.API_URL}usuario/${usuario}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
                }
            })
            const data = await res.json();
            return data;


        } catch (error) {
            console.log(error);
        }
    }


    async editar_usuario(usuario, nuevo_usuario, nombres, email, password) {
        try {
            const res = await fetch(`${config.API_URL}usuario/editarUsuario`, {
                method: 'PUT',
                body: JSON.stringify({
                    "usuario": usuario,
                    "password": password,
                    "email": email,
                    "nuevo_usuario": nuevo_usuario,
                    "nombres": nombres
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
                }
            })

            const data = await res.json();

            return data;

        } catch (error) {
            console.error(error);
        }
    }


    async agregarVehiculo(nombrePropietario, cedulaPropietario, nombre, marca, modelo, color, placa) {
        try {
            const res = await fetch(`${config.API_URL}vehiculos/agregar`, {
                method: 'POST',
                body: JSON.stringify({
                    "nombre_propietario": nombrePropietario,
                    "cedula_propietario": cedulaPropietario,
                    "nombre": nombre,
                    "marca": marca,
                    "modelo": modelo,
                    "color": color,
                    "placa": placa
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
                }
            })

            const data = await res.json();

            return data;

        } catch (error) {
            console.error(error);
        }
    }

    async verificarPLaca(placa) {
        try {
            const res = await fetch(`${config.API_URL}vehiculos/verificarPlaca/${placa}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
                }
            })

            const data = res.json()
            return data;

        } catch (error) {
            console.error(error);
        }
    }

    async obtenerArreglos() {
        try {
            const res = await fetch(`${config.API_URL}vehiculos/arreglos`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
                }
            })

            const data = await res.json();

            return data;

        } catch (error) {
            console.error(error);
        }
    }


    async agendarArreglo(vehiculo, fecha, tipo_arreglo, taller, mecanico) {
        try {
            const res = await fetch(`${config.API_URL}arreglos/agregar`, {
                method: 'POST',
                body: JSON.stringify({
                    "vehiculo": vehiculo,
                    "fecha": fecha,
                    "tipo_arreglo": tipo_arreglo,
                    "taller": taller,
                    "mecanico": mecanico
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
                }
            })

            const data = await res.json();

            return data;

        } catch (error) {
            console.error(error);
        }
    }


    async obtenerAutos() {
        try {
            const res = await fetch(`${config.API_URL}vehiculos/`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
                }
            })

            const data = await res.json();
            return data;

        } catch (error) {
            console.error(error);
        }
    }

    async obtenerAutosEntregar() {
        try {
            const res = await fetch(`${config.API_URL}vehiculos/entregar`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
                }
            })

            const data = await res.json();
            return data;

        } catch (error) {
            console.error(error);
        }
    }

    async obtenerAutosArreglar() {
        try {
            const res = await fetch(`${config.API_URL}vehiculos/arreglar`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
                }
            })

            const data = await res.json();
            return data;

        } catch (error) {
            console.error(error);
        }
    }

    async consultarVehiculo(vehiculo) {
        try {
            const res = await fetch(`${config.API_URL}vehiculos/consultar/${vehiculo}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
                }
            })

            const data = await res.json();
            return data;

        } catch (error) {
            console.error(error);
        }
    }

    async obtenerTalleres() {
        try {
            const res = await fetch(`${config.API_URL}taller`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
                }
            })

            const data = await res.json();
            return data;

        } catch (error) {
            console.error(error);
        }
    }

    async obtenerMecanicoLibre(fecha) {
        try {
            const res = await fetch(`${config.API_URL}mecanico/libres_fecha`, {
                method: 'POST',
                body: JSON.stringify({
                    "fecha": fecha
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
                }
            })

            const data = await res.json();
            return data;

        } catch (error) {
            console.error(error);
        }
    }


    async entregarVehiculo(vehiculo) {
        try {
            const res = await fetch(`${config.API_URL}vehiculos/mecanico/cambiar_estado`, {
                method: "PUT",
                body: JSON.stringify({
                    "estado": 6,
                    "vehiculo": vehiculo
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
                }
            })

            const data = await res.json();

            return data;

        } catch (error) {
            console.error(error);
        }
    }


}



export default new API_USUARIO_SERVICE();