import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({setToken}) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(e) {
    e.preventDefault();
    // console.log(username, password);
    const response = await fetch("http://localhost:4000/profile/login", {
			headers: new Headers({
				'Content-Type': 'application/json'
			}),
			method: 'POST',
			body: JSON.stringify({
				email,
				password
			})
    });

    const results = await response.json();
    console.log(response.status);
    setToken(results.token);
    if (response.status === 200) {
      navigate('/profile');
    }
  
	}

  return (
    <div>
        <form onSubmit={loginUser}>
        <input 
          placeholder="email" 
          onChange={e => setEmail(e.target.value)} 
        />
        <br />
        <input 
          placeholder="password" 
          type="password" 
          onChange={e => setPassword(e.target.value)} 
        />
        <br />
        {/* button:s */}
        <button type="submit">Login to Account</button> 
        {/* <button onClick={() => navigate('/profile')}>create account</button> */}
        {/* end button:s */}
        <br />
      </form>

    </div>
  );
}

export default Login; 