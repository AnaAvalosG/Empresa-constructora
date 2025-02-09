import styles from "../ContenedorRedes.module.css"
import React from "react";


function RedSocialFacebook() {
    return (
        <div>

            <a href="https://www.facebook.com/RECOPAC/?locale=es_LA" target="_blank" rel="noreferrer">

                <img src="/imagenes-footer/logo-facebook.png" className={styles['logo-redes-sociales']}></img>

            </a>

        </div>
    )
}

export default RedSocialFacebook;