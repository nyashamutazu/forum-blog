import React, { Component } from "react";
import { connect } from "react-redux";

const FollowProfile = props => {
  const classesUpdated = props.profile.following ? 'btn__unfollow' : 'btn__follow';
  const clasess = ['btn', 'btn__tertiary', classesUpdated];
  const follow = props.profile.following ? 'Unfollow' : 'Follow'
  return(
    <button className={clasess.join(' ')}>{follow}</button>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {};

export default connect(mapStateToProps, mapDispatchToProps)(FollowProfile);
