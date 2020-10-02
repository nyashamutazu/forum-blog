import { HOME_PAGE_LOADED, HOME_PAGE_UNLOADED } from "../constants/actionTypes";
import { updatedObject } from "../utility/utility";

const initialState = {
  tags: ["alchol", "beer", "drinks", "driving", "brewing", "distance"]
};

const homePageLoaded = (state, action) => {
  const updatedState = {
    // tags: action.payload[0].tags
  };

  return updatedObject(state, updatedState);
};

const homePageUnloaded = (state, action) => {
  const updatedState = {};

  return updatedObject(state, updatedState);
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HOME_PAGE_LOADED:
      return homePageLoaded(state, action);
    case HOME_PAGE_UNLOADED:
      return homePageUnloaded(state, action);
    default:
      return state;
  }
};
