import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Button} from "reactstrap";

function UpdateProfile() {
  //const [profile, setProfile] = useState("");
  const navigate = useNavigate();
  const [token, setToken] = useState("")
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState("");

  const [response, setResponse] = useState("");

  useEffect(() => {
    // Retrieve the token from local storage when the component mounts
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://127.0.0.1:4000/profile/${username}`, {
        headers: new Headers ({
          "Content-Type": "application/json",
          "Authorization": `${token}`,
        }),
        method: "PATCH",
        body: JSON.stringify({
           firstName: firstName,
           lastName: lastName,
           email: email,
           password: password,
           username: username,
           bio: bio,
           image: image
           }),
      });

      const data = await response.json();
      setResponse(data.username);
      console.log("Profile Updated!:", data);
    } catch (err) {
      console.error("Error:", err);
      console.log("Response:", await err.response.json());
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  switch (name) {
    case "firstName":
      setFirstName(value);
      break;
    case "lastName":
      setLastName(value);
      break;
    case "email":
      setEmail(value);
      break;
    case "password":
      setPassword(value);
      break;
    case "username":
      setUsername(value);
      break;
    case "bio":
      setBio(value);
      break;
    case "image":
      setImage(value);
      break;        
    default:
      break;
   }
  };

  return (
    <div className="update-profile">
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="first name" value={firstName || ''}onChange={handleInputChange} />
        <input type="text" name="lastName" placeholder="last name" value={lastName || ''} onChange={handleInputChange} />
        <input type="text" name="email" placeholder="email" value={email || ''} onChange={handleInputChange} />
        <input type="password" name="password" placeholder="password" value={password || ''} onChange={handleInputChange} />
        <input type="text" name="username" placeholder="username" value={username || ''}onChange={handleInputChange} />
        <input type="text" name="bio" placeholder="bio" value={bio || ''} onChange={handleInputChange} />
        <input type="text" name="image" placeholder="image" value={image || ''}onChange={handleInputChange} />

        <Button type="button" onClick={handleSubmit}>Update Profile</Button>
      </form>
      {response && <p>{response}</p>}
    </div>
  );
}

export default UpdateProfile;