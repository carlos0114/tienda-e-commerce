import React from 'react';
import './App.css';
import NavBar from './componentes/NavBar'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Count from './componentes/contador/Count';
import Home from './pages/index';
import About from './pages/about';

function App() {
  return ( 
    <>  
    <BrowserRouter>

<Routes>
  <Route path="/home" element={ <Home />}/>
  <Route index element={<NavBar/> }/> 
    <Route path='/about'element={<About/> }/>  
</Routes>
</BrowserRouter> 
{/* De aca para abajo se colocan las rutas de todos los componentes  */}
<Count />

</>

  );
  
}

export default App;
