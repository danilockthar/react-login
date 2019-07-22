import React, { useState, createContext, useContext} from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Login from './Login';
import Registrar from './Registrar';
import Home from './Home';
import Protected from './Protected';
import { BrowserRouter as Router,
   Switch,
   Route,
   Redirect
  } from 'react-router-dom';

function App() {

  const PrivateRoute = ({component: Component, ...rest}) => {
    return (<Route {...rest} render={(props) => (
      isAuth
      ? <Component {...props} />
      : <Redirect to='/login' />
    )}


      />
    )
  }

  const AuthContext = createContext(null);
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Router>
    <AuthContext.Provider value={isAuth}>
    <div className="App">
      <Nav />
      <Switch>

        <Route path='/' exact component={Home}/>
        <Route path='/login' exact component={Login}/>
        <Route path='/registrar' exact component={Registrar}/>
        <PrivateRoute path='/protected' component={Protected} />

        </Switch>

    </div>
    </AuthContext.Provider>
    </Router>
  );
}

export default App;
