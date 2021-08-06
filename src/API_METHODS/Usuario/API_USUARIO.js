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


    async agregarVehiculo(usuario, nombre, marca, modelo, color) {
        try {
            const res = await fetch(`${config.API_URL}vehiculos/agregar`, {
                method: 'POST',
                body: JSON.stringify({
                    "usuario": usuario,
                    "nombre": nombre,
                    "marca": marca,
                    "modelo": modelo,
                    "color": color
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

    async obtenerArreglos(usuario) {
        try {
            const res = await fetch(`${config.API_URL}vehiculos/arreglos/${usuario}`, {
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


    async agendarArreglo(vehiculo, fecha, tipo_arreglo, taller) {
        try {
            const res = await fetch(`${config.API_URL}arreglos/agregar`, {
                method: 'POST',
                body: JSON.stringify({
                    "vehiculo": vehiculo,
                    "fecha": fecha,
                    "tipo_arreglo": tipo_arreglo,
                    "taller": taller
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


    async obtenerAutos(usuario) {
        try {
            const res = await fetch(`${config.API_URL}vehiculos/usuario/${usuario}`, {
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


}



export default new API_USUARIO_SERVICE();