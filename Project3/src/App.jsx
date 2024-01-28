import { useState } from 'react'
import Card from "./Component/Card"

import './App.css'

function App() {
  let myArr={
    Name:"abhishek",
    Age:34
  };     
  
  return (
    <>
      <h1 className="bg-green-500 p-3 text-black rounded-2xl">Hello</h1>
      <div className="flex m-4 gap-4">
      <Card userName="Abhishek tiwari" btnText="visit me" />  
      <Card userName="ram" btnText="visit me"/>
      </div>
      
    </>
  )
}

export default App
