import {
  LOGIN,
  REGISTER,
  LOGIN_PAGE_UNLOADED,
  REGISTER_PAGE_UNLOADED,
  ASYNC_START,
  UPDATE_FIELD_AUTH
} from "../constants/actionTypes";
import { updatedObject } from "../utility/utility";

const initialState = {
  inProgress: false,
  errors: null
};

const auth = (state, action) => {
  const updatedState = {
    inProgress: false,
    errors: action.error ? action.payload.errors : null
  };
  return updatedObject(state, updatedState);
};

const asyncStart = (state, action) => {
  const updatedState = {};

  if (action.subtype === LOGIN || action.subtype === REGISTER) {
    updatedState.inProgress = true;
  }

  return updatedObject(state, updatedState);
};

const updateFieldAuth = (state, action) => {
  const updatedState = {
    [action.key]: action.value
  };

  return updatedObject(state, updatedState);
};

const defaultState = (state, action) => {
  return {};
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
    case REGISTER:
        return auth(state, action);
    case LOGIN_PAGE_UNLOADED:
    case REGISTER_PAGE_UNLOADED:
        return defaultState(state, action);
    case ASYNC_START:
        return asyncStart(state, action);
    case UPDATE_FIELD_AUTH:
        return updateFieldAuth(state, action);
    default:
      return state;
  }
};
