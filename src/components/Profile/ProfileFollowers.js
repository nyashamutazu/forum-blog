import React, { Component } from "react";
import { connect } from "react-redux";
import ProfileNavigation from "./ProfileNavigation";
import { ProfileUser } from "./ProfileUser";

import { ProfileOptions } from "./Profile";
import {
  FOLLOW_USER,
  UNFOLLOW_USER,
  PROFILE_FOLLOWERS_PAGE_LOADED,
  PROFILE_FOLLOWERS_PAGE_UNLOADED
} from "../../constants/actionTypes";
import ProfileList from "./ProfileList";

class ProfileFollowers extends Component {
  componentDidMount() {
    console.log(this.props.profile);
    console.log("--------");
    console.log(this.props.currentUser);
  }
  render() {
    return (
      <div className="profile">
          <ProfileNavigation currentUser={this.props.currentUser} profile={this.props.profile} />
        <div className="container profile__container">
          <div className="profile__body">
            <div className="profile__body--container">
              <ProfileUser profile={this.props.profile} />
              <div className="profile__options">
                <ProfileOptions
                  profile={this.props.profile}
                  currentUser={this.props.currentUser}
                />
              </div>
            </div>
            <div className="profile__posts">
              <ProfileList title={'Followers'} profiles={this.props.followers} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.articleList,
  ...state.profile,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: PROFILE_FOLLOWERS_PAGE_LOADED, payload }),
  onUnload: () => dispatch({ type: PROFILE_FOLLOWERS_PAGE_UNLOADED }),
  onFollow: username => dispatch({ type: FOLLOW_USER, username }),
  onUnFollow: username => dispatch({ type: UNFOLLOW_USER, username })
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileFollowers);
