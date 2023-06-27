import React from 'react';
import { useContext } from 'react';
import { Mycontext } from '../store/store';
import { Navigate } from 'react-router-dom';


const Protected = ({children}) => {
  const {state,dispatch} = useContext(Mycontext)
  console.log(state )
  let {isAuthenticated} = state
  console.log(isAuthenticated )
 console.log("protected")


 if (!isAuthenticated ){
  return(<Navigate to="/" ></Navigate>)
 }
  return ( children)
}

export default Protected