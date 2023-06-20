import './App.css';
import {BrowserRouter as Router , Routes,Route} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Profile from './components/Profile';
import { useContext, useEffect } from 'react';
import {Mycontext} from "./store/store";


function App() {
useEffect(()=>{
console.log("runing")
},[])
   const {state,dispatch} = useContext(Mycontext)
   console.log(state)

  return (<>

<Router>
  <div className="App">
      <Header></Header> 
      <p>sfdsf</p>
  </div>
<Routes>
  <Route path='/' Component={Home}/>
  <Route path='/profile' Component={Profile} />
</Routes>
</Router>
    </>
  );
}

export default App;
