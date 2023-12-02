import React, { useState } from "react";

function DeleteProfile() {
  const [profile, setProfile] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response = await fetch("http://127.0.0.1:4000/profile/:username", {
        method: "DELETE",
      });

      const data = await response.json();
      setResponse(data.profile);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const handleInputChange = (e) => {
    setProfile(e.target.value);
  };

  return (
    <div className="delete-profile">
      <form onSubmit={handleSubmit}>
        <input type="text" value={profile} onChange={handleInputChange} />
        <button type="submit">Delete Profile</button>
      </form>
      {response && <p>{response}</p>}
    </div>
  );
}

export default DeleteProfile;