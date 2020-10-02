import React, { Component } from "react";
import { connect } from "react-redux";
import { ProfileUser } from "./ProfileUser";
import ArticleList from "../ArticleList";
import {
  FOLLOW_USER,
  UNFOLLOW_USER,
  PROFILE_PAGE_LOADED,
  PROFILE_PAGE_UNLOADED
} from "../../constants/actionTypes";
import { ProfileNavigation } from "./ProfileNavigation";
import { ProfileSubNavigation } from "./ProfileSubNavigation";
import ProfilePreview from "./ProfilePreview";
import ProfileList from "./ProfileList";
import { Link } from "react-router-dom";

class Profile extends Component {
  componentDidMount() {
    console.log(this.props.profile);
  }

  componentDidUpdate(prevProps, prevState) {}
  render() {
    return (
      <div className="profile">
        <div className="container profile__container">
          <ProfileNavigation />
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
              <ArticleList
                currentUser={this.props.currentUser}
                profile={this.props.profile}
                pager={this.props.pager}
                articles={this.props.articles}
                loading={this.props.loading}
                articlesCount={this.props.articlesCount}
                currentPage={this.props.currentPage}
              />
              <ProfileList
                title={"Suggested"}
                profiles={this.props.suggested}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export const ProfileOptions = props => {
  return props.currentUser.username === props.profile.username ? (
    <div className="profile__options--container">
      <Link to={"/" + props.profile.username + "/liked"}>
        <div className="profile__options--body">Liked Articles</div>
      </Link>
      <Link to={"/" + props.profile.username + "/read-later"}>
        <div className="profile__options--body">Read Later</div>
      </Link>
      <Link to={"/" + props.profile.username + "/lists"}>
        <div className="profile__options--body">Lists</div>
      </Link>
      <Link to={"/" + props.profile.username + "/archived"}>
        <div className="profile__options--body">Archived</div>
      </Link>
    </div>
  ) : null;
};

export const EditProfileSettings = props => {
  return props.isUser ? (
    <Link to="/settings" className="btn btn__third">
      Edit Prfile
    </Link>
  ) : null;
};

export const FollowProfileButton = props => {
  if (props.isUser) {
    return null;
  }

  const addedClass = props.user.following
    ? "btn__third"
    : "btn__third--outline";

  const classes = ["btn", "btn__small", addedClass];

  const handleClick = ev => {
    ev.preventDefault();

    props.user.following
      ? props.unfollow(props.user.username)
      : props.follow(props.user.username);
  };

  return (
    <button className={classes.join(" ")} onClick={handleClick}>
      {props.user.following ? "Unfollow" : "Follow"}
    </button>
  );
};

const mapStateToProps = state => ({
  ...state.articleList,
  ...state.profile,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: PROFILE_PAGE_LOADED, payload }),
  onUnload: () => dispatch({ type: PROFILE_PAGE_UNLOADED }),
  onFollow: username => dispatch({ type: FOLLOW_USER, username }),
  onUnFollow: username => dispatch({ type: UNFOLLOW_USER, username })
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
