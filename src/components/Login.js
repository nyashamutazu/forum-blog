import React, { Component } from "react";
import { connect } from "react-redux";
import {
  UPDATE_FIELD_AUTH,
  LOGIN,
  LOGIN_PAGE_UNLOADED
} from "../constants/actionTypes";
import agent from "../agent";

import { Link } from "react-router-dom";
import ListErrors from "./ListErrors";

class Login extends Component {
  constructor() {
    super();
    this.changeEmail = ev => this.props.onChangeEmail(ev.target.value);
    this.changePassword = ev => this.props.onChangePassword(ev.target.value);
    this.submitForm = (email, password) => ev => {
      ev.preventDefault();
      this.props.onSubmit(email, password);
    };
  }

  componentWillUnmount() {
    // this.props.onUnload();
  }

  render() {
    const email = this.props.email;
    const password = this.props.password;

    return (
      <div className="auth">
        <div className="container auth__login">
          <div className="auth__container">
            <div className="auth__head">
              <ListErrors errors={this.props.errors} />
              <form
                className="form form__login"
                onSubmit={this.submitForm(email, password)}
              >
                <div className="form__head">
                  <h1 className="heading__primary auth__heading">Login</h1>
                  <div className="auth__head--details">
                    <Link to="/sign-up" className="auth__head--text">
                      I need an account
                    </Link>
                  </div>
                </div>
                <div className="form__container">
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
                    <button
                      className="form__btn form__btn--login"
                      type="submit"
                      disabled={this.props.inProgress}
                    >
                      Login
                    </button>
                  </div>
                  <div className="form__controller">
                    <Link to="/sign-up" className="form__link">
                      Forgot password
                    </Link>
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
  onSubmit: (email, password) =>
    dispatch({ type: LOGIN, payload: agent.Auth.login(email, password) }),
  onUnload: () => dispatch({ type: LOGIN_PAGE_UNLOADED })
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
