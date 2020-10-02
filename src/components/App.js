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
// import { Editor } from "./Editor";
import Article from "./Article/Article";
// import { Settings } from "./Settings";
// import { ProfileLikes } from "./ProfileLikes";
import Profile from "./Profile/Profile";
import { Settings } from "./Settings";
import TermsAndConditions from "./Terms-and-Conditions";
import ProfileFollowers from "./Profile/ProfileFollowers";
import ProfileFollowing from "./Profile/ProfileFollowing";
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
            <Route path="/login" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/article/:id" component={Article} />
            <Route path="/settings" component={Settings} />
            <Route path="/privacy-policy" component={TermsAndConditions} />
            {/* <Route path="/editor" component={Editor} /> */}
            {/* <Route path="/editor/:slug" component={Editor} /> */}
            <Route path="/:username/followers" component={ProfileFollowers} />
            <Route path="/:username/following" component={ProfileFollowing} />
            <Route path="/:username/likes" component={Profile} />
            <Route path="/:username/list" component={Profile} />
            <Route path="/:username" component={Profile} />
            <Route path="/" component={Home} />
            <Redirect to="/" />
          </Switch>
        )}

      </div>
    ) : (
      <div className="App">
        <Header
          appName={this.props.appName}
          currentUser={this.props.currentUser}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
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
