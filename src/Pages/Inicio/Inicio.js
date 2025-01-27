//daremos la bienvenida al usuario e incluiremos el
//contenido que consideremos oportuno y que pueda aportar un valor añadido.
import EleginosParaTuProyecto from "../../Components/Inicio/Eleginos-para-tu-proyecto/EleginosParaTuProyecto";
import TablaDeProyectosImg from "../../Components/Nuestros-trabajos/TablaDeProyectos/TablaDeProyectosImg";
import InicioTitulos from "../../Components/Inicio/Titulo/InicioTitulos";
import TextoAQueNosDedicamos from "../../Components/Inicio/texto-inicio-aQueNosDedicamos/TextAQueNosDedicamos";
import styles from "./inicio.module.css";
import React from 'react';
import { NavLink } from "react-router-dom";

const Inicio = () => {
  return (
    <div>
      <div className={styles["div-inicio-titulo"]}>
        <br></br>
        <InicioTitulos />
      </div>

      <div>
        <TextoAQueNosDedicamos />
      </div>

      <div>
        <div className={styles["contenedor-titulos-de-tabla"]}>
          <p className={styles["proyectos-realizados"]}>Algunos de nuestros proyectos realizados</p>
          <div className={styles["titulo-sueños-realidad"]}>Expertos en hacer tus sueños realidad</div>
          <p>IDEAS | CREATIVIDAD | INNOVACIÓN</p>
        </div>

        <TablaDeProyectosImg />
      </div>

      <div>
        <EleginosParaTuProyecto />
      </div>

      <div>
<button>
  <NavLink to="/contacto" className={styles['boton-hacia-contacto']}>
    Hacemos tu sueño realidad
  </NavLink>
</button>
      </div>
    </div>
  );
}

export default Inicio;