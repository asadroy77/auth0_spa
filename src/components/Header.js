import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useContext } from 'react';
import {Mycontext} from "../store/store";
import {handlelogin,handlelogout} from "../actions/AuthActions"
import { Link } from 'react-router-dom';

const Header = () => {

    let {user,isAuthenticated,isLoading,error,loginWithRedirect,logout,loginWithPopup} = useAuth0()
    const {state,dispatch} = useContext(Mycontext)
    // console.log(state)
  
   


  return(<>
  <div style={{height:"70px"}}></div>
  {!isAuthenticated && <button  onClick={()=>handlelogin(dispatch,loginWithPopup)} >log in</button>}
  {isAuthenticated && <button onClick={()=>handlelogout(dispatch,logout)}>log out</button>}
  {isAuthenticated && <button > <Link to={"/profile"}>profile</Link></button>}
  <button > <Link to={"/gallery"}>gallery</Link></button>
  <button > <Link to={"/dashboard"}>dashboard</Link></button>
  <button > <Link to={"/allusers"}>allusers</Link></button>
  
  




  
  </>
  )
}

export default Header


