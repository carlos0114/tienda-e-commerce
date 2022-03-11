import React from 'react';
import './NavBar.css';
import logo from './rose.png';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

export default  function NavBar(){

    return(
        <header>
            <div className="cabecero" id="cabecero">
                <a href="/"><h1 className="tituloI">cachilas</h1></a>
                <div>
                    <a href="/"><img src={logo} alt="LOGO"/></a>
                    <br/>
                    <a href="/">SUPER CARS</a>
                </div>
                <a href="/"><h1 className="tituloD">antiguas</h1></a>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light" id='navBar'>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <a className="navbar-brand" href="/" id="referenciaMenu">Inicio</a>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-around" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                      
                      
                        <Link to={"/NuestrosProd"}>
                            <p className="nav-link">Sobre nuestros productos</p>
                        </Link>
                        <Link to={"/"}>
                            <p className="nav-link">Tienda</p>
                        </Link>
                        <Link to={"/Refill"}>
                            <p className="nav-link">Refill</p>
                        </Link>
                    </div>
                </div>
                <CartWidget />
            </nav>
        </header>
    );
}