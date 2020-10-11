import {
  EDITOR_PAGE_LOADED,
  EDITOR_PAGE_UNLOADED,
  ARTICLE_SUBMITTED,
  ASYNC_START,
  ADD_TAG,
  REMOVE_TAG,
  UPDATE_FIELD_EDITOR
} from "../constants/actionTypes";
import { updatedObject } from "../utility/utility";

const initialState = {
  article: {
    slug: "on-location-ma-che-siete-venuti-a-fa-in-rome-pb0rqg",
    imageUrl:
      "https://nm-upload-example.s3.us-east-2.amazonaws.com/on-location-ma-che-siete-venuti-a-fa-in-rome-mys936.jpeg",
    title: "ON LOCATION: MA CHE SIETE VENUTI A FÀ IN ROME",
    description:
      "There’s nothing fancy about the place. You enter into a tiny taproom with counter seating on one side and a small bar on the other. Together, the room seats 10 patrons. Behind the bar sits a row of a dozen copper-colored beer towers, each sporting a hand-written card with information about the beer being dispensed. A modest selection of bottled beers is on display in a refrigerated case mounted on the wall. During my visits, most of the bottles featured wild ales from Belgium and the United States. The ever-changing draft list is posted on a chalkboard on the opposite wall.",
    body: `Beyond the bar area`,
    tagList: ["alchol", "beer", "drinks"],
  },
  tagInput: "",
  inProgress: false,
  errors: null
};

const editorPageLoaded = (state, action) => {
  const updatedState = {
    slug: action.payload ? action.payload.article.slug : "",
    title: action.payload ? action.payload.article.title : "",
    description: action.payload ? action.payload.article.description : "",
    body: action.payload ? action.payload.article.body : "",
    tagInput: "",
    tagList: action.payload ? action.payload.article.tagList : []
  };

  return updatedObject(state, updatedState);
};

const editorPageUnloaded = (state, action) => {
  const updatedState = {};

  return updatedObject(state, updatedState);
};

const articleSubmitted = (state, action) => {
  const updatedState = {
    inProgress: null,
    errors: action.error ? action.payload.errors : null
  };

  return updatedObject(state, updatedState);
};

const asyncStart = (state, action) => {
  const updatedState = {};

  if (action.subtype === ARTICLE_SUBMITTED) {
    updatedState.inProgress = true;
  }

  return updatedObject(state, updatedState);
};

const addTag = (state, action) => {
  const updatedState = {
    tagList: state.tagList.concat([state.tagInput]),
    tagInput: ""
  };

  return updatedObject(state, updatedState);
};

const removeTag = (state, action) => {
  const updatedState = {
    tagList: state.tagList.filter(tag => tag !== action.tag)
  };

  return updatedObject(state, updatedState);
};

const updateFieldEditor = (state, action) => {
  const updatedState = { [action.key]: action.value };

  return updatedObject(state, updatedState);
};

const defaultState = (state, action) => {
  const updatedState = {};

  return updatedObject(state, updatedState);
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EDITOR_PAGE_LOADED:
      return editorPageLoaded(state, action);
    case EDITOR_PAGE_UNLOADED:
      return editorPageUnloaded(state, action);
    case ARTICLE_SUBMITTED:
      return articleSubmitted(state, action);
    case ASYNC_START:
      return asyncStart(state, action);
    case ADD_TAG:
      return addTag(state, action);
    case REMOVE_TAG:
      return removeTag(state, action);
    case UPDATE_FIELD_EDITOR:
      return updateFieldEditor(state, action);
    default:
      return state;
  }
};
