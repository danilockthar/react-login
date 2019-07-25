import React from 'react';
import './css/Home.css';





function Home() {


  return (
      <div className="home">
        <h1> Sistema de autenticación en PHP, MySQL y React JS. </h1>
        <p className='avance'> Sintiendo la necesidad de integrar PHP con React me propuse desarrollar un sistema de autenticación sencillo. La comunicación al servidor devuelve un objeto con su respectivo mensaje para poder comunicar en el lado del cliente.</p>
        <img src='img/ingresophp.png' className='ingresoimg' />
        <p className='avance2'> El registro busca en la base de datos si el email no existe y luego lo ingresa a la base de datos. </p>
        <img src='img/registrophp.png' className='registroimg' />
      </div>

  )
}


export default Home;
