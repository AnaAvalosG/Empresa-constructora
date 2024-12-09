import React from "react"
import NavLinkItems from "../NavLink/NavLinkItems"
import { useState } from "react"

function Navegation() {
    const [isOpen, setIsOpen] = useState(false)
    return (<>
     
        <nav className='navegador-principal'>
            <div className='contenedor-nav-logo'>
                <NavLinkItems to="/" className={({ isActive }) => (isActive ? "aticve" : "")}><img src='\logoMartillosCabecera.png' alt='img martillos' className='logo-martillos-nav'></img></NavLinkItems>
            </div>
            <div className={`contenedor-nav-paginas ${isOpen ? "open" : ""}`}>
                <NavLinkItems to="/" className={({ isActive }) => (isActive ? "active" : "")}>Inicio </NavLinkItems>
                <NavLinkItems to="/contacto" className={({ isActive }) => (isActive ? "active" : "")}>Contacto</NavLinkItems>
                <NavLinkItems to="/servicios" className={({ isActive }) => (isActive ? "active" : "")}>Servicios</NavLinkItems>
                <NavLinkItems to="/nuestros-trabajos" className={({ isActive }) => (isActive ? "active" : "")}>Nuestros trabajos</NavLinkItems>
                <NavLinkItems to="/sobre-nosotros" className={({ isActive }) => (isActive ? "active" : "")}>Sobre nosotros</NavLinkItems>
            </div>
            <div className={`nav-toggle ${isOpen ? "open" : ""}`} onClick={() => { setIsOpen(!isOpen) }}>
                <span></span><span></span><span></span>
            </div>
        </nav>
    </>
    )

}
 export default Navegation;