import { NavLink } from "react-router-dom";
import styles from "../AsuntosLegales.module.css"
import ContactoAsuntosLegales from "../../../Components/Asuntos-legales/Contacto-asuntos-legales/ContactoAsuntosLegales";
import ContactoAvisoLegal from "../../../Components/Asuntos-legales/Aviso-legal/ContactoAvisoLegal";
import ObjetoLegal from "../../../Components/Asuntos-legales/Aviso-legal/ObjetoLegal";
import CondicionesUso from "../../../Components/Asuntos-legales/Aviso-legal/CondicionesUso";
import PropiedadIntelectual from "../../../Components/Asuntos-legales/Aviso-legal/PropiedadIntelectual";
import ProteccionDeDatos from "../../../Components/Asuntos-legales/Aviso-legal/ProteccionDeDatos";
import Modificaciones from "../../../Components/Asuntos-legales/Aviso-legal/Modificaciones";
import Legislacion from "../../../Components/Asuntos-legales/Aviso-legal/Legislacion";

function AvisoLegal() {
    return (
        <div>
            <div>
                <h1>Aviso legal</h1>
                <h2>Reco construcciones</h2>
            </div>

            <div className={styles['contenedor-informacion-general-empresa']}>
                <ContactoAvisoLegal />
            </div>

            <div className={styles['contenedor-informacion']}>
                <ObjetoLegal />
            </div>

            <div className={styles['contenedor-informacion']}>
                <CondicionesUso />
            </div>

            <div className={styles['contenedor-informacion']}>
                <PropiedadIntelectual />
            </div>

            <div className={styles['contenedor-informacion']}>
                <ProteccionDeDatos />
            </div>


            <div className={styles['contenedor-informacion']}>
                <Modificaciones />
            </div> 
            
            <div className={styles['contenedor-informacion']}>
                <Legislacion />
            </div>

        </div>
    )
}

export default AvisoLegal;