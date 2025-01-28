import React from "react";
import ContactoAsuntosLegales from "../../../Components/Asuntos-legales/Contacto-asuntos-legales/ContactoAsuntosLegales";
import CambiosEnCookies from "../../../Components/Asuntos-legales/Politicas-de-cookies/CambiosEnCookies";
import ContactoCookies from "../../../Components/Asuntos-legales/Politicas-de-cookies/ContactoCookies";
import CookiesDeTerceros from "../../../Components/Asuntos-legales/Politicas-de-cookies/CookiesDeTerceros";
import CookiesUtilizadas from "../../../Components/Asuntos-legales/Politicas-de-cookies/CookiesUtilizadas";
import ExplicacionCookies from "../../../Components/Asuntos-legales/Politicas-de-cookies/ExplicacionCookies";
import GestionDeCookies from "../../../Components/Asuntos-legales/Politicas-de-cookies/GestionDeCookies";
import styles from "../AsuntosLegales.module.css"

function PoliticaDeCookies() {
    return (
        <div>

            <div>

                <h1>Política de Cookies</h1>

                <h2>Reco construcciones</h2>

            </div>

            <div className={styles['contenedor-informacion']}>

                <ExplicacionCookies />

            </div>
            <div className={styles['contenedor-informacion']}>

                <CookiesUtilizadas />

            </div>
            <div className={styles['contenedor-informacion']}>

                <GestionDeCookies />

            </div>
            <div className={styles['contenedor-informacion']}>

                <CookiesDeTerceros />

            </div>
            <div className={styles['contenedor-informacion']}>

                <CambiosEnCookies />

            </div>
            <div className={styles['contenedor-informacion']}>

                <ContactoCookies />

                <ContactoAsuntosLegales />

            </div>

        </div>
    )
}

export default PoliticaDeCookies;


