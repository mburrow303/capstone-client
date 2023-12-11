import Signup from "./signup/Signup";
import Login from "./login/Login";
import "./Auth.css";
//import { useState } from "react";

function handleClick(){
  document.getElementById("login").style.display = "none";
  document.getElementById("signup").style.display = "inline-block";
  document.getElementById("toggle").style.display = "none";
  document.getElementById("no_account").style.display = "none";
  document.getElementById("back_to_login").style.display = "block";
}

function backToLogin(){
  document.getElementById("signup").style.display = "none";
  document.getElementById("login").style.display = "inline-block";
  document.getElementById("back_to_login").style.display = "none";
  document.getElementById("no_account").style.display = "block";
  document.getElementById("toggle").style.display = "inline-block";
  //document.getElementById("no_account").style.display = "none";
}

function Auth(props) {
  return (
    <>
      <div id="login" style={{ width: "48%", display: "inline-block" }}>
        {/* Login Component */}
        <h2>Login</h2>
        <Login setToken={props.setToken} />
      </div>

      <div>
        <p id="no_account">Don't have an account?</p>
        <button id="toggle" onClick={() => handleClick()}>Sign Up</button>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div id="signup" style={{ width: "48%", display: "inline-block" }}>
        {/* Signup Component */}
        <h2>Signup</h2>
        <Signup setToken={props.setToken} />
      </div>
      <div id="back_to_login" style={{display:"none"}}><p>Already have an account?</p>
      <button  onClick={() => backToLogin()}>Log in</button>
      </div>
    </>
  );
}

export default Auth;
