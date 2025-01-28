import RedSocialFacebook from "./ContenedorRedes/Facebook/RedSocialFacebook";
import RedSocialInstagram from "./ContenedorRedes/Instagram/RedSocialInstagram";
import RedSocialX from "./ContenedorRedes/X/RedSocialX";
import styles from "./RedesSociales.module.css"
import React from "react";

function RedesSociales() {
    return (

        <div className={styles['contenedor-redes-sociales']}>

            <RedSocialInstagram />

            <RedSocialX />

            <RedSocialFacebook />

        </div>

    )
}

export default RedesSociales;