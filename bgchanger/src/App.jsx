/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'


function App() {
  const [color,setColor]=useState("")
  

  return (
     
  
    <div className=' w-full h-screen duration-150' style={{backgroundColor: color}}>
        
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className=' flex flex-wrap justify-center gap-3 bg-white rounded-3xl px-3 py-2 f bottom-10'>
            <button onClick={()=> setColor("red")}className='px-4 outline-none py-1 rounded-full 'style={{backgroundColor:"red"}}>Red</button>
          </div>
          <div  className='flex flex-wrap justify-center gap-3 bg-white rounded-3xl px-3 py-2 f bottom-10'>
            <button onClick={()=> setColor("green")} className='px-4 outline-none py-1 rounded-full 'style={{backgroundColor:"green"}}>Green</button>
          </div>
          <div className='flex flex-wrap justify-center gap-3 bg-white rounded-3xl px-3 py-2 f bottom-10'>
            <button onClick={()=> setColor("blue")} className='px-4 outline-none py-1 rounded-full 'style={{backgroundColor:"blue"}}>Blue</button>
          </div>
          <div className='flex flex-wrap justify-center gap-3 bg-white rounded-3xl px-3 py-2 f bottom-10'>
            <button onClick={()=> setColor("pink")} className='px-4 outline-none py-1 rounded-full 'style={{backgroundColor:"pink"}}>Pink</button>
          </div>
           <div className='flex flex-wrap justify-center gap-3 bg-white rounded-3xl px-3 py-2 f bottom-10'>
            <button onClick={()=> setColor("#9CFEFE")} className='px-4 outline-none py-1 rounded-full 'style={{backgroundColor:"#9CFEFE"}}>Skyblue</button>
          </div>
           <div className='flex flex-wrap justify-center gap-3 bg-white rounded-3xl px-3 py-2 f bottom-10'>
            <button onClick={()=> setColor("#560000")} className='px-4 outline-none py-1 rounded-full 'style={{backgroundColor:"#560000"}}>Brown</button>
          </div>
           <div className='flex flex-wrap justify-center gap-3 bg-white rounded-3xl px-3 py-2 f bottom-10'>
            <button onClick={()=> setColor("orange")} className='px-4 outline-none py-1 rounded-full 'style={{backgroundColor:"orange"}}>orange</button>
          </div>
          

          
        </div>

            
            
    </div>
  )
}

export default App
