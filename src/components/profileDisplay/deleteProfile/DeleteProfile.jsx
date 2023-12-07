import React, { useState } from "react";
import {Button} from "reactstrap";
//import { getAllProfiles } from "../../../lib/utils";

function DeleteProfile({profile, token, profiles, setProfiles}) {
  const [username, setUsername] = useState("");
  //const [profile, setProfile] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    //let updatedProfiles;

    try {
      let response = await fetch(`http://127.0.0.1:4000/profile/${username}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          Authorization: token,
        },
      });

      const data = await response.json();
      console.log("Profile deleted!:", data);

      //console.log(getAllProfiles);
      const deletedProfile = data.deletedProfile || {};
      console.log("Deleted Profile:", deletedProfile);

      const deletedUsername = deletedProfile.username || null;

      setResponse(deletedUsername);

      console.log("Original Profiles:", profiles);
      console.log("Deleted Username:", deletedUsername);
      
      //getAllProfiles();
      
      // Update profiles after deletion
      const updatedProfiles = profiles.filter(
        (profile) => profile.username !== deletedUsername
        );
        
      console.log("Updated Profiles:", updatedProfiles);
      setProfiles(updatedProfiles);

    } catch (err) {
      console.error("Error deleting profile:", err);
    }
  };

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className="delete-profile">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" value={username} onChange={handleInputChange} />
        <Button color="danger" type="submit"  >Delete Profile</Button>
      </form>
      {response && <p>{response}</p>}
    </div>
  );
}

export default DeleteProfile;