import React from "react";
import FollowProfile from "./FollowProfile";
import { Link } from "react-router-dom";

const ProfilePreview = props => {
  return (
    <div className="profile__preview">
      <div className="profile__preview--container">
        <Link
          to={"/" + props.profile.username}
          className="profile__preview--img"
        >
          <img
            src={props.profile.profileImage}
            alt={props.profile.username}
            className="profile__preview--img--img"
          />
        </Link>
        <Link
          to={"/" + props.profile.username}
          className="profile__preview--body"
        >
          <h4 className="profile__preview--title">{props.profile.username}</h4>
          <p className="profile__preview--text">{props.profile.bio}</p>
        </Link>
        <div className="profile__preview--type">
          <div className="profile__preview--type--container">
            <p className="profile__preview--button">Pro</p>
            <FollowProfile
              profile={props.profile}
              currentUser={props.currentUser}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePreview;
