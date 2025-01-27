// donde los usuarios podrán visualizar los mejores
// trabajos y así darse una idea de que es lo que la empresa puede ofrecerles.
import React from 'react';
import TablaDeProyectosImg from "../../Components/Nuestros-trabajos/TablaDeProyectos/TablaDeProyectosImg";
import TablaDeProyectos2 from '../../Components/Nuestros-trabajos/TablaDeProyectos2/TablaDeProyectos2';
import { NavLink } from 'react-router-dom';
import styles from "../Inicio/inicio.module.css"
const NuestrosTrabajos = () => {
  return (
    <div className={styles['contenedor-pagina-obras']}>
      <div>
        <h1>NUESTRAS OBRAS 🏗</h1>
        <TablaDeProyectosImg />
        <TablaDeProyectos2 />
      </div>
      <div>
        <button>
          <NavLink to="/contacto" className={styles['boton-hacia-contacto']}>
            Contactanos
          </NavLink>
        </button>
      </div>
    </div>
  )
}


export default NuestrosTrabajos;
