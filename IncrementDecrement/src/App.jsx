import { useState } from 'react'

import './App.css'

function App() {
  
  let [count,setcount]= useState(0);

  const Increment=()=>{
    
    if(count<20){
    ++count;
    setcount(count);}
  }

  const Decrement=()=>{
    
    if(count>0){
    count=count-1;
     setcount(count);
    }
  }


  return (
    
     <>
    <h1>Increment and Decrement</h1>
    <h2>Counter: {count}</h2>
     <button onClick={Increment} >Increment</button>
     <br /><br />
     <button onClick={Decrement}>Decrement</button>
     </>
  )
}

export default App
