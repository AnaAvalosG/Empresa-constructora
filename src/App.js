import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Inicio from './Pages/Inicio/Inicio';
import Contacto from './Pages/Contacto/Contacto';
import SobreNosotros from './Pages/Sobre-nosotros/SobreNosotros';
import Servicios from './Pages/Servicios/Servicios';
import NuestrosTrabajos from './Pages/Nuestros-trabajos/NuestrosTrabajos';
import FooterPrincipal from '../src/Components/Estructura-pagina/Footer/FooterPrincipal';
import Navegation from '../src/Components/Estructura-pagina/Barra-navegacion/Navegation/Navegation';
import PoliticaDePrivacidad from './Pages/Asuntos-legales/Politicas-de-privacidad/PoliticaDePrivacidad';
import AvisoLegal from './Pages/Asuntos-legales/Aviso-legal/AvisoLegal';
import PoliticaDeCookies from './Pages/Asuntos-legales/Politica-de-cookies/PoliticaDeCookies';


function App() {

  return (

    <div className="App">
      <header className="App-header">

        <Navegation />

      </header>

      <Routes>
        <Route path='/' element={<Inicio />}>Inicio</Route>
        <Route path='/contacto' element={<Contacto />}>Contacto</Route>
        <Route path='/servicios' element={<Servicios />}>Servicios</Route>
        <Route path='/nuestros-trabajos' element={<NuestrosTrabajos />}>Nuestros trabajos</Route>
        <Route path='/sobre-nosotros' element={<SobreNosotros />}>Sobre nosotros</Route>
        <Route path='/politicas-de-privacidad' element={<PoliticaDePrivacidad />}> Politicas de privacidad</Route>
        <Route path='/aviso-legal' element={<AvisoLegal />}> Aviso legal</Route>
        <Route path='/politicas-de-cookies' element={<PoliticaDeCookies />}> Politica de cookies</Route>

    
      </Routes>



      <footer className='App-footer'>
        <FooterPrincipal />
      </footer>
    </div>

  );
}

export default App;
