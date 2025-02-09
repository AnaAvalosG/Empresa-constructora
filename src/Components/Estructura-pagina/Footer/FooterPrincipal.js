import React from 'react';
import styles from "./FooterPrincipal.module.css"
import { NavLink } from 'react-router-dom';
import RedesSociales from '../../Redes-sociales/RedesSociales';


const FooterPrincipal = () => {
    return (
        <div className={styles['contenedor-footer']}>

            <div className={styles['contenedor-footer-asuntos-legales']}>

                <div className={styles['div-footer-asuntos-legales']}>

                    <NavLink to={"/politicas-de-privacidad"} className={styles['nav-link']}>

                        <p className={styles['p-footer-asuntos-legales']}> Politicas de privacidad</p>

                    </NavLink>

                </div>

                <div className={styles['div-footer-asuntos-legales']}>

                    <NavLink to={"/aviso-legal"} className={styles['nav-link']}>

                        <p className={styles['p-footer-asuntos-legales']}>Avisos legales</p>

                    </NavLink>

                </div>


                <div className={styles['div-footer-asuntos-legales']}>

                    <NavLink to={"/politicas-de-cookies"} className={styles['nav-link']}>

                        <p className={styles['p-footer-asuntos-legales']} > Cookies </p>

                    </NavLink>

                </div>

            </div>

            <div className={styles['div-footer-contenedor-redes-sociales']}>

                <RedesSociales />

            </div>

        </div>
    )
}

export default FooterPrincipal;