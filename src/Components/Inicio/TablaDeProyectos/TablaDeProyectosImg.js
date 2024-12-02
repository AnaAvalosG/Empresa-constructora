import estilos from "./TablaDeProyectosImg.module.css";
import { NavLink } from "react-router-dom";
import React from 'react';

const TablaDeProyectosImg = () => {
    return (
        <table className={estilos["tabla-imagenes-proyectos"]}>
            <tbody>
            <tr>
                <td>
                    <NavLink to="/nuestros-trabajos">
                        <img src="\Imagenes-inicio\imagen1CasaFabricada.jpeg" alt="Trabajo realizado"></img>
                    </NavLink>
                </td>
                <td>
                    <NavLink to="/nuestros-trabajos">
                        <img src="\Imagenes-inicio\imagen2Piso.jpeg" alt="Trabajo realizado"></img>
                    </NavLink>
                </td>


            </tr>
            <tr>
                <td>
                    <NavLink to="/nuestros-trabajos">
                        <img src="\Imagenes-inicio\imagen3.jpeg" alt="Trabajo realizado"></img>
                    </NavLink>
                </td>
                <td>
                    <NavLink to="/nuestros-trabajos">
                        <img src="\Imagenes-inicio\imagen4CasaPorFuera.jpeg" alt="Trabajo realizado"></img>
                    </NavLink>
                </td>


            </tr>
            <tr>
                <td>
                    <NavLink to="/nuestros-trabajos">
                        <img src="\Imagenes-inicio\imagen5.jpeg" alt="Trabajo realizado"></img>
                    </NavLink>
                </td>
                <td>
                    <NavLink to="/nuestros-trabajos">
                        <img src="\Imagenes-inicio\imagen6.jpeg" alt="Trabajo realizado"></img>
                    </NavLink>
                </td>


            </tr>
            <tr>
                <td>
                    <NavLink to="/nuestros-trabajos">
                        <img src="\Imagenes-inicio\imagen7CasaDeCampo.jpeg" alt="Trabajo realizado"></img>
                    </NavLink>
                </td>
                <td>
                    <NavLink to="/nuestros-trabajos">
                        <img src="\Imagenes-inicio\imagen8.jpeg" alt="Trabajo realizado"></img>
                    </NavLink>
                </td>


            </tr>

            </tbody>
        </table>
    )
}

export default TablaDeProyectosImg;