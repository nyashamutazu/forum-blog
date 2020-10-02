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
  articleSlug: "",
  title: "",
  description: "",
  body: "",
  tagInput: "",
  tagList: "",
  inProgress: false,
  errors: null
};

const editorPageLoaded = (state, action) => {
  const updatedState = {
    articleSlug: action.payload ? action.payload.article.slug : "",
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
