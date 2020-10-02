/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ARTICLE_LIKED, ARTICLE_UNLIKED } from "../constants/actionTypes";
import agent from "../agent";

import { LikeArticle } from "./Article/LikeArticle";
import ArticleFurther from "./Article/ArticleFurther";

const ArticlePreview = props => {
  const style = {
    background: `url('${props.article.imageUrl}') no-repeat center center`,
    backgroundSize: "cover"
  };

  const userStyle = {
    background: `url('${props.currentUser.profileImage}') no-repeat center center`,
    backgroundSize: "cover",
    height: "35px",
    width: "35px",
    borderRadius: "50%"
  };

  const articlePreviewText =
    props.article.description.split(" ").length > 40
      ? props.article.description
          .split(" ")
          .slice(0, 40)
          .join(" ") + " ..."
      : props.article.description;

  return (
    <li className="article__preview">
      <div class="article__preview--container">
        <Link
          to={"/" + props.article.author.username}
          className="article__preview--head"
        >
          <div className="article__preview--user">
            <img
              className="article__preview--user--img"
              src={props.article.author.profileImage}
              alt="user image"
            />
            <div className="article__preview--user--details">
              <p className="article__preview--user--title">
                {props.article.author.username}
              </p>
              <p className="article__preview--user--bio">
                {props.article.author.bio}
              </p>
            </div>
            <div className="article__preview--created">
              <p className="article__preview--created--date">
                {props.article.createdAt}
              </p>
            </div>
          </div>
        </Link>
        <Link
          to={"/article/" + props.article.slug}
          className="article__preview--body"
        >
          <div className="article__preview--content">
            <div
              className="article__preview--content--image"
              style={style}
            ></div>
            <div className="article__preview--content--body">
              <h3 className="article__preview--content--title">
                {props.article.title}
              </h3>
              <p className="article__preview--content--text">
                {articlePreviewText}
              </p>
            </div>
          </div>
        </Link>
        <div className="article__preview--actions">
          <div className="article__preview--actions--container">
            <LikeArticle article={props.article} />
            <ArticleFurther article={props.article} />
          </div>
        </div>
        <div className="article__preview--footer">
          <div className="article__preview--footer--container">
            <div
              className="article__preview--footer--user--img"
              style={userStyle}
            ></div>
            <Link
              to={"/article/" + props.article.slug + '/#comment'}
              className="article__preview--footer--user--text"
            >
              Add Comment
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  like: slug =>
    dispatch({ type: ARTICLE_LIKED, payload: agent.Articles.like(slug) }),
  unlike: slug =>
    dispatch({ type: ARTICLE_UNLIKED, payload: agent.Articles.unlike(slug) })
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePreview);
