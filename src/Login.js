import React,{useState, useEffect, useContext, createContext} from 'react';
import './css/Login.css';
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
  const [msg, setMsg] = useState("");
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
      setMsg(json.msg);
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
        <h3 id='msgpantalla'> {msg} </h3>
        <h1> Login </h1>
        <p> email: test@test.com </p>
        <p> password: test </p>
        <form onSubmit={makeLogin}>
          <input type='text' placeholder='email' value={email} onChange={handleEmail} />
          <input type='password' placeholder='contraseña' value={passw} onChange={handlePassw} />
          <input type='submit' className='buttonlog' />
        </form>



      </div>

  )
}


export default Login;
