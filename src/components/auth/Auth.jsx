// this component will be responsible for BOTH signup and login, which will be next to each other side by side
import Signup from './signup/Signup';
import Login from './login/Login';
//import { useState } from "react";

function Auth(props) {
  return (
    <>
      <div style={{ width: '48%', display: 'inline-block' }}>
        <h2>Login</h2>
        {/* place the login component here */}
        <Login setToken={props.setToken} />
      </div>
      <div style={{ width: '48%', display: 'inline-block' }}>
        {/* Signup Component */}
        <h2>Signup</h2>
        <Signup setToken={props.setToken} />
      </div>
    </>
  )
}

export default Auth;