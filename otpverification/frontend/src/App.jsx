/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Signup from './components/Signup';
import Home from './components/Home';
import Signin from './components/Signin';


function App() {
 

  return (
    <div>
        
      <Router>
        <Routes>
          <Route path='/signup' element={<Signup/>} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/home' element={<Home/>} />
        </Routes>
      </Router>
    </div>
   
   
  )
}

export default App;
