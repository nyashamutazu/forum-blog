import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as FacebookSvg } from "../../assets/social-media/facebook.svg";
import { ReactComponent as InstagramSvg } from "../../assets/social-media/instagram.svg";
import { ReactComponent as LinkedInSvg } from "../../assets/social-media/linkedin.svg";
import { ReactComponent as TwitterSvg } from "../../assets/social-media/twitter.svg";

export const ArticleFooter = props => {
  const style = {
    background: "rgb(2,0,36)",
    background: `linear-gradient(180deg, rgba(2,0,36,0) 0%, rgba(0,0,0,.6) 100%), url('${props.article.author.profileImage}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "flex-end",
    padding: "20px 30px",
    flex: "0 0 300px"
  };

  const navigateTo = url => {
    window.location = `https://${url}`;
    alert(url);
    return;
  };

  return (
    <div className="article__footer container">
      <div className="article__footer--container">
        <Link to={'/' + props.article.author.username } className="article__footer--user--img" style={style}>
          <div className="article__footer--user--details">
            <div className="article__footer--user--bio">
              <p className="article__footer--title article__footer--light">
                {props.article.author.username}
              </p>
              <p className="article__footer--text article__footer--light">
                {props.article.author.bio}
              </p>
            </div>
            <div className="article__footer--user--verified">
              <p>PRO</p>
            </div>
          </div>
        </Link>
        <div className="article__footer--body">
          <div className="article__footer--body--head">
            <Link
              to={"/" + props.article.author.username + "/following"}
              className="article__footer--body--container"
            >
              <p className="article__footer--title">
                {props.article.author.followings}
              </p>
              <p className="article__footer--text">Following</p>
            </Link>
            <Link
              to={"/" + props.article.author.username + "/followers"}
              className="article__footer--body--container"
            >
              <p className="article__footer--title">
                {props.article.author.followers}
              </p>
              <p className="article__footer--text">Followers</p>
            </Link>
            <Link
              to={"/" + props.article.author.username}
              className="article__footer--body--container"
            >
              <p className="article__footer--title">
                {props.article.author.articleCount}
              </p>
              <p className="article__footer--text">Articles</p>
            </Link>
          </div>
          <div className="article__footer--body--content">
            <div className="article__footer--body--link"
              onClick={() => navigateTo(props.article.author.social.facebook)}
            >
              <FacebookSvg className="article__footer--icon" />
              <a className="article__footer--link">
                {props.article.author.social.facebook}
              </a>
            </div>
            <div  className="article__footer--body--link"
              onClick={() => navigateTo(props.article.author.social.instagram)}
            >
              <InstagramSvg className="article__footer--icon" />
              <a className="article__footer--link">
                {props.article.author.social.instagram}
              </a>
            </div>
            <div  className="article__footer--body--link"
              onClick={() => navigateTo(props.article.author.social.twitter)}
            >
              <TwitterSvg className="article__footer--icon" />
              <a className="article__footer--link">
                {props.article.author.social.twitter}
              </a>
            </div>
            <div  className="article__footer--body--link"
              onClick={() => navigateTo(props.article.author.social.linkedIn)}
            >
              <LinkedInSvg className="article__footer--icon" />
              <a className="article__footer--link">
                {props.article.author.social.linkedIn}
              </a>
            </div>
          </div>
          <div className="article__footer--body--footer"></div>
        </div>
      </div>
    </div>
  );
};
