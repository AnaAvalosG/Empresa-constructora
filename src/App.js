import React, {useState} from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Inicio from './Pages/Inicio/Inicio';
import Contacto from './Pages/Contacto/Contacto';
import PaginaActiva from './Components/PaginaActiva/PaginaActiva';
import SobreNosotros from './Pages/Sobre-nosotros/SobreNosotros';
import Servicios from './Pages/Servicios/Servicios';
import NuestrosTrabajos from './Pages/Nuestros-trabajos/NuestrosTrabajos';
import FooterPrincipal from './Components/Footer/FooterPrincipal';



function App() {
 const [isOpen, setIsOpen] = useState(false)
  return (

    <div className="App">
      <header className="App-header">
        <nav className='navegador-principal'>
          <div className='contenedor-nav-logo'>
            <NavLink to="/"className={({ isActive }) => (isActive ? "active" : "")}><img src='\logoMartillosCabecera.png' alt='img martillos' className='logo-martillos-nav'></img></NavLink>
          </div>
          <div className={`contenedor-nav-paginas ${isOpen ? "open" : ""}`}>
            <NavLink to="/"className={({ isActive }) => (isActive ? "active" : "")}>Inicio </NavLink>
            <NavLink to="/contacto"className={({ isActive }) => (isActive ? "active" : "")}>Contacto</NavLink>
            <NavLink to="/servicios"className={({ isActive }) => (isActive ? "active" : "")}>Servicios</NavLink>
            <NavLink to="/nuestros-trabajos"className={({ isActive }) => (isActive ? "active" : "")}>Nuestros trabajos</NavLink>
            <NavLink to="/sobre-nosotros"className={({ isActive }) => (isActive ? "active" : "")}>Sobre nosotros</NavLink>
          </div>
<div className={`nav-toggle ${isOpen ? "open": ""}`} onClick={ () =>{setIsOpen(!isOpen)}}> 
  <span></span><span></span><span></span>
</div>
        </nav>


      </header>

      <Routes>
        <Route path='/' element={<Inicio />}>Inicio</Route>
        <Route path='/contacto' element={<Contacto />}>Contacto</Route>
        <Route path='/servicios' element={<Servicios />}>Servicios</Route>
        <Route path='/nuestros-trabajos' element={<NuestrosTrabajos />}>Nuestros trabajos</Route>
        <Route path='/sobre-nosotros' element={<SobreNosotros />}>Sobre nosotros</Route>

      </Routes>



      <footer className='App-footer'>
        <FooterPrincipal />
      </footer>
    </div>

  );
}

export default App;
