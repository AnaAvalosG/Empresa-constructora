import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Inicio from './Pages/Inicio/Inicio';
import Contacto from './Pages/Contacto/Contacto';
import SobreNosotros from './Pages/Sobre-nosotros/SobreNosotros';
import Servicios from './Pages/Servicios/Servicios';
import NuestrosTrabajos from './Pages/Nuestros-trabajos/NuestrosTrabajos';
import FooterPrincipal from './Components/Footer/FooterPrincipal';
import Navegation from './Components/Navegation/Navegation';



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

      </Routes>



      <footer className='App-footer'>
        <FooterPrincipal />
      </footer>
    </div>

  );
}

export default App;
