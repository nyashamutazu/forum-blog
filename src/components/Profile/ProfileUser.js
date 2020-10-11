import React from "react";

import { ReactComponent as FacebookSvg } from "../../assets/social-media/facebook.svg";
import { ReactComponent as InstagramSvg } from "../../assets/social-media/instagram.svg";
import { ReactComponent as LinkedInSvg } from "../../assets/social-media/linkedin.svg";
import { ReactComponent as TwitterSvg } from "../../assets/social-media/twitter.svg";

import { Link } from "react-router-dom";

export const ProfileUser = props => {
  const style = {
    background: "rgb(2,0,36)",
    background: `linear-gradient(180deg, rgba(2,0,36,0) 0%, rgba(0,0,0,.6) 100%), url('${props.profile.profileImage}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "flex-end",
    padding: "20px 30px",
    flex: "0 0 300px"
  };

  const navigateTo = url => {
    window.location = `https://${url}`;
    return;
  };

  return (
    <div className="profile__user">
      <div className="profile__user--container">
        <div className="profile__user--user--img" style={style}>
          <div className="profile__user--user--details">
            <div className="profile__user--user--bio">
              <p className="profile__user--title profile__user--light">
                {props.profile.username}
              </p>
              <p className="profile__user--text profile__user--light">
                {props.profile.bio}
              </p>
            </div>
            <div className="profile__user--user--verified">
              <p>{props.profile.type}</p>
            </div>
          </div>
        </div>
        <div className="profile__user--body">
          <div className="profile__user--body--head">
            <Link
              className="profile__user--body--container"
              to={"/" + props.profile.username + "/following"}
            >
              <p className="profile__user--title">{props.profile.followings}</p>
              <p className="profile__user--text">Following</p>
            </Link>
            <Link
              className="profile__user--body--container"
              to={"/" + props.profile.username + "/followers"}
            >
              <p className="profile__user--title">{props.profile.followers}</p>
              <p className="profile__user--text">Followers</p>
            </Link>
            <Link
              className="profile__user--body--container"
              to={"/" + props.profile.username}
            >
              <p className="profile__user--title">
                {props.profile.articleCount}
              </p>
              <p className="profile__user--text">Articles</p>
            </Link>
          </div>
          <div className="profile__user--body--content">
            <div>
              <FacebookSvg className="profile__user--icon" />
              <a
                target="_blank"
                onClick={() => navigateTo(props.profile.social.facebook)}
                className="profile__user--link"
              >
                {props.profile.social.facebook}
              </a>
            </div>
            <div>
              <InstagramSvg className="profile__user--icon" />
              <a
                onClick={() => navigateTo(props.profile.social.instagram)}
                className="profile__user--link"
              >
                {props.profile.social.instagram}
              </a>
            </div>
            <div>
              <TwitterSvg className="profile__user--icon" />
              <a
                onClick={() => navigateTo(props.profile.social.twitter)}
                className="profile__user--link"
              >
                {props.profile.social.twitter}
              </a>
            </div>
            <div>
              <LinkedInSvg className="profile__user--icon" />
              <a
                onClick={() => navigateTo(props.profile.social.linkedIn)}
                className="profile__user--link"
              >
                {props.profile.social.linkedIn}
              </a>
            </div>
          </div>
          <div className="profile__user--body--footer"></div>
        </div>
      </div>
    </div>
  );
};
