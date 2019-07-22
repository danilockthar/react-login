import React, {useContext} from 'react';
import AuthContext from './context/AuthContext';

function Protected() {
  const context = useContext(AuthContext);
  return (
    <div className="protected">
        <h3> Protected </h3>
        {context? <h1> yes </h1> : <h1> no </h1>}
    </div>
  )
}


export default Protected;
