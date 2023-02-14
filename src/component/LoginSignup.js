import React from 'react'
import { useState } from 'react';

function LoginSignup() {
    const [mail , setmail] = useState("");
    const [pass , setpass] = useState("");
    const setemail = (event) => {
      setmail(event.target.value);
          
    }
    const setpassword = (event) => {
      setpass(event.target.value);
      
    }
    const getrequest = ()=>{
      //Axios.get request(no URL) , after authentication send to home page
    }
    const postrequest = ()=>{
      //Axios.post email and password (no URL) 
    }
    
  
  return(
   <>
   <div className="main1">
      
      <div className="box1">
          
   
        <div className="form">
          <p className="t">LOGIN / SIGNUP</p>
        <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" onChange={setemail} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" onChange={setpassword} class="form-control" id="exampleInputPassword1"/>
    </div>
    
    <div className="twobut">
    <button type="submit" class="btn btn-primary" onClick={getrequest}>Login</button>
    <button type="submit" class="btn btn-primary" onClick={postrequest}>SignUp</button>
    </div>
  </form>
  
  
       
        </div>
          
          
      </div>
  </div>
  </>
  )
}

export default LoginSignup
