import React from "react";
import {useNavigate} from "react-router-dom";
import { getAllProfiles } from "../../lib/utils";

//? import Signup instead of AddProfile? or Signup to App.jsx?
//import Signup from "../../components/auth/signup/Signup"
// import AddProfile from "./addProfile/AddProfile";
import DeleteProfile from "./deleteProfile/DeleteProfile";
import UpdateProfile from "./updateProfile/UpdateProfile";

function ProfileDisplay({ token, getAllProfiles }) {
  const navigate = useNavigate();

  return (
    <div>
      {/* <Signup path="/signup" token={token} getAllProfiles={getAllProfiles} /> */}
      {/* <AddProfile path="/signup" token={token} getAllProfiles={getAllProfiles} /> */}
      <DeleteProfile path="/profile/:username" token={token} getAllProfiles={getAllProfiles} />
      <UpdateProfile path="/profile/:username" token={token} getAllProfiles={getAllProfiles} />
    </div>
  );
}

export default ProfileDisplay;