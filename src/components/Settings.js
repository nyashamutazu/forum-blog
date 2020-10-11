import React, { Component } from "react";
import { connect } from "react-redux";
import agent from "../agent";
import {
  SETTINGS_SAVED,
  SETTINGS_PAGE_UNLOADED,
  LOGOUT
} from "../constants/actionTypes";
import ListErrors from "./ListErrors";

class SettingsForm extends Component {
  constructor() {
    super();

    this.state = {
      selectedFile: null,
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      username: "",
      bio: "",
      email: "",
      oldPassword: "",
      password: "",
      accountType: "",
      facebook: "",
      twitter: "",
      instagram: "",
      linkedIn: "",
      youtube: "",
      github: "",
      codePen: ""
    };

    this.updateState = field => ev => {
      const state = this.state;
      let newState;

      newState = Object.assign({}, state, { [field]: ev.target.value });

      this.setState(newState);
    };

    this.submitForm = ev => {
      ev.preventDefault();

      const fd = new FormData();
      for (let i in this.state) {
        fd.append(i, this.state[i]);
      }

      const user = Object.assign({}, this.state);

      if (!user.password) {
        delete user.password;
      }

      return;
      this.props.onSubmitForm(fd);
    };

    this.upload = () => {
      document.getElementById("selectImage").click();
    };

    this.imageHandler = ev => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          this.setState({ imageUrl: reader.result });
        }
      };
      reader.readAsDataURL(ev.target.files[0]);
      this.setState({ selectedFile: ev.target.files[0] });
    };
  }

  componentWillMount() {}

  componentWillReceiveProps(nextProps) {}

  render() {
    const profileImage = this.state.imageUrl;

    return (
      <form className="form form__settings" onSubmit={this.submitForm}>
        <div className="form__break">
          <div className="form__settings--controller--img form__settings--img">
            <img
              className="form__settings--img--img"
              id="img"
              src={profileImage}
              onClick={this.upload}
            />
          </div>
          <div className="form__settings--controller">
            <button
              onClick={this.upload}
              type="button"
              className="btn btn__secondary"
            >
              Add Image
            </button>
            <input
              id="selectImage"
              type="file"
              onChange={this.imageHandler}
              accept="image/*"
              hidden
            />
          </div>
          <div className="form__settings--controller">
            <label className="form__settings--title">
              Username<span className="form__icon">*</span>
            </label>
            <input
              value={this.state.username}
              onChange={this.updateState("username")}
              className="form__settings--input"
              type="text"
              required
            />
            <p className="form__settings--text">
              Real names are important, so your viewers know who you are.
            </p>
          </div>
          <div className="form__settings--controller">
            <label className="form__settings--title">
              Bio<span className="form__icon">*</span>
            </label>
            <textarea
              value={this.state.bio}
              onChange={this.updateState("bio")}
              className="form__settings--textarea"
              required
            ></textarea>
            <p className="form__settings--text">
              A Breif description of yourself.
            </p>
          </div>
          <div className="form__settings--controller">
            <label className="form__settings--title">
              Email<span className="form__icon">*</span>
            </label>
            <input
              type="text"
              value={this.state.email}
              onChange={this.updateState("email")}
              className="form__settings--input"
            />
            <p className="form__settings--text">
              Your email to help us contact you.
            </p>
          </div>
          <div className="form__settings--controller">
            <label className="form__settings--title">Old Password</label>
            <input
              type="password"
              value={this.state.oldPassword}
              onChange={this.updateState("oldPassword")}
              className="form__settings--input"
            />
            <p className="form__settings--text">Min 6 characters.</p>
          </div>
          <div className="form__settings--controller">
            <label className="form__settings--title">New Password</label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.updateState("password")}
              className="form__settings--input"
            />
            <p className="form__settings--text">Min 6 characters.</p>
          </div>
        </div>
        <div className="form__break">
          <h2 className="heading__secondary">Add Social Handlers</h2>
          <div className="form__settings--controller">
            <label className="form__settings--title">Facebook</label>
            <input
              type="text"
              value={this.state.facebook}
              onChange={this.updateState("facebook")}
              className="form__settings--input"
              placeholder="https://www.facebook.com/: username"
            />
            <p className="form__settings--text">
              https://www.facebook.com/: username
            </p>
          </div>
          <div className="form__settings--controller">
            <label className="form__settings--title">Instagram</label>
            <input
              type="text"
              value={this.state.instagram}
              onChange={this.updateState("instagram")}
              className="form__settings--input"
              placeholder="https://www.instagram.com/: username"
            />
            <p className="form__settings--text">
              https://www.instagram.com/: username
            </p>
          </div>
          <div className="form__settings--controller">
            <label className="form__settings--title">Twitter</label>
            <input
              type="text"
              value={this.state.twitter}
              onChange={this.updateState("twitter")}
              className="form__settings--input"
              placeholder="https://twitter.com/: username"
            />
            <p className="form__settings--text">
              https://twitter.com/: username
            </p>
          </div>
          <div className="form__settings--controller">
            <label className="form__settings--title">LinkedIn</label>
            <input
              type="text"
              value={this.state.linkedIn}
              onChange={this.updateState("linkedIn")}
              className="form__settings--input"
              placeholder="https://www.linkedin.com/in/: username"
            />
            <p className="form__settings--text">
              https://www.linkedin.com/in/: username
            </p>
          </div>
          <div className="form__settings--controller">
            <label className="form__settings--title">YouTube</label>
            <input
              type="text"
              value={this.state.youtube}
              onChange={this.updateState("youtube")}
              className="form__settings--input"
              placeholder="https://www.youtube.com/c/: username"
            />
            <p className="form__settings--text">
              https://www.youtube.com/c/: username
            </p>
          </div>
          <div className="form__settings--controller">
            <label className="form__settings--title">GitHub</label>
            <input
              type="text"
              value={this.state.github}
              onChange={this.updateState("github")}
              className="form__settings--input"
              placeholder="https://github.com/: username"
            />
            <p className="form__settings--text">
              https://github.com/: username
            </p>
          </div>
          <div className="form__settings--corntroller">
            <label className="form__settings--title">CodePen</label>
            <input
              type="text"
              value={this.state.codePen}
              onChange={this.updateState("codePen")}
              className="form__settings--input"
              placeholder="https://codepen.io/: username"
            />
            <p className="form__settings--text">
              https://codepen.io/: username
            </p>
          </div>
          <div className="form__settings--controller">
            <button
              className="btn btn__primary"
              type="submit"
              disabled={this.state.inProgress}
            >
              Update Account
            </button>
          </div>
        </div>
        <div>
          <div className="form__settings--controller">
            <button
              className="btn btn__warn"
              onClick={this.props.onClickLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export class Settings extends Component {
  render() {
    return (
      <main className="main">
        <div className="container">
          <div>
            <h1 className="heading__primary">Your Settings</h1>
            <ListErrors errors={this.props.errors} />

            <div className="page__container">
              <SettingsForm
                currentUser={this.props.currentUser}
                onSubmit={this.props.onSubmit}
              />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  ...state.settings,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onClickLogout: () => dispatch({ type: LOGOUT }),
  onSubmitForm: user =>
    dispatch({ type: SETTINGS_SAVED, payload: agent.Auth.save(user) }),
  onUnload: () => dispatch({ type: SETTINGS_PAGE_UNLOADED })
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
