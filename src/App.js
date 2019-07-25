import React, { useState, useContext} from 'react';
import './App.css';
import Nav from './Nav';
import Login from './Login';
import Registrar from './Registrar';
import Home from './Home';
import AuthContext from './context/AuthContext';
import Redirigido from './context/Redirigido';
import Protected from './Protected';
import ProtectedTwo from './ProtectedTwo';
import { Router,
   Switch,
   Route,
   Redirect
  } from 'react-router-dom';
import history from './History';



function App(props) {
  const [redirecto, setRedirecto] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  const changeAuth = () =>{
    setIsAuth(true);
    history.push('/protected', { some: 'state' });

  }
  const noAuth = () => {
    setIsAuth(false);
  }
  const changeRedir = () =>{
    setRedirecto(false);
  }


  const PrivateRoute = ({component: Component, ...rest}) => {
    return (<Route {...rest} render={(props) => {
      if(isAuth){
        setRedirecto(false);
        return <Component {...props} />;
      }else{
        setRedirecto(true);
        return <Redirect to='/login' />;
      }

    }}
      />
    )
  }


  return (
    <Router history={history}>

    <div className="approot">
      <Nav changeRedir={changeRedir} />
      <section className='secDiv'>
      <Switch >
        <AuthContext.Provider value={isAuth}>
        <Route path='/' exact component={Home} />
        <Redirigido.Provider value={redirecto}>
        <Route path='/login' render={(props)=><Login changeAuth={changeAuth} />}/>
        </Redirigido.Provider>
        <Route path='/registrar' exact component={Registrar}/>
        <PrivateRoute path='/protected' component={Protected} />

      </AuthContext.Provider>
        </Switch>
        <a href='https://danibroeders.web.app/app' target='new_blank' className='footer'> creado por Broeders </a>
      </section>
    </div>
    <button className='desloguear' onClick={noAuth}> Desloguear </button>
    </Router>
  );
}

export default App;
