import React from "react";
import { connect } from "react-redux";
import agent from "../../agent";
import { DELETE_COMMENT } from "../../constants/actionTypes";

const DeleteButton = props => {
  if (!props.show) {
    return null;
  }

  const del = () => {
    const payload = agent.Comments.delete(props.slug, props.commentId);
    props.onDelete(payload, props.commentId);
  };

  return (
    <div className="delete__button" onClick={del}>
      Delete
    </div>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  onDelete: (payload, commentId) =>
    dispatch({ type: DELETE_COMMENT, payload, commentId })
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton);
