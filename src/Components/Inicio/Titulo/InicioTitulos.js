import styles from "./InicioTitulo.module.css";
import React from 'react';
const InicioTitulos = () =>{
    return(
        <>
        <h1 className={styles["h1-titulo"]}>Reco construcciones</h1> 
        <h2 className={styles["h2-titulo"]}>Always in process</h2>
        </>
    )
}

export default InicioTitulos;