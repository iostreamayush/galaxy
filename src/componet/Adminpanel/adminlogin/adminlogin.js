
import React, { useState } from "react";
import "./Login.css"; // Import your CSS styles
import { useNavigate } from "react-router-dom";

function Login() {

  const [email,seteamil]=useState("");
  const [password,setpassword]=useState("");
  const jump=useNavigate();

  const fun1=(e)=>{
    seteamil(e.target.value);
  }
  const fun2=(e)=>{
    setpassword(e.target.value);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    //  login logic here (e.g., API calls, validation, etc.)

  

    console.log("Form submitted!");
  };
  const login=async()=>{
    if(email===""){
      alert("Enter your email");
    }

    else if(password==="") {
      alert("Enter your password");

    }

    else{
      const re=await fetch("http://127.0.0.1:4001/adminlogin",{
        method:"POST",
        headers:{"Content-Type":"Application/json"},
        body:JSON.stringify({email:email,pws:password})
      })
      const data=await re.json();
      if(data.msg==="valid user"){
        jump("/category")
      }
      else{
        alert("invalid")

      }
    }
      

  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input className="form-control" type="email" placeholder="enter your email..."  onChange={fun1} />
        <input className="form-control" style={{width:"20rem"}} type="password" placeholder="enter your Password...."  onChange={fun2}/>
        <button onClick={login} type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
