import React,{useState, useEffect, useContext, createContext} from 'react';
import AuthContext from './context/AuthContext';


function Login(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [passw, setPassw] = useState('');
  const [isAuth, setIsAuth] = useState(false);


  const contexto = useContext(AuthContext);
  const makeLogin = (e) => {

    e.preventDefault();
    // Aqui hago fetch a mi backend en php, que me devuelve si el usuario es correcto, un token //
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
        setIsAuth(true);
        console.log(contexto);
        //si existe el token quiero que el estado isAuth pase a ser verdadero y sea global, que es el que //
        // se encuentra en app.js manejando el isAuth de PrivateRoute y hacer publica esa pagina. //

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
        <h1> Login </h1>

        <form onSubmit={props.makeLogin}>
          <input type='text' placeholder='email' value={email} onChange={handleEmail} />
          <input type='text' placeholder='contraseña' value={passw} onChange={handlePassw} />
          <input type='submit' />
        </form>

        <button onClick={logOut} id='logOutbutton'> Desloguear </button>
      </div>

  )
}


export default Login;
