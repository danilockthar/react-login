import React from 'react';
import './css/Nav.css';
import { NavLink } from 'react-router-dom';

function Nav(props) {
  return (
    <div className="nav">


      <NavLink exact to='/' className="Linktags" onClick={props.changeRedir} activeClassName="selected">
        HOME
      </NavLink>
      <NavLink  to='/registrar' className="Linktags" onClick={props.changeRedir} activeClassName="selected">
        Registrar
      </NavLink>
      <NavLink  to='/protected' className="Linktags" activeClassName="selected">
        Contenido protegido
      </NavLink>

    </div>

  )
}

export default Nav;
