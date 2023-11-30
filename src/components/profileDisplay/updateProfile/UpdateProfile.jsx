import React, { useState } from "react";

function UpdateProfile() {
  const [profile, setProfile] = useState("");

  const [response, setResponse] = useState("");

  const handleInputChange = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:4000/profile/:username", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ profile }),
      });

      const data = await response.json();
      setResponse(data.profile);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="update-profile">
      <form onSubmit={handleSubmit}>
        <input type="text" value={profile} onChange={handleInputChange} />
        <button type="submit">Update Profile</button>
      </form>
      {response && <p>{response}</p>}
    </div>
  );
}

export default UpdateProfile;