import styles from "./InicioTitulo.module.css";
import React from 'react';


const InicioTitulos = () => {
    return (
        <div className={styles['contenedor-titulo-pagina-inicio']}>
            <h1 className={styles["h1-titulo"]}>RECO CONSTRUCCIONES</h1>
            <h2 className={styles["h2-titulo"]}>Always in process</h2>
        </div>


    )
}

export default InicioTitulos;