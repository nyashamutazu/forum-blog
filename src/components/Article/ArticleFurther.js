import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { Link } from 'react-router-dom';

import { ReactComponent as FurtherSvg } from "../../assets/main-icons/ellipsis-v.svg";
import { useOnClickOutside } from "../Hooks/useOnClickOutside";
import {
  BLOCK_PROFILE,
  UNBLOCK_PROFILE,
  REPORT_PROFILE,
  FOLLOW_USER,
  UNFOLLOW_USER
} from "../../constants/actionTypes";

const ArticleFurther = props => {
  const ref = useRef();
  const [isModalOpen, setModalOpen] = useState(false);
  useOnClickOutside(ref, () => setModalOpen(false));

  return (
    <div className="article__further">
      <button
        onClick={() => setModalOpen(true)}
        className="article__further--button"
      >
        <FurtherSvg className="article__further--icon" />
      </button>

      {isModalOpen ? (
        <div ref={ref} className="article__further--container">
          <MenuTag />
        </div>
      ) : null}
    </div>
  );
};

const MenuTag = props => {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  const calcHeight = el => {
    const height = el.offsetHeight;
    setMenuHeight(height);
  };

  const Item = props => {
    return (
      <a
        className={["article__further--item", props.classAdded].join(" ")}
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  };

  const ItemLink = props => {
      return (
        <Link
        className={["article__further--item", props.classAdded].join(" ")}
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </Link>
      );
  }

  return (
    <div className="article__further--dropdown" style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="article__further--dropdown--main"
        onEnter={calcHeight}
      >
        <div className="article__further--dropdown--menu">
          <Item>Block</Item>
          <Item>Report</Item>
          <Item>Follow</Item>
          <Item goToMenu="share">Share Account</Item>
          <Item goToMenu="lists">Add List</Item>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "share"}
        unmountOnExit
        timeout={500}
        classNames="article__further--dropdown--secondary"
        onEnter={calcHeight}
      >
        <div className="article__further--dropdown--menu">
          <Item classAdded="article__further--dropdown--title" goToMenu="main">
            Back
          </Item>
          <Item handle="share-copy-url">Copy Url</Item>
          <Item handle="share-facebook">Facebook</Item>
          <Item handle="share-twitter">Twitter</Item>
          <Item handle="share-linkedIn">LinkedIn</Item>
        </div>
      </CSSTransition>
      
      <CSSTransition
        in={activeMenu === "lists"}
        unmountOnExit
        timeout={500}
        classNames="article__further--dropdown--secondary"
        onEnter={calcHeight}
      >
        <div className="article__further--dropdown--menu">
          <Item classAdded="article__further--dropdown--title" goToMenu="main">
            Back
          </Item>
          <ItemLink>Create List</ItemLink>
        </div>
      </CSSTransition>
    </div>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  onBlockAccount: username => dispatch({ type: BLOCK_PROFILE, username }),
  onUnlockAccount: username => dispatch({ type: UNBLOCK_PROFILE, username }),
  onReportAccount: username => dispatch({ type: REPORT_PROFILE, username }),
  onFollow: username => dispatch({ type: FOLLOW_USER, username }),
  onUnfollow: username => dispatch({ type: UNFOLLOW_USER, username })
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleFurther);
