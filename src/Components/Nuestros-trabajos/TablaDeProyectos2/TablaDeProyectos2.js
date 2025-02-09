import estilos from "../TablaDeProyectos/TablaDeProyectosImg.module.css"
import React from "react";

function TablaDeProyectos2() {
    return (
        <div>
            <table className={estilos["tabla-imagenes-proyectos"]}>

                <tbody>

                    <tr>
                        <td className={estilos["contenedor-imagenes-de-nuestros-trabajos"]}>

                            <img src="/Imagenes-tabla-proyectos/imagen1CasaFabricada.jpeg" alt="Trabajo realizado" className={estilos['img-obras-realizadas']}></img>

                        </td>
                        <td className={estilos["contenedor-imagenes-de-nuestros-trabajos"]}>

                            <img src="/Imagenes-tabla-proyectos/imagen2Piso.jpeg" alt="Trabajo realizado" className={estilos['img-obras-realizadas']}></img>

                        </td>


                    </tr>

                    <tr>
                        <td className={estilos["contenedor-imagenes-de-nuestros-trabajos"]}>

                            <img src="/Imagenes-tabla-proyectos/imagen3.jpeg" alt="Trabajo realizado" className={estilos['img-obras-realizadas']}></img>

                        </td>
                        <td className={estilos["contenedor-imagenes-de-nuestros-trabajos"]}>

                            <img src="/Imagenes-tabla-proyectos/imagen4CasaPorFuera.jpeg" alt="Trabajo realizado" className={estilos['img-obras-realizadas']}></img>

                        </td>

                    </tr>

                    <tr>
                        <td className={estilos["contenedor-imagenes-de-nuestros-trabajos"]}>

                            <img src="/Imagenes-tabla-proyectos/imagen5.jpeg" alt="Trabajo realizado" className={estilos['img-obras-realizadas']}></img>

                        </td>
                        <td className={estilos["contenedor-imagenes-de-nuestros-trabajos"]}>

                            <img src="/Imagenes-tabla-proyectos/imagen6.jpeg" alt="Trabajo realizado" className={estilos['img-obras-realizadas']}></img>

                        </td>


                    </tr>

                    <tr>
                        <td className={estilos["contenedor-imagenes-de-nuestros-trabajos"]}>

                            <img src="/Imagenes-tabla-proyectos/imagen7CasaDeCampo.jpeg" alt="Trabajo realizado" className={estilos['img-obras-realizadas']}></img>

                        </td>
                        <td className={estilos["contenedor-imagenes-de-nuestros-trabajos"]}>

                            <img src="/Imagenes-tabla-proyectos/imagen8.jpeg" alt="Trabajo realizado" className={estilos['img-obras-realizadas']}></img>

                        </td>


                    </tr>

                </tbody>

            </table>

            <p>
                Work in progress...
            </p>

        </div>
    )
}

export default TablaDeProyectos2;