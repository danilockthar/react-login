import React, { useState } from 'react';
import './css/Registrar.css';





function Registrar() {

    const [autenticado, setAutenticado] = useState(false);
    const [inputName, setInputName] = useState(false);
    const [inputLast, setInputLast] = useState(false);
    const [inputEmail, setInputEmail] = useState(false);
    const [inputPassw, setInputPassw] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [passw, setPassw] = useState("");
    const [message, setMessage] = useState("");

    const handleName = (e) =>{
    setName(e.target.value);
  }
    const handleEmail = (e) =>{
      setEmail(e.target.value);
    }
    const handlePassw = (e) =>{
      setPassw(e.target.value);
    }

  const handleSubmit = (event) => {
          event.preventDefault();

          fetch("http://localhost/daniphp/login-jwt/registro.php", {
            method: 'POST',
            headers: new Headers({
                   'Content-Type': 'application/x-www-form-urlencoded',
          }),
          body: "username="+name+"&useremail="+email+"&userpw="+passw
          })
          .then((response) => response.text())
          .then((responseText) => {
          setMessage(responseText);

          if(responseText === "Ingrese su nombre"){
            setInputName(true);
          }else{
            setInputName(false);
          }
          if(responseText === "Ingrese su email"){
            setInputEmail(true);
          }else{
            setInputEmail(false);
          }
          if(responseText === "Ingrese su contraseña"){
            setInputPassw(true);
          }else{
            setInputPassw(false);
          }
          if(responseText === "Registro realizado con exito"){
            setIsReady(true);
            setAutenticado(true);
          }
          })
          .catch((error) => {
          console.error(error);
          });
  }



  return (
      <div className="registrar">
        <h1> Registro </h1>

        <form onSubmit={handleSubmit}>
          <h1 className={isReady? "success" : "failed"}>{message}</h1>
          <input type="text" className={!inputName? "" : "inputfail"} value= { isReady? "": name} onChange={handleName} placeholder="Ingrese su nombre" />>
          <input type="text" className={!inputEmail? "" : "inputfail"} value= { isReady? "": email} onChange={handleEmail} placeholder="Ingrese su email" />
          <input type="text" className={!inputPassw? "" : "inputfail"}  value= { isReady? "": passw} onChange={handlePassw} placeholder="Ingrese su contraseña" />
          <input type="submit" />
        </form>

      </div>
  )
}


export default Registrar;
