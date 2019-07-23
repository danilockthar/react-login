import React from 'react';
import Login from './Login';

function AlmostLogin(){
  return(
    <div className='almost'>
      <h1> Debes estar logueado para ver esta pagina.</h1>
      <Login  />
    </div>
  )
}

export default AlmostLogin;
