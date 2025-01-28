import NuestroEquipo from "../../NuestroEquipo/NuestroEquipo";
import styles from "./CapitalHumano.module.css"
import React from "react";

function CapitalHumano() {
    return (
        <>

            <h3 className={styles['titulo-capital-humano']}>
                Te presentamos a nuestro equipo
            </h3>
            
            <div>

                <NuestroEquipo />

            </div>

        </>
    )
}

export default CapitalHumano;