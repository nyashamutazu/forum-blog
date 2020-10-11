import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const ProfileNavigation = props => {
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    console.log("Last ", currentPath);
    console.log("Location", location.pathname);
  }, []);

  return (
    <div className="tag__toggle">
      <ul className="tag__list tag__active">
        <NavLink
          to={"/" + props.profile.username}
          text={props.profile.username}
          path={currentPath}
        />
        <NavLink
          to={"/" + props.profile.username + "/followers"}
          text={"Followers"}
          path={currentPath}
        />
        <NavLink
          to={"/" + props.profile.username + "/following"}
          text={"Following"}
          path={currentPath}
        />{" "}
        <NavLink
          to={"/" + props.profile.username + "/liked"}
          text={"Liked Articles"}
          path={currentPath}
        />
        <NavLink
          to={"/" + props.profile.username + "/read-later"}
          text={"Read Later"}
          path={currentPath}
        />
        <NavLink
          to={"/" + props.profile.username + "/lists"}
          text={"Lists"}
          path={currentPath}
        />
      </ul>
    </div>
  );
};

const NavLink = props => {
  const active = props.to === props.path ? "active" : null;
  return (
    <li className={["tag__item", active].join(" ")}>
      <Link className="tag__link" to={props.to}>
        {props.text}
      </Link>
    </li>
  );
};

export default ProfileNavigation;
