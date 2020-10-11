import React from "react";
import ProfilePreview from "./ProfilePreview";
import Spinner from "../UI/Spinner";


const ProfileList = props => {
  if (!props.profiles) {
    return <Spinner />;
  }

  return (
    <div>
      <ol className="profile__list--container">
        <h2 className="heading__secondary">{props.title}</h2>
        {props.profiles.map(profile => {
          return <ProfilePreview profile={profile} />;
        })}
      </ol>
    </div>
  );
};

export default ProfileList;
