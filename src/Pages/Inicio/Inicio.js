//daremos la bienvenida al usuario e incluiremos el
//contenido que consideremos oportuno y que pueda aportar un valor añadido.
import TablaDeProyectosImg from "../../Components/Inicio/TablaDeProyectos/TablaDeProyectosImg";
import InicioTitulos from "../../Components/Inicio/Titulo/InicioTitulos";
import styles from "./inicio.module.css";
import React from 'react';

const Inicio = () => {
  return (
    <>
      <div className={styles["div-inicio-titulo"]}>
        <br></br>
        <InicioTitulos />
      </div>

      <div className={styles["aQueNosDedicamos"]}>
        <h2 >¿A que nos dedicamos?</h2>
        <p >Somos una empresa de construccion de viviendas con mas de 5 años de trayectoria ubicados en la ciudad
          de Alicante, España y con mas de 1000 hogares contruidos.
          Buscamos hacer de tu hogar un lugar donde te encuentres comodo y se aproveche el mayor espacio
          posible.
          <br /> <br /> <br />
          Somos expertos en obra nueva, en renovar y acondicionar todo tipo de espacios.
        </p>
      </div>

      <div>
        <h2>Algunos proyectos realizados</h2>

        <TablaDeProyectosImg />
      </div>
    </>
  );
}

export default Inicio;