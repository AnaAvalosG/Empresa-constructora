import styles from "../ServiciosOfrecidos.module.css"
import React from "react";

function PermisosYLicencias() {
    return (
        <div className={styles['contenedor-componente-servicios']}>

            <h3>
                Gestión de permisos y licencias
            </h3>

            <ul>
                <li>

                    Dependiendo de lo que se realize cabe la posibilidad de que sea necesaria alguna licencia y/o permisos, por eso lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eveniet labore hic doloribus veritatis laboriosam dolores velit corporis ex non quia eaque odit perspiciatis illum ut voluptatibus ipsa, nemo dicta.

                </li>

                <li>

                    Nosotros nos encargaremos de gestionar las licencias requeridas por la empresa para avenzar con la obra. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eveniet labore hic doloribus veritatis laboriosam dolores velit corporis ex non quia eaque odit perspiciatis illum ut voluptatibus ipsa, nemo dicta.

                </li>

            </ul>

            <img
                src="/imagenes-servicios/permisos-y-licencias.jpeg"
                className={styles['img-servicios']}></img>

        </div>
    )
}

export default PermisosYLicencias;