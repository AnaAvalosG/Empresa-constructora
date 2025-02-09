import estilos from "./TablaDeProyectosImg.module.css";
import { NavLink } from "react-router-dom";
import React from 'react';

//Inserto imagenes de los proyectos realizados que al presionarlas me re-dirigen al apartado de nuestros trabajos

const TablaDeProyectosImg = () => {
    return (
        <table className={estilos["tabla-imagenes-proyectos"]}>

            <tbody>

                <tr>
                    <td className={estilos["contenedor-imagenes-de-nuestros-trabajos"]}>
                        <NavLink to="/nuestros-trabajos">
                            <img src="/Imagenes-tabla-proyectos/imagen1CasaFabricada.jpeg" alt="Trabajo realizado" className={estilos['img-obras-realizadas']}></img>
                        </NavLink>
                    </td>
                    <td className={estilos["contenedor-imagenes-de-nuestros-trabajos"]}>
                        <NavLink to="/nuestros-trabajos">
                            <img src="/Imagenes-tabla-proyectos/imagen2Piso.jpeg" alt="Trabajo realizado" className={estilos['img-obras-realizadas']}></img>
                        </NavLink>
                    </td>


                </tr>

                <tr>
                    <td className={estilos["contenedor-imagenes-de-nuestros-trabajos"]}>
                        <NavLink to="/nuestros-trabajos">
                            <img src="/Imagenes-tabla-proyectos/imagen3.jpeg" alt="Trabajo realizado" className={estilos['img-obras-realizadas']}></img>
                        </NavLink>
                    </td>
                    <td className={estilos["contenedor-imagenes-de-nuestros-trabajos"]}>
                        <NavLink to="/nuestros-trabajos">
                            <img src="/Imagenes-tabla-proyectos/imagen4CasaPorFuera.jpeg" alt="Trabajo realizado" className={estilos['img-obras-realizadas']}></img>
                        </NavLink>
                    </td>


                </tr>

                <tr>
                    <td className={estilos["contenedor-imagenes-de-nuestros-trabajos"]}>
                        <NavLink to="/nuestros-trabajos">
                            <img src="/Imagenes-tabla-proyectos/imagen5.jpeg" alt="Trabajo realizado" className={estilos['img-obras-realizadas']}></img>
                        </NavLink>
                    </td>
                    <td className={estilos["contenedor-imagenes-de-nuestros-trabajos"]}>
                        <NavLink to="/nuestros-trabajos">
                            <img src="/Imagenes-tabla-proyectos/imagen6.jpeg" alt="Trabajo realizado" className={estilos['img-obras-realizadas']}></img>
                        </NavLink>
                    </td>


                </tr>

                <tr>
                    <td className={estilos["contenedor-imagenes-de-nuestros-trabajos"]}>
                        <NavLink to="/nuestros-trabajos">
                            <img src="/Imagenes-tabla-proyectos/imagen7CasaDeCampo.jpeg" alt="Trabajo realizado" className={estilos['img-obras-realizadas']}></img>
                        </NavLink>
                    </td>
                    <td className={estilos["contenedor-imagenes-de-nuestros-trabajos"]}>
                        <NavLink to="/nuestros-trabajos">
                            <img src="/Imagenes-tabla-proyectos/imagen8.jpeg" alt="Trabajo realizado" className={estilos['img-obras-realizadas']}></img>
                        </NavLink>
                    </td>


                </tr>

            </tbody>

        </table>
    )
}

export default TablaDeProyectosImg;