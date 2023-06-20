
export const handlelogin = async(dispatch,loginWithPopup) =>{
    
    try {
      dispatch({type:"loading"})

    await loginWithPopup()
     dispatch({type:"login-success"})
      
    } catch (error) {
      dispatch({type:"error"})
      
    }
  }

 export const handlelogout =async(dispatch,logout)=>{
        try {
          dispatch({type:"logout-loading"})
          await logout()
          dispatch({type:"logout"})
        } catch (error) {
          dispatch({type:"error"})
          
        }
  }