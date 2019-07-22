import {createContext} from 'react';

const authState = createContext({isLoggedIn : false});

export default authState;
