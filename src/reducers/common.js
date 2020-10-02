import {
  APP_LOAD,
  REDIRECT,
  LOGOUT,
  ARTICLE_SUBMITTED,
  SETTINGS_SAVED,
  LOGIN,
  REGISTER,
  DELETE_ARTICLE,
  ARTICLE_PAGE_UNLOADED,
  EDITOR_PAGE_UNLOADED,
  HOME_PAGE_UNLOADED,
  PROFILE_PAGE_UNLOADED,
  PROFILE_LIKES_PAGE_UNLOADED,
  SETTINGS_PAGE_UNLOADED,
  LOGIN_PAGE_UNLOADED,
  REGISTER_PAGE_UNLOADED
} from "../constants/actionTypes";
import { updatedObject } from "../utility/utility";

const initialState = {
  appName: "HEIDELBERG",
  token: '3456789rfghgbnj',
  viewChangeCounter: 0,
  appLoaded: false,
  currentUser: {
    username: "abby",
    email: "abby@gmail.com",
    bio: "scientest",
    externalLink: null,
    profileImage: "https://images.generated.photos/l0yRr8jv0MGWKOrn2z188o-vFr5U4jVYaGwta7-DAEE/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA4ODM1NTYuanBn.jpg",
    articleCount: 1,
    followers: 1,
    followings: 0,
    social: {
      facebook: "www.facebook.com",
      linkedIn: "www.linkedIn.com",
      twitter: "www.twitter.com",
      instagram: "www.instagram.com"
    }
  },
  redirectTo: null,
  error: null
};

const appLoad = (state, action) => {
  const updatedState = {
    // token: action.token || null,
    appLoaded: true,
    // currentUser: action.payload ? action.payload.user : null
  };

  return updatedObject(state, updatedState);
};

const redirectTo = (state, action) => {
  const updatedState = {
    redirectTo: null
  };

  return updatedObject(state, updatedState);
};

const logout = (state, action) => {
  const updatedState = {
    redirectTo: "/",
    token: null,
    currentUser: null
  };

  return updatedObject(state, updatedState);
};

const articleSubmitted = (state, action) => {
  const redirectUrl = `/article/${action.payload.article.slug}`;
  const updatedState = {
    redirectTo: redirectUrl
  };

  return updatedObject(state, updatedState);
};

const settingsSaved = (state, action) => {
  const updatedState = {
    redirectTo: action.error ? null : '/',
    currentUser: action.error ? null : action.payload.user
  };

  return updatedObject(state, updatedState);
};

const auth = (state, action) => {
  const updatedState = {
    redirectTo: action.error ? null : '/',
    token: action.error ? null : action.payload.user.token,
    currentUser: action.error ? null : action.payload.user
  };

  return updatedObject(state, updatedState);
};

const deleteArticle = (state, action) => {
  const updatedState = {
    redirectTo: '/'
  };

  return updatedObject(state, updatedState);
};

const unloaded = (state, action) => {
  const updatedState = {
    viewChangeCounter: state.viewChangeCounter + 1
  };

  return updatedObject(state, updatedState);
};

export default (state = initialState, action) => {
  switch (action.type) {
    case APP_LOAD:
        return appLoad(state, action);
    case REDIRECT:
        return redirectTo(state, action);
    case LOGOUT:
        return logout(state, action);
    case ARTICLE_SUBMITTED:
        return articleSubmitted(state, action);
    case SETTINGS_SAVED:
        return settingsSaved(state, action);
    case LOGIN:
    case REGISTER:
        return auth(state, action);
    case DELETE_ARTICLE:
        return deleteArticle(state, action);
    case ARTICLE_PAGE_UNLOADED:
    case EDITOR_PAGE_UNLOADED:
    case HOME_PAGE_UNLOADED:
    case PROFILE_PAGE_UNLOADED:
    case PROFILE_LIKES_PAGE_UNLOADED:
    case SETTINGS_PAGE_UNLOADED:
    case LOGIN_PAGE_UNLOADED:
    case REGISTER_PAGE_UNLOADED:
      return unloaded(state, action);
    default:
      return state;
  }
};
