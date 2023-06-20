function Authreducer(state, action) {
    switch (action.type) {
      case 'loading': {
        return{loading:true}
        
      }
      
      case 'login-success': {
        return{isAuthenticated:true}
        
      }
      case "error":{
            return{error:true}
      }
      case "logout-loading":{
        return {isAuthenticated:true,
        loading:true}
      }
      case "logout":{
        return {isAuthenticated:false}
        
      }
      
  
    }
   
  }

  export default Authreducer ;




