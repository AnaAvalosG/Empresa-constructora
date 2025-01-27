import styles from "../ServiciosOfrecidos.module.css"

function PlanificacionDelProyecto() {
    return(
        <div  className={styles['contenedor-componente-servicios']}>
        <h3>Planificación del proyecto</h3>
        <ul>
            <li>
                Crearemos un plano donde proyectaremos como usaremos el espacio, las tuberias de fontaneria, elementos electricos y lo necesario para llevar a cabo la base de esto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eveniet labore hic doloribus veritatis laboriosam dolores velit corporis ex non quia eaque odit perspiciatis illum ut voluptatibus ipsa, nemo dicta.

            </li>
            <li>
               Podemos crear un plano 3D para que puedas ver el resultado final de la estructura antes de comenzar la obra.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eveniet labore hic doloribus veritatis laboriosam dolores velit corporis ex non quia eaque odit perspiciatis illum ut voluptatibus ipsa, nemo dicta.
            </li>
        </ul>
      <img src="\imagenes-servicios\plano-de-proyecto.jpeg" className={styles['img-servicios']}></img>
    </div>
    )
}

export default PlanificacionDelProyecto;