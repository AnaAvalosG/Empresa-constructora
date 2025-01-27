// “Contacto” donde los usuarios puedan contactar con la empresa
// mediante un formulario.
import React from 'react';
import styles from "./Contacto.module.css"
import FormularioDeContacto from "../../Components/Contacto/FormularioDeContacto/FormularioDeContacto"
import MediosDeContacto from '../../Components/Contacto/MediosDeContacto/MediosDeContacto';


const Contacto = () => {
    return (
        <div id='seccion-contacto'>
            <h1 className={styles['h1-pagina-contacto']}>Contacto</h1>
            <div className={styles['contenedor-cuepo-contacto']}>
                <div className={styles['div-contenedor-formulario-contacto']}>
                    <FormularioDeContacto />
                </div>
                <div className={styles['div-contenedor-medios-de-contacto']}>
                    <MediosDeContacto />
                </div>
            </div>
        </div>


    )
}

export default Contacto;