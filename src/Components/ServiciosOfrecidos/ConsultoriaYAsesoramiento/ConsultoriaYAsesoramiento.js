import styles from "../ServiciosOfrecidos.module.css"

function ConsultoriaYAsesoramiento() {
 return(
    <div className={styles['contenedor-componente-servicios']}>
        <h3>Consultoria y asesoramiento</h3>
        <ul>
            <li>
                En primer lugar nos reuniremos para ver que clase de proyecto relizaremos, el espacio
                con el que contamos, comprender que es lo que se debe ver proyectado y los objetivos del cliente.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eveniet labore hic doloribus veritatis laboriosam dolores velit corporis ex non quia eaque odit perspiciatis illum ut voluptatibus ipsa, nemo dicta.

            </li>
            <li>
                Si asi lo queres te asesoraremos en cuanto a la distribucion del espacio, seleccion de materiales, colores a utilizar
                y diseños que le pueden agregar una personalizacion al lugar.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eveniet labore hic doloribus veritatis laboriosam dolores velit corporis ex non quia eaque odit perspiciatis illum ut voluptatibus ipsa, nemo dicta.
            </li>
        </ul>
       <img src="\imagenes-servicios\consultoria-y-asesoramiento.jpeg" className={styles['img-servicios']}></img>
    </div>
 )
}

export default ConsultoriaYAsesoramiento;