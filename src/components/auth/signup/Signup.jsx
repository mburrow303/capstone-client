import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Signup(props) {
    const navigate = useNavigate('/profile');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [username, setUsername]= useState("");

    const signupRoute = 'http://localhost:4000/profile/signup';


  return (
	<div>
		<form>
			{/* <input type="text " placeholder='first' onChange={(e) => setFirst(e.target.value)}/>
			<input type="text" placeholder='last' onChange={(e) => setLast(e.target.value)}/> */}
			<input type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)} />
            <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
			<input type="text" placeholder='password' onChange={(e) => setPassword(e.target.value)}  />
			<button type='submit' onClick={displayInputFields}>Submit</button>
            <button onClick={() => navigate('/login')}>Back to Login</button>
		</form>
	</div>
  )
  async function displayInputFields(e) {
     e.preventDefault();

     console.log('testing this function')
     console.log(email)

     try {
        let response = await fetch(signupRoute, {
            headers: new Headers({
                'content-type': 'application/json',
            }),
            method: 'POST',
            body:JSON.stringify ({
                username,
                email,
                password,
        

                
            })
        })
            let results = await response.json();
            console.log(results)
            props.setToken(results.token)
            if (response.status === 200) {
                navigate('/chat');
            }
            
            } catch (error) {
                
            }
    }
}


export default Signup;