import React from "react";
import Comment from "./Comment";

const CommentList = props => {
  return (
    <div>
      {props.comments.map(comment => {
        return <Comment key={comment.id} slug={props.slug} comment={comment} currentUser={props.currentUser} />;
      })}
    </div>
  );
};

export default CommentList;
