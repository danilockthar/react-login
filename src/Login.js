import React,{useState, useEffect, useContext, createContext} from 'react';
import AuthContext from './context/AuthContext';


function Login(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [passw, setPassw] = useState('');
  const [isAuth, setIsAuth] = useState(false);


  
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
        setIsAuth(true);

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
        <AuthContext.Provider value={isAuth}>
        <form onSubmit={makeLogin}>
          <input type='text' placeholder='email' value={email} onChange={handleEmail} />
          <input type='text' placeholder='contraseña' value={passw} onChange={handlePassw} />
          <input type='submit' />
        </form>
        </AuthContext.Provider>
        <button onClick={logOut} id='logOutbutton'> Desloguear </button>
      </div>

  )
}


export default Login;
