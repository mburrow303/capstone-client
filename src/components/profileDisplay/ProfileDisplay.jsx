import React from "react";
import {useNavigate} from "react-router-dom";

//? import Signup instead of AddProfile
import AddProfile from "./addProfile/AddProfile";
import DeleteProfile from "./deleteProfile/DeleteProfile";
import UpdateProfile from "./updateProfile/UpdateProfile";

function ProfileDisplay({ token, getAllProfiles }) {
  const navigate = useNavigate();

  return (
    <div>
      <AddProfile path="/signup" token={token} getAllProfiles={getAllProfiles} />
      <DeleteProfile path="/profile/:username" token={token} getAllProfiles={getAllProfiles} />
      <UpdateProfile path="/profile/:username" token={token} getAllProfiles={getAllProfiles} />
    </div>
  );
}

export default ProfileDisplay;