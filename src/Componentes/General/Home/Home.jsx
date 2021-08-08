import React from 'react'


export function Home() {
    return (
        <div className="container">
            <div className="container50">
                <h1>Bienvenido a Auto Power, somos el mejor taller automotriz de toda Santa Marta. No te pierdas ninguno de nuestros servicios.
                    Tenemos: Mecánica básica, revision automotriz, estética automotriz y mecánica especializada.
                </h1>
                <img src="home_3.png" alt="taller"/>
            </div>
            <div className="container50">
                <img className="img_home" src="home_1.png" alt="taller"/>
                <img className="img_home" src="home_2.png" alt="taller"/>
            </div>
        </div>
    );
}