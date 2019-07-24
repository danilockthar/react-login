import React, {useContext} from 'react';
import AuthContext from './context/AuthContext';

function ProtectedTwo() {
  const context = useContext(AuthContext);
  return (
    <div className="protectedtwo">
        <h3> Protected </h3>
        {context? <h1> yes </h1> : <h1> no </h1>}
        <h1> ruta protegida n° 2 </h1>
    </div>
  )
}


export default ProtectedTwo;
