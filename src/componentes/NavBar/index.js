import React from 'react';
import { Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink } from './NavBarElement';
import { Carrito } from '../carrito/Carrito';
const NavBar = () => {
  return (
<>
                          {/* todo esto es la barra navbar */}
<Nav>
    <NavLink to="/">
   
    </NavLink>  
    <Bars />
    <Carrito/>
    <NavMenu>
      
      <NavLink to="/about" activeStyle> 
      About
      </NavLink>
      <NavLink to="/services" activeStyle> 
      Services
      </NavLink>
      <NavLink to="/contact" activeStyle> 
      Conact
      </NavLink>
      <NavLink to="/sign-up" activeStyle> 
      Singn Up
      </NavLink>

    </NavMenu>
    <NavBtn>
        <NavBtnLink to="/signin">Sign In</NavBtnLink>
    </NavBtn> 
</Nav>

</>
  )
   };


export default NavBar;
