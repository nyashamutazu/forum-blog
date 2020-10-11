import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

const ProfileCreateList = props => {
  const [value, setState] = useState({
    listName: null,
    description: null,
    checked: false
  });

  const [checked, setChecked] = useState(false);

  const updateState = field => ev => {
    ev.preventDefault();
    const state = value;
    let newState;

    newState = Object.assign({}, state, { [field]: ev.target.value });
    setState(newState);
  };


  return (
    <div>
      <button className="btn btn__secondary--long" onClick={() => setChecked(!checked)}>
          {!checked ? 'Create New List +': 'Close'}</button>

      <CSSTransition in={checked === true}
        unmountOnExit
        timeout={500}
        classNames="form__create--list--primary"
        // onEnter={calcHeight}
        // onExit={() => setMenuHeight(null)}
        >
        <div className="">
          <form className="form__create--list">
            <div className="form__create--list--controller">
              <label className="form__create--list--title">
                List Name<span className="form__icon">*</span>
              </label>
              <input
                value={value.listName}
                onChange={updateState("listName")}
                className="form__create--list--input"
                type="text"
                required
              />
              <p className="form__create--list--text">
                Give your list a name that resonates its context.
              </p>
            </div>
            <div className="form__create--list--controller">
              <label className="form__create--list--title">
                Description<span className="form__icon">*</span>
              </label>
              <textarea
                value={value.description}
                onChange={updateState("description")}
                className="form__create--list--input"
                type="text"
                required
              ></textarea>
              <p className="form__create--list--text">
                Enter a brief description about your list.
              </p>
            </div>
            <div className="form__create--list--controller">
              <label className="form__create--list--title">
                Private<span className="form__icon">*</span>
              </label>
              <input
                type="checkbox"
                onClick={() => setState({ checked: !value.checked })}
                className="form__create--list--toggle"
                checked={value.checked}
                required
              />
              <p className="form__create--list--text">
                When you make your list private, only you can view it.
              </p>
            </div>
            <div className="form__create--list--controller">
              <button className="btn btn__primary" type="submit">
                Create List
              </button>
            </div>
          </form>
        </div>
      </CSSTransition>
    </div>
  );
};

export default ProfileCreateList;
