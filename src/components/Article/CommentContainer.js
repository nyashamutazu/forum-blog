import React from "react";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";
import { Link } from "react-router-dom";
import ListErrors from "../ListErrors";

const CommentContainer = props => {
  const commentContainer = props.currentUser ? (
    <CurrentUserComment
      slug={props.slug}
      currentUser={props.currentUser}
      comments={props.comments}
      errors={props.errors}
    />
  ) : (
    <NotCurrentUserComment
      currentUser={props.currentUser}
      comments={props.comments}
      errors={props.errors}
    />
  );

  return (
    <div>
      {commentContainer}
      <CommentList
        comments={props.comments}
        slug={props.slug}
        currentUser={props.currentUser}
      />
    </div>
  );
};

const CurrentUserComment = props => {
  return (
    <div className="comment__container">
      <div className="comment__container--input">
        <ListErrors errors={props.errors} />
        <CommentInput slug={props.slug} currentUser={props.currentUser} />
      </div>
    </div>
  );
};

const NotCurrentUserComment = props => {
  return (
    <div className="comment__container">

      <div className="comment__container--auth">
        <Link className="comment__container--auth--link" to="/sign-up">
          Sign Up
        </Link>
        <Link className="comment__container--auth--link" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default CommentContainer;
