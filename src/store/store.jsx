import React, { createContext } from 'react';
import { useReducer } from 'react';
import { useState } from 'react';
import Authreducer from './authreducer';


export const Mycontext = createContext(null)

const AuthenticationProvider = ({children}) => {

  const[state,dispatch]  =useReducer(Authreducer,{name:"mkasmasd"})

return(<>
    <Mycontext.Provider value={{state,dispatch}}>
     {children}
    </Mycontext.Provider>

    </>
  )
}

export default  AuthenticationProvider;
