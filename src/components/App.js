import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.css";

import Header from "./Header";
import { APP_LOAD, REDIRECT } from "../constants/actionTypes";
import { store } from "../store";
import agent from "../agent";
import Home from "./Home/Home";
import Login from "./Login";
import SignUp from "./SignUp";
import Editor  from "./Editor";
import Article from "./Article/Article";
// import { Settings } from "./Settings";
// import { ProfileLikes } from "./ProfileLikes";
import Profile from "./Profile/Profile";
import { Settings } from "./Settings";
import TermsAndConditions from "./Terms-and-Conditions";
import ProfileFollowers from "./Profile/ProfileFollowers";
import ProfileFollowing from "./Profile/ProfileFollowing";
import { ProfileLikes } from "./Profile/ProfileLikes";
import ProfilePreview from "./Profile/ProfilePreview";
import { ProfilePreviewList } from "./Profile/Lists/ProfilePreviewList";
import ProfileLists from "./Profile/Lists/ProfileLists";
// import TermsAndConditions from "./Terms-and-Conditions";

class App extends Component {
  componentWillMount() {
    const token = window.localStorage.getItem("token");
    if (token) {
      agent.setToken(token);
    }

    this.props.onLoaded(token ? agent.Auth.current() : null);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      store.dispatch(push(nextProps.redirectTo));
      this.props.onRedirect();
    }
  }

  render() {
    return this.props.appLoaded ? (
      <div className="App">
        <Header
          appName={this.props.appName}
          currentUser={this.props.currentUser}
          searchedUsers={this.props.searchedUsers}
          searchedArticles={this.props.searchedArticles}
          searchedTrending={this.props.searchedTrending}
        />
        {!this.props.currentUser ? (
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/article/:id" component={Article} />
            <Route path="/:username" component={Profile} />
            <Route path="/:username/followers" component={ProfileFollowers} />
            <Route path="/:username/following" component={ProfileFollowing} />
            <Route path="/privacy-policy" component={TermsAndConditions} />
            <Route path="/" component={Home} />
            <Redirect to="/" />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route path="/article/:id" component={Article} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/privacy-policy" component={TermsAndConditions} />
            <Route exact path="/editor" component={Editor} />
            <Route path="/editor/:slug" component={Editor} />
            <Route exact path="/:username/followers" component={ProfileFollowers} />
            <Route exact path="/:username/following" component={ProfileFollowing} />
            <Route exact path="/:username/liked" component={ProfileLikes} />
            <Route exact path="/:username/lists" component={ProfileLists} />
            <Route path="/:username/lists/:slug" component={ProfilePreviewList} />
            <Route exact path="/:username" component={Profile} />
            <Route path="/" component={Home} />
            <Redirect to="/404" />

          </Switch>
        )}

      </div>
    ) : (
      <div className="App">
        <Header
          appName={this.props.appName}
          currentUser={this.props.currentUser}
          searchedUsers={this.props.searchedUsers}
          searchedArticles={this.props.searchedArticles}
          searchedTrending={this.props.searchedTrending}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.search,
    appLoaded: state.common.appLoaded,
    appName: state.common.appName,
    currentUser: state.common.currentUser,
    redirectTo: state.common.redirectTo
  };
};

const mapDispatchToProps = dispatch => ({
  onLoaded: (payload, token) =>
    dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
  onRedirect: () => dispatch({ type: REDIRECT })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
