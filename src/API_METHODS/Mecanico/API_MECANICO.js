import config from '../config';


class API_USUARIO_SERVICE {
    async login(cedula, password) {
        try {
            const res = await fetch(`${config.API_URL}mecanico/login`, {
                method: 'POST',
                body: JSON.stringify({
                    'cedula': cedula,
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


    async obtener_datos_mecanico(usuario) {
        try {
            const res = await fetch(`${config.API_URL}mecanico/${usuario}`, {
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

    async editar_mecanico(cedula, nuevo_cedula, nombres, password) {
        try {
            const res = await fetch(`${config.API_URL}mecanico/editar`, {
                method: 'PUT',
                body: JSON.stringify({
                    "cedula": cedula,
                    "password": password,
                    "cedula_nueva": nuevo_cedula,
                    "nombre": nombres
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


    async consultarArreglos(cedula, fecha) {
        try {
            const res = await fetch(`${config.API_URL}arreglos/fecha_mecanico`, {
                method: 'POST',
                body: JSON.stringify({
                    "cedula": cedula,
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


    async iniciarReparacion(vehiculo) {
        try {
            const res = await fetch(`${config.API_URL}vehiculos/mecanico/cambiar_estado`, {
                method: "PUT",
                body: JSON.stringify({
                    "estado": 4,
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

    async finalizarReparacion(vehiculo, descripcion, idarreglo) {
        try {
            const res = await fetch(`${config.API_URL}arreglos/mecanico/finalizar_reparacion`, {
                method: "PUT",
                body: JSON.stringify({
                    "vehiculo": vehiculo,
                    "descripcion": descripcion,
                    "idarreglo": idarreglo
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