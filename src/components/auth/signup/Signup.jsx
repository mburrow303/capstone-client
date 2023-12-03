import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Signup(props) {
    const navigate = useNavigate('/profile');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [username, setUsername]= useState("");
    const [firstName, setFirstName]= useState("");
    const [lastName, setLastName]= useState("");
    const [bio, setBio]= useState("");
    const [image, setImage]= useState("");


    const signupRoute = 'http://localhost:4000/profile/signup';


  return (
	<div>
		<form>
			<input type="text " placeholder='first name' onChange={(e) => setFirstName(e.target.value)}/>
			<input type="text" placeholder='last name' onChange={(e) => setLastName(e.target.value)}/>
            <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
			<input type="text" placeholder='password' onChange={(e) => setPassword(e.target.value)}  />
			<input type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)} />
            <input type="text" placeholder='bio' onChange={(e) => setBio(e.target.value)} />

            <input type="text" placeholder='image' onChange={(e) => setImage(e.target.value)} />
			<button type='submit' onClick={displayInputFields}>Create Account</button>
            {/* <button onClick={() => navigate('/login')}>Back to Login</button> */}
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
                firstName,
                lastName,
                email,
                password,
                username,
                bio,
                image
            })
        })
            let results = await response.json();
            console.log(results)
            props.setToken(results.token)
            if (response.status === 200) {
                navigate('/profile');
            }
            
            } catch (error) {
                
            }
    }
}


export default Signup;