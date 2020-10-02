import React, { Component } from "react";
import { connect } from "react-redux";
import {
  FOLLOW_USER,
  UNFOLLOW_USER,
  PROFILE_FOLLOWING_PAGE_LOADED,
  PROFILE_FOLLOWING_PAGE_UNLOADED
} from "../../constants/actionTypes";
import { ProfileOptions } from "./Profile";
import { ProfileUser } from "./ProfileUser";
import { ProfileNavigation } from "./ProfileNavigation";
import ProfileList from "./ProfileList";

class ProfileFollowing extends Component {
  render() {
    return (
      <div className="profile">
        <div className="container profile__container">
          <ProfileNavigation />
          <div className="profile__body profile__profiles--body">
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
              <ProfileList title={'Following'} profiles={this.props.followings} />
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
  onLoad: payload => dispatch({ type: PROFILE_FOLLOWING_PAGE_LOADED, payload }),
  onUnload: () => dispatch({ type: PROFILE_FOLLOWING_PAGE_UNLOADED }),
  onFollow: username => dispatch({ type: FOLLOW_USER, username }),
  onUnFollow: username => dispatch({ type: UNFOLLOW_USER, username })
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileFollowing);
