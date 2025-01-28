import styles from "../ContenedorRedes.module.css"
import React from "react";

function RedSocialInstagram() {
    return (
        <div>

            <a href="https://www.instagram.com/recoarquitectura/" target="_blank" rel="noreferrer">

                <img src="\imagenes-footer\logo-instagram.png" className={styles['logo-redes-sociales']}></img>

            </a>

        </div>
    )
}

export default RedSocialInstagram;