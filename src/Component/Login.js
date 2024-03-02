import React ,{useState} from "react";
import './App.css'

function Login(){
    const [username,setusername]=useState({
        username: " "
      })
      const [Email,setemail]=useState({
        Email: " "
      })
      const [Phno,setphno]=useState({
        Phno: " "
      })
      const handelChange =(event)=>{
      setusername(event.target.value)
      setemail(event.target.value)
      setphno(event.target.value)


     }
    
      
   
     const formSubmit =(event) =>{
        event.preventDefault();
        console.log(`username:${username}`)
        console.log(`Email :${Email}`)
        console.log(`Phone Number :${Phno}`)


       
       
     }
    
    return(
        <>
        <div>
           <form className="login-form" action="submit" onSubmit={formSubmit}>
            <label className="logname">Name:</label>
            <input type="text" placeholder="Enter Your Name" onChange={handelChange}/>
            <lable className="logname">Email:</lable>
            <input type='email' placeholder="Enter Your Gmail@" onChange={handelChange} required={true}/>
            <label className="logname">Ph No:</label>
            <input type="Number" placeholder="Enter your ph Number" onChange={handelChange}/>
            <button type="submit" onSubmit={reset}>Login</button>
            <button type="reset">reset</button>
           </form>
        </div>

        </>
    )
}
export default Login