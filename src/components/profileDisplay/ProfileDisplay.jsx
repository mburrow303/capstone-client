import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllProfiles } from "../../lib/utils";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ProfileDisplay.css";

import DeleteProfile from "./deleteProfile/DeleteProfile";
import UpdateProfile from "./updateProfile/UpdateProfile";

function ProfileDisplay({ token, profiles, setProfiles }) {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  // Fetch the profile based on userId
  useEffect(() => {
    //console.log("Fetching profile for userId:", userId);

    const fetchProfile = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/profile/${userId}`,
          {
            method: "GET",
            headers: {
              Authorization: token,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setProfile(data.found);
        } else {
          const data = await response.json();
          setError(data.error || "Unknown error");
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        setError("Error fetching profile. Please try again.");
      }
    };
    fetchProfile();
  }, [userId, token]);

  return (
    <div>
      {/* Render the DeleteProfile and UpdateProfile components only when the profile is available */}
      {error ? (
        <p>Error: {error}</p>
      ) : (
        profile && (
          <>
            <UpdateProfile
              userId={userId}
              token={token}
              getAllProfiles={getAllProfiles}
            />
            <br></br>
            <br></br>
            <DeleteProfile
              userId={userId}
              profile={profile}
              token={token}
              profiles={profiles}
              setProfiles={setProfiles}
            />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Link to={`/post/${userId}`}>
              <button>Add New Recipe Post</button>
            </Link>
          </>
        )
      )}
    </div>
  );
}

export default ProfileDisplay;