import React from 'react';
import { Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink } from './NavBarElement';
 const NavBar = () => {
  return (
<>
<Nav>
    <NavLink to="/">
      <h1>Super Car</h1>
    </NavLink> 
    <Bars />
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
