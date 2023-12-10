import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import { getAllProfiles } from "../../lib/utils";
import ProfileDisplay from "../profileDisplay/ProfileDisplay";

function ProfileIndex({ token }) {
  const [profiles, setProfiles] = React.useState([]);

  React.useEffect(() => {
    async function runEffect() {
      const allProfiles = await getAllProfiles(token);
      setProfiles(allProfiles);
    }
    runEffect();
  }, [token]);

  return (
    <div>
      <Card className="my-2" style={{ width: "18rem" }}>
        <CardHeader>
          <h2>User Profiles</h2>
        </CardHeader>
        <CardBody style={{ maxHeight: "300px", overflowY: "auto" }}>
          {profiles.map((profile) => (
            <ul key={profile.username}>{profile.username}</ul>
          ))}
        </CardBody>
        <ProfileDisplay
          token={token}
          profiles={profiles}
          setProfiles={setProfiles}
        />
      </Card>
    </div>
  );
}

export default ProfileIndex;