import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useContext } from 'react';
import {Mycontext} from "../store/store";
import {handlelogin,handlelogout} from "../actions/AuthActions"

const Header = () => {

    let {user,isAuthenticated,isLoading,error,loginWithRedirect,logout,loginWithPopup} = useAuth0()
    const {state,dispatch} = useContext(Mycontext)
  
   


  return(<>
  {!isAuthenticated && <button  onClick={()=>handlelogin(dispatch,loginWithPopup)} >log in</button>}
  {isAuthenticated && <button onClick={()=>handlelogout(dispatch,logout)}>log out</button>}

  
  </>
  )
}

export default Header


