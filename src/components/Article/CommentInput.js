import React, { Component, useState } from "react";
import { connect } from "react-redux";
import ArticleMeta from "./ArticleMeta";
import { ADD_COMMENT } from "../../constants/actionTypes";
import agent from "../../agent";

class CommentInput extends Component {
  render() {
    return (
      <div className="comment__input">
        <CurrentUserCommentInput currentUser={this.props.currentUser} />
        <InputCommentInput
          createComment={this.props.onSubmit}
          slug={this.props.slug}
        />
      </div>
    );
  }
}

const CurrentUserCommentInput = props => {
  return (
    <div className="comment__input--head">
      <div className="comment__input--user">
        <img
          className="comment__input--user--img"
          src={props.currentUser.profileImage}
          alt="user image"
        />
        <div className="comment__input--user--details">
          <p className="comment__input--user--title">
            {props.currentUser.username}
          </p>
          <p className="comment__input--user--bio">
            {props.currentUser.bio}
          </p>
        </div>
      </div>
    </div>
  );
};

const InputCommentInput = props => {
  const [body, setState] = useState("");

  const createComment = e => {
    e.preventDefault();
    const payload = agent.Comments.create(props.slug, { body });
    setState({ body: "" });
    props.onSubmit(payload);
  };

  return (
    <form onSubmit={createComment} className="comment__input--form">
      <div className="comment__input--controller">
        <textarea
          className="comment__input--input"
          type="text"
          placeholder="Add comment"
          onChange={e => setState(e.target.value)}
        ></textarea>
      </div>
      <div className="comment__input--controller">
        <button className="comment__input--btn" type="submit">
          Post
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  onSubmit: payload => dispatch({ type: ADD_COMMENT, payload })
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentInput);
