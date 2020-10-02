import React from "react";
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";

const Comment = props => {
  const comment = props.comment
  const isAuthor =
    props.currentUser &&
    comment.author.username === props.currentUser.username;
  return (
    <div className="comment__input--comment">
      <div className="comment__input--comment--user">
        <Link to={"/" + comment.author.username}>
          <img
            className="comment__input--comment--user--img"
            src={comment.author.profileImage}
            alt="user image"
          />
        </Link>
        <Link
          to={"/" + comment.author.username}
          className="comment__input--user--details"
        >
          <p className="comment__input--user--title">
            {comment.author.username}
          </p>
          <p className="comment__input--user--bio">{comment.body}</p>
        </Link>
        <div className="comment__input--user--date">
          <p className="comment__input--user--bio">{comment.createAt}</p>
          {isAuthor ? (
            <DeleteButton show={isAuthor} slug={props.slug} commentId={comment.id}/>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Comment;
