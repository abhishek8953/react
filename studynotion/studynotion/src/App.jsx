
import React from "react";
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";


export default function App(){
  return(
    <>
    <div className=" ">
      <BrowserRouter>
      <ul className="flex gap-5 py-2 bg-green-400 ">
        <li className="hover:bg-emerald-600 rounded-full px-2"><Link to='login'>Login </Link> </li>
        <li className="hover:bg-emerald-600 rounded-full px-2"><Link to='/'>Home </Link> </li>
        <li className="hover:bg-emerald-600 rounded-full px-2"><Link to='signup'>Signup </Link> </li>
        <li className="hover:bg-emerald-600 rounded-full px-2"><Link to='dashboard'>Dashboard </Link> </li>
       
        
      </ul>
      
      <Routes>
        <Route index path="/" element={<Home/>}/>
        <Route path="/login"  element={<Login/>}/>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/dashboard" element={<Dashboard/>} />



      </Routes>
      
      
      
      </BrowserRouter>
    </div>
    </>
  );
}