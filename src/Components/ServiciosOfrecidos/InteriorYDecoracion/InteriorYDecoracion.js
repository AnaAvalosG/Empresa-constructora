import styles from "../ServiciosOfrecidos.module.css"

function InteriorYDecoracion() {
    return(
       <div  className={styles['contenedor-componente-servicios']}>
           <h3>Interiorismo y decoración</h3>
           <ul>
               <li>
                   Contamos con un equipo que te ayudara con la decoracion del interior de la construccion orem ipsum dolor sit amet consectetur adipisicing elit. Quasi eveniet labore hic doloribus veritatis laboriosam dolores velit corporis ex non quia eaque odit perspiciatis illum ut voluptatibus ipsa, nemo dicta.
   
               </li>
               <li>
                 Te ayudaremos a elegir colores para lograr un espacio mas abierto o cerrado, veremos la cantidad de luz deseada, arte y detalles decorativos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eveniet labore hic doloribus veritatis laboriosam dolores velit corporis ex non quia eaque odit perspiciatis illum ut voluptatibus ipsa, nemo dicta.
               </li>
           </ul>
           <img src="\imagenes-servicios\decoracion.jpeg" className={styles['img-servicios']}></img>
       </div>
    )
   }
   
   export default InteriorYDecoracion;
