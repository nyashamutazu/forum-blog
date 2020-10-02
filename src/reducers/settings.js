import {
  SETTINGS_SAVED,
  SETTINGS_PAGE_UNLOADED,
  ASYNC_START
} from "../constants/actionTypes";
import { updatedObject } from "../utility/utility";

const initialState = {
  inProgress: false,
  errors: null
};

const settingsSaved = (state, action) => {
  const updatedState = {
    inProgress: false,
    errors: action.error ? action.payload.errors : null
  };

  return updatedObject(state, updatedState);
};

const settingsPageUnloaded = (state, action) => {
  const updatedState = {};

  return updatedObject(state, updatedState);
};

const ayncStart = (state, action) => {
  const updatedState = {
    inProgress: true
  };

  return updatedObject(state, updatedState);
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SETTINGS_SAVED:
      return settingsSaved(state, action);
    case SETTINGS_PAGE_UNLOADED:
      return settingsPageUnloaded(state, action);
    case ASYNC_START:
      return ayncStart(state, action);
    default:
      return state;
  }
};


