import React, { useState, useContext} from 'react';
import './App.css';
import Nav from './Nav';
import Login from './Login';
import Registrar from './Registrar';
import Home from './Home';
import AuthContext from './context/AuthContext';
import Protected from './Protected';
import { BrowserRouter as Router,
   Switch,
   Route,
   Redirect
  } from 'react-router-dom';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [passw, setPassw] = useState('');
  const [isAuth, setIsAuth] = useState(false);
  const [myval, setMyval] = useState("sisi");
  const PrivateRoute = ({component: Component, ...rest}) => {
    return (<Route {...rest} render={(props) => (
      isAuth
      ? <Component {...props} />
      : <Redirect to='/login' />
    )}


      />
    )
  }
  const Good = () =>{
    return  <h1> context </h1>;
  }

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

  return (
    <Router>

    <div className="App">
      <Nav />
      <Switch>
        <AuthContext.Provider value={"sisi"}>
        <Route path='/' exact component={Home}/>
        <Route path='/login' exact component={Login}/>
        <Route path='/registrar' exact component={Registrar}/>
        <PrivateRoute path='/protected' component={Protected} />
        <Good />
        </AuthContext.Provider>
        </Switch>


    </div>

    </Router>
  );
}

export default App;
