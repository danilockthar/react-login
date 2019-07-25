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

          fetch("https://interdictory-sinks.000webhostapp.com/includes/registro.php", {
            method: 'POST',
            headers: new Headers({
                   'Content-Type': 'application/x-www-form-urlencoded',
          }),
          body: "username="+name+"&useremail="+email+"&userpw="+passw
          })
          .then((response) => response.json())
          .then((json) => {
          setMessage(json.msg);

          if(json.exito === true){
            setName("");
            setEmail("");
            setPassw("");
            setIsReady(true);
            console.log(json.user);
          }else{
            console.log("false");
          }
          })
          .catch((error) => {
          console.error(error);
          });
  }



  return (
      <div className="registrar">
        <h1 className='sectionRegistro'> Registro </h1>

        <form onSubmit={handleSubmit}>
          <h1 className={isReady? "success" : "failed"}>{message}</h1>
          <label> Su nombre </label>
          <input type="text" className={!inputName? "" : "inputfail"} value= { isReady? "": name} onChange={handleName} placeholder="Ingrese su nombre" />
          <label> Ingrese su Email </label>
          <input type="text" className={!inputEmail? "" : "inputfail"} value= { isReady? "": email} onChange={handleEmail} placeholder="Ingrese su email" />
          <label> Ingrese su contraseña </label>
          <input type="password" className={!inputPassw? "" : "inputfail"}  value= { isReady? "": passw} onChange={handlePassw} placeholder="Ingrese su contraseña" />
          <input type="submit" />
        </form>

      </div>
  )
}


export default Registrar;
