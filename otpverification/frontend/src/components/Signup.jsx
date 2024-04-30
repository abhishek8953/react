import { useState } from "react";


function Signup(){

    const [email,setEmail] =useState()
    return(
        <>
         <h1 className="center"> SIGNUP</h1>
        <div className="outcard">
            
          Email <input  type="email" className="inputs"/>
          <br /> <br />
          Password <input className="inputs" type="password"/><br />
          <button className="btns" >Submit</button>

        </div>
        </>
       
    
    )
}

export default Signup;