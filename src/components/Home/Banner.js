import React from "react";
import Button from "../UI/Button";
import {Link} from 'react-router-dom';

const Banner = ({ appName, token }) => {
  return (
    <div className="container">
      <div className="banner">
        <h1 className="banner__heading">{appName}</h1>
        <p className="banner__text">
          Our community is a growing and leading destinantion to find and
          showcase your creative publication and work
        </p>
        <Link to="/sign-up" className="btn btn__primary--center">
          Join Our Growing Community
        </Link>
      </div>
    </div>
  );
};

export default Banner;
