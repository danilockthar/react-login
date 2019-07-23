import React,{useState, useEffect, useContext, createContext} from 'react';
import { BrowserRouter as Router,
   Switch,
   Route,
   Redirect
  } from 'react-router-dom';
import AuthContext from './context/AuthContext';
import Redirigido from './context/Redirigido';

function Login(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [passw, setPassw] = useState('');
  const [isAuth, setIsAuth] = useState(false);

  const context = useContext(AuthContext);
  const redirecto = useContext(Redirigido);
  const makeLogin = (e) => {

    e.preventDefault();

    fetch("http://localhost/daniphp/login-jwt/ingreso.php", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/x-www-form-urlencoded"
    }),
    body: "useremail=" + email + "&userpw="+ passw
  })
    .then(response => response.json())
    .then(json => {
      console.log(json);
      if(json.token){
        localStorage.setItem('myToken', json.token);
        props.changeAuth();

      }

    })
    .catch(error => {
      console.error(error);
    });
}

  const logOut = () => {
    localStorage.removeItem("myToken");
    localStorage.removeItem("auth");
  }
  const handleUsername = (e) =>{
    setName(e.target.value);

  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePassw = (e) => {
    setPassw(e.target.value);
  }


  return (

      <div className="login">
        {redirecto ? <h3 id='msgredirect'> Tienes que loguear para poder ver esta pagina </h3> : ""}
        <h1> Login </h1>

        <form onSubmit={makeLogin}>
          <input type='text' placeholder='email' value={email} onChange={handleEmail} />
          <input type='text' placeholder='contraseña' value={passw} onChange={handlePassw} />
          <input type='submit' />
        </form>

        <button onClick={logOut} id='logOutbutton'> Desloguear </button>

      </div>

  )
}


export default Login;
