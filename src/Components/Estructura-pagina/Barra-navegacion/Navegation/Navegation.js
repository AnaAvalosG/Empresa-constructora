import React from "react"
import NavLinkItems from "../NavLink/NavLinkItems"
import { useState } from "react"
import styles from"./Navegation.module.css"

//Contiene los links de navegacion de cada pagina para poder movernos entre ellas

function Navegation() {
    const [isOpen, setIsOpen] = useState(false)
    return (<>
     
        <nav className={styles['navegador-principal']}>
            <div className={styles['contenedor-nav-logo']}>
                <NavLinkItems to="/">
                <div className={styles['logo-texto-contenedor']}>
                <img src='\logoMartillosCabecera.png' alt='img martillos' className={styles['logo-martillos-nav']}></img>
                <h3 className={styles['letra-logo-cabecera']}>RECO</h3>
                </div>
                </NavLinkItems>
               
            </div>
            <div className={`${styles['contenedor-nav-paginas']} ${isOpen ? styles.open : ''}`}>
                <NavLinkItems to="/">Inicio </NavLinkItems>
                <NavLinkItems to="/servicios" >Servicios</NavLinkItems>
                <NavLinkItems to="/nuestros-trabajos" >Nuestros trabajos</NavLinkItems>
                <NavLinkItems to="/sobre-nosotros">Sobre nosotros</NavLinkItems>
                <NavLinkItems to="/contacto" >Contacto</NavLinkItems>
            </div>
            <div className={`${styles['nav-toggle']} ${isOpen ? styles.open : ''}`} onClick={() => { setIsOpen(!isOpen) }}>
                <span></span><span></span><span></span>
            </div>
        </nav>
    </>
    )

}
 export default Navegation;