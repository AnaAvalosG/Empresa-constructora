import styles from "../ServiciosOfrecidos.module.css"
import React from "react";

function Mantenimiento() {
  return (
    <div className={styles['contenedor-componente-servicios']}>

      <h3>
        Servicios de mantenimiento
      </h3>

      <ul>

        <li>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eveniet labore hic doloribus veritatis laboriosam dolores velit corporis ex non quia eaque odit perspiciatis illum ut voluptatibus ipsa, nemo dicta.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eveniet labore hic doloribus veritatis laboriosam dolores velit corporis ex non quia eaque odit perspiciatis illum ut voluptatibus ipsa, nemo dicta.

        </li>

        <li>

          En caso de presentar algun problema a futuro como fugas, problemas electricos o daños en la esctructura, no te preocupes, nosotros lo reparamos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eveniet labore hic doloribus veritatis laboriosam dolores velit corporis ex non quia eaque odit perspiciatis illum ut voluptatibus ipsa, nemo dicta.

        </li>

      </ul>

      <img
        src="\imagenes-servicios\mantenimiento.jpeg"
        className={styles['img-servicios']}></img>

    </div>
  )
}

export default Mantenimiento;
