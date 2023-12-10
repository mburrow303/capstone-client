import Signup from "./signup/Signup";
import Login from "./login/Login";
//import { useState } from "react";

function Auth(props) {
  return (
    <>
      <div style={{ width: "48%", display: "inline-block" }}>
        {/* Login Component */}
        <h2>Login</h2>
        <Login setToken={props.setToken} />
      </div>
      <div style={{ width: "48%", display: "inline-block" }}>
        {/* Signup Component */}
        <h2>Signup</h2>
        <Signup setToken={props.setToken} />
      </div>
    </>
  );
}

export default Auth;