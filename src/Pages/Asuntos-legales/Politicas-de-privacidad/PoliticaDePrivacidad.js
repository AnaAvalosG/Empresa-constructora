import DivulgacionDeLaInformacion from "../../../Components/Asuntos-legales/Politicas-de-privacidad/DivulgacionDeLaInformacion";
import InformacionRecopilada from "../../../Components/Asuntos-legales/Politicas-de-privacidad/InformacionRecopilada";
import IntroduccionPrivacidad from "../../../Components/Asuntos-legales/Politicas-de-privacidad/IntroduccionPrivacidad";
import SeguridadDeLaInformacion from "../../../Components/Asuntos-legales/Politicas-de-privacidad/SeguridadDeLaInformacion";
import UsoDeLaInformacion from "../../../Components/Asuntos-legales/Politicas-de-privacidad/UsoDeLaInformacion";
import styles from "../AsuntosLegales.module.css"
import Derechos from "../../../Components/Asuntos-legales/Politicas-de-privacidad/Derechos";
import CambiosEnLPDP from "../../../Components/Asuntos-legales/Politicas-de-privacidad/CambiosEnLPDP";
import ContactoAsuntosLegales from "../../../Components/Asuntos-legales/Contacto-asuntos-legales/ContactoAsuntosLegales";
import ContactoTextoAsuntosLegales from "../../../Components/Asuntos-legales/Politicas-de-privacidad/ContactoTextoAsuntosLegales";


function PoliticaDePrivacidad() {
    return (
        <div className={styles['contenedor-politicas-de-privacidad']}>
            <div >
                <h1>Politica de privacidad</h1>
                <h2>Reco construcciones</h2>
            </div>

            <div className={styles['contenedor-informacion']}>
                <IntroduccionPrivacidad />
            </div>
            <div className={styles['contenedor-informacion']}>
                <InformacionRecopilada />
            </div>


            <div className={styles['contenedor-informacion']}>
                <UsoDeLaInformacion />
            </div>
            <div className={styles['contenedor-informacion']}>
                <DivulgacionDeLaInformacion />
            </div>
            <div className={styles['contenedor-informacion']}>
                <SeguridadDeLaInformacion />
            </div>
            <div className={styles['contenedor-informacion']}>
                <Derechos />
            </div>
            <div className={styles['contenedor-informacion']}>
                <CambiosEnLPDP />
            </div>
            <div className={styles['contenedor-informacion']}>
                <ContactoTextoAsuntosLegales />
                <ContactoAsuntosLegales />
            </div>
        </div>

    )
}

export default PoliticaDePrivacidad;

