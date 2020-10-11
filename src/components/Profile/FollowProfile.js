import React, { Component, useState } from "react";
import { connect } from "react-redux";

const FollowProfile = props => {
  const [value, setState] = useState(props.profile.following);
  const classesUpdated = value ? 'btn__unfollow' : 'btn__follow';
  const clasess = ['btn', 'btn__tertiary', classesUpdated];
  const follow = value ? 'Unfollow' : 'Follow'
  return(
    <button className={clasess.join(' ')} onClick={() => setState(!value)}>{follow}</button>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {};

export default connect(mapStateToProps, mapDispatchToProps)(FollowProfile);
