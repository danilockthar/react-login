import React from 'react';
import './css/Nav.css';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div className="nav">
        <NavLink to='/' className="Linktags">
      <h1 className='logobro'>LOGO</h1>

      </NavLink>
      <div className="mislinks">
      <NavLink exact to='/' className="Linktags" activeClassName="selected">
        HOME
      </NavLink>
      <NavLink to='/login' className="Linktags" activeClassName="selected">
        Login
      </NavLink>
      <NavLink  to='/registrar' className="Linktags" activeClassName="selected">
        Registrar
      </NavLink>
      <NavLink  to='/protected' className="Linktags" activeClassName="selected">
        Contenido protegido
      </NavLink>
      </div>
    </div>

  )
}

export default Nav;
