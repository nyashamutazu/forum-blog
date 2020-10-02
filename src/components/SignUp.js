import React, { Component } from "react";
import { connect } from "react-redux";
import ListErrors from "./ListErrors";

import agent from "../agent";
import { Link } from "react-router-dom";
import {
  UPDATE_FIELD_AUTH,
  LOGIN,
  LOGIN_PAGE_UNLOADED
} from "../constants/actionTypes";

class SignUp extends Component {
  constructor() {
    super();
    this.changeEmail = ev => this.props.onChangeEmail(ev.target.value);
    this.changePassword = ev => this.props.onChangePassword(ev.target.value);
    this.changeUsername = ev => this.props.onChangeUsername(ev.target.value);
    this.submitForm = (username, email, password) => ev => {
      ev.preventDefault();
      this.props.onSubmit(username, email, password);
    };
  }

  componentWillUnmount() {
    // this.props.onUnload();
  }

  render() {
    const email = this.props.email;
    const password = this.props.password;
    const username = this.props.username;
    return (
      <div className="auth">
        <div className="container auth__signup">
          <div className="auth__container">
            <div className="auth__head">
              <ListErrors errors={this.props.errors} />
              <form
                className="form form__signup"
                onSubmit={this.submitForm(username, email, password)}
              >
                <div className="form__head">
                  <h1 className="heading__primary auth__heading">Signup</h1>
                  <div className="auth__head--details">
                    <Link to="/login" className="auth__head--text">
                      I have an account
                    </Link>
                  </div>
                </div>
                <div className="form__container">
                  <div className="form__controller">
                    <input
                      className="form__input"
                      type="text"
                      placeholder="Username"
                      value={username}
                      required
                      onChange={this.changeUsername}
                    />
                  </div>
                  <div className="form__controller">
                    <input
                      className="form__input"
                      type="email"
                      placeholder="Email"
                      value={email}
                      required
                      onChange={this.changeEmail}
                    />
                  </div>
                  <div className="form__controller">
                    <input
                      className="form__input"
                      type="password"
                      placeholder="Password"
                      value={password}
                      required
                      onChange={this.changePassword}
                    />
                  </div>
                  <div className="form__controller">
                    <input
                      className="form__checkbox"
                      type="checkbox"
                      required
                    />
                    <Link to="/privacy-policy" className="form__terms">
                      You have agreed to our Terms and you have read our Privacy
                      Policy and Contact Policy. If applicable you can
                      unsubscribe anytime!
                    </Link>
                  </div>
                  <div className="form__controller">
                    <button
                      className="form__btn form__btn--signup"
                      type="submit"
                      disabled={this.props.inProgress}
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch => ({
  onChangeEmail: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: "email", value }),
  onChangePassword: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: "password", value }),
  onChangeUsername: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: "username", value }),
  onSubmit: (email, password) =>
    dispatch({ type: LOGIN, payload: agent.Auth.login(email, password) }),
  onUnload: () => dispatch({ type: LOGIN_PAGE_UNLOADED })
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
