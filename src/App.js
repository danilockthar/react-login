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

  const [isAuth, setIsAuth] = useState(false);

  const PrivateRoute = ({component: Component, ...rest}) => {
    return (<Route {...rest} render={(props) => (
      isAuth
      ? <Component {...props} />
      : <Redirect to='/login' />
    )}


      />
    )
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
      
        </AuthContext.Provider>
        </Switch>


    </div>

    </Router>
  );
}

export default App;
