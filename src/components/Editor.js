import React, { Component, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

import {
  ARTICLE_SUBMITTED,
  EDITOR_PAGE_LOADED,
  EDITOR_PAGE_UNLOADED
} from "../constants/actionTypes";
import ListErrors from "./ListErrors";
import { Settings } from "./Settings";
import Spinner from "./UI/Spinner";

class Editor extends Component {
  render() {
    if (this.props.inProgress) {
      return <Spinner />;
    }

    return (
      <main className="main">
        <div className="container" >
          <div style={{background: '#fff', padding: '20px 30px'}}>
            <h1 className="heading__primary">Editor </h1>
            <ListErrors errors={this.props.errors} />
            <div className="page__container">
              <EditorForm
                article={this.props.article}
                tagInput={this.props.tagInput}
                onSubmit={this.props.onSubmitForm}
              />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

const EditorForm = props => {
  const [editor, updateEditor] = useState({
    slug: props.article.slug,
    selectedFile: null,
    imageUrl: props.article.imageUrl,
    title: props.article.title,
    // description: props.article.description,
    body: props.article.body,
    tagList: props.article.tagList || [],
    tagInput: ""
  });

  const [value, setValue] = useState("Write your article");

  useEffect(() => {
    console.log("Gang Business");
  }, []);

  const updateState = field => ev => {
    console.log("Update state");
    const state = editor;
    let newState;

    newState = Object.assign({}, state, { [field]: ev.target.value });
    console.log(newState);
    updateEditor(newState);
  };

  const submitForm = ev => {
    ev.preventDefault();

    if (ev.key === "Enter") {
      return;
    }

    const fd = new FormData();
    for (let i in editor) {
      fd.append(i, editor[i]);
    }

    const user = Object.assign({}, editor);

    if (!user.password) {
      delete user.password;
    }
    console.log(editor);
    return;
    this.props.onSubmitForm(fd);
  };

  const upload = () => {
    document.getElementById("selectImage").click();
  };

  const imageHandler = ev => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        updateEditor({ ...editor, imageUrl: reader.result });
      }
    };
    reader.readAsDataURL(ev.target.files[0]);
    updateEditor({ ...editor, selectedFile: ev.target.files[0] });
  };

  const enteredPressed = ev => {
    const tag = ev.target.value;

    if (!tag || tag.length === 0) {
      return;
    }

    if (ev.key === "Enter") {
      updateEditor({
        ...editor,
        tagList: [...editor.tagList, tag],
        tagInput: ""
      });
      ev.target.value = "";
      ev.preventDefault();
    }
  };

  const removeTag = i => {
    let tags = [...editor.tagList];
    tags.splice(i, 1);
    updateEditor({ ...editor, tagList: tags });
  };

  return (
    <div>
      <form className="form__editor" onSubmit={submitForm}>
        <div className="form__break">
          <div className="form__editor--controller--img form__editor--img"
          style={{background: `url(${editor.imageUrl}) no-repeat`, backgroundPosition: 'center', backgroundSize: 'cover'}}>

          </div>
          <div className="form__editor--controller">
            <button
              onClick={upload}
              type="button"
              className="btn btn__secondary"
            >
              Add Image <span className="form__icon">*</span>
            </button>
            <input
              id="selectImage"
              type="file"
              onChange={imageHandler}
              accept="image/*"
              hidden
            />
          </div>
          <div className="form__editor--controller">
            <label className="form__editor--title">
              Title<span className="form__icon">*</span>
            </label>
            <input
              value={editor.title}
              onChange={updateState("title")}
              className="form__editor--input"
              type="text"
              required
            />
          </div>
          <div className="form__editor--controller">
            <label className="form__editor--title">
              Description<span className="form__icon">*</span>
            </label>
            <textarea
              value={editor.description}
              onChange={updateState("description")}
              className="form__editor--textarea--small"
              required
            ></textarea>
          </div>
          <div className="form__editor--controller">
            <label className="form__editor--title">
              Article<span className="form__icon">*</span>
            </label>
            <ReactQuill
              className="form__editor--textarea"
              theme="bubble"
              value={value}
              onChange={setValue}
              modules={Editor.modules}
              formats={Editor.formats}
            />
          </div>
          <div className="form__editor--controller">
            <label className="form__editor--title">
              Tags<span className="form__icon">*</span>
            </label>
            <input
              value={editor.tagInput}
              onChange={updateState("tagInput")}
              onKeyDown={enteredPressed}
              className="form__editor--input"
              type="text"
            />
            <div className="form__editor--tags--container">
              {editor.tagList.length > 0 ? (
                <div>
                  {editor.tagList.map((tag, i) => {
                    return (
                      <p
                        key={i}
                        className="form__editor--tags--tag"
                        onClick={() => removeTag(i)}
                      >
                        {tag}
                      </p>
                    );
                  })}
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn__primary--center">
          {editor.slug ? "Update Article" : "Craete New Article"}
        </button>
      </form>
    </div>
  );
};

Editor.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" }
    ],
    ["link", "image", "video"],
    ["clean"]
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false
  }
};

Editor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video"
];

const mapStateToProps = state => ({
  ...state.editor
});

const mapDispatchToProps = dispatch => ({
  onSubmitForm: payload => dispatch({ type: ARTICLE_SUBMITTED, payload }),
  onLoad: payload => dispatch({ type: EDITOR_PAGE_LOADED, payload }),
  onUnload: payload => dispatch({ type: EDITOR_PAGE_UNLOADED, payload })
});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
