import './App.css';
import {BrowserRouter as Router , Routes,Route} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Profile from './components/Profile';
import { useContext, useEffect } from 'react';
import {Mycontext} from "./store/store";
import Protected from './protected/Protected';

import Dashboard from './components/Dashboard';
import Gallery from "./components/Gallery";
import AllUsers from './components/AllUsers';
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer"

function App() {
useEffect(()=>{
console.log("runing")
},[])
   const {state,dispatch} = useContext(Mycontext)
   let {isAuthenticated} = state
   console.log(state )

  return (<>

<Router>
  <div className="App">
      <Header></Header> 
    <Navbar></Navbar>
  </div>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/gallery' element={<Gallery/>} />

  <Route path="/profile" element={<Protected ><Profile/></Protected>}>  </Route>
  <Route path="/dashboard" element={<Protected ><Dashboard/></Protected>}>  </Route>
  <Route path='/allusers' element={<AllUsers/>} />

</Routes>

<Footer></Footer>
</Router>
    </>
  );
}

export default App;
