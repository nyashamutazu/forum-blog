import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";

import { ReactComponent as SearchSvg } from "../../assets/main-icons/search.svg";
import ArticleList from "../ArticleList";
import { useOnClickOutside } from "../Hooks/useOnClickOutside";

export const Navbar = props => {
  return (
    <div className="navbar__container">
      <ul className="navbar__list">{props.children}</ul>
    </div>
  );
};

export const UserItem = props => {
  const ref = useRef();
  const [isModalOpen, setModalOpen] = useState(false);
  useOnClickOutside(ref, () => setModalOpen(false));

  return (
    <li className="navbar__item" >
      <a
        className="navbar__auth"
        
      >
        <img
          src={props.currentUser.profileImage}
          className="navbar__icon"
          currentUser={props.currentUser}
          onClick={() => setModalOpen(true)}
        />
      </a>

      {isModalOpen ? (
        <div ref={ref}>
          <DropdownMenu currentUser={props.currentUser} />
        </div>
      ) : null}
    </li>
  );
};

export const NavInput = props => {
  const ref = useRef();
  const [isModalOpen, setModalOpen] = useState(false);
  useOnClickOutside(ref, () => setModalOpen(false));

  return (
    <li
      className="navbar__item--input"
      ref={ref}
      onClick={() => setModalOpen(true)}
    >
      <form className="search">
        <div className="search__controller">
          <input
            type="text"
            className="search__input"
            onChange={() => setModalOpen(true)}
            placeholder="Search"
          />
          <button type="submit" className="search__btn">
            <SearchSvg className="search__btn--icon" />
          </button>
        </div>
      </form>

      {isModalOpen ? (
        <div>
          <SearchInputDropdown currentUser={props.currentUser} />
        </div>
      ) : null}
    </li>
  );
};

export const SearchInputDropdown = props => {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  const calcHeight = el => {
    const height = el.offsetHeight;
    setMenuHeight(height);
  };

  const DropdownItem = props => {
    return (
      <a
        className={["dropdown__item", props.classAdded].join(" ")}
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  };

  return (
    <div
      className="search__dropdown dropdown__input"
      style={{ height: menuHeight }}
    >
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="dropdown__primary"
        onEnter={calcHeight}
      >
        <div className="dropdown__menu">
          <DropdownItem classAdded="dropdown__title">Search: </DropdownItem>
          <DropdownItem goToMenu="users">Users</DropdownItem>
          <DropdownItem goToMenu="articles">Articles</DropdownItem>
          <DropdownItem goToMenu="trending">Trending</DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "users"}
        unmountOnExit
        timeout={500}
        classNames="dropdown__secondary"
        onEnter={calcHeight}
      >
        <div className="dropdown__menu">
          <DropdownItem classAdded="dropdown__title" goToMenu="main">
            Back
          </DropdownItem>
          <ArticleList />
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "articles"}
        unmountOnExit
        timeout={500}
        classNames="dropdown__secondary"
        onEnter={calcHeight}
      >
        <div className="dropdown__menu">
          <DropdownItem classAdded="dropdown__title" goToMenu="main">
            Back
          </DropdownItem>
          <DropdownLink link="/editor">New Article</DropdownLink>
          <DropdownLink link={"/" + props.currentUser.username}>
            My Articles
          </DropdownLink>
          <DropdownLink link={"/" + props.currentUser.username + "/liked"}>
            Liked Articles
          </DropdownLink>
          <DropdownLink link={"/" + props.currentUser.username + "/read-later"}>
            Read Later
          </DropdownLink>
        </div>
      </CSSTransition>
    </div>
  );
};

export const NavItem = props => {
  return (
    <li className="navbar__item">
      {props.logo ? <Link to="/"> {props.logo} </Link> : null}
      {props.icon ? <a className="icon-button">{props.icon}</a> : null}
    </li>
  );
};

export const DropdownLink = props => {
  return (
    <Link
      to={props.link}
      className={["dropdown__item", props.classAdded].join(" ")}
    >
      {props.leftIcon ? (
        <span className="icon-button">{props.leftIcon}</span>
      ) : null}
      {props.children}
    </Link>
  );
};

export const DropdownMenu = props => {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  const calcHeight = el => {
    const height = el.offsetHeight;
    setMenuHeight(height);
  };

  const DropdownItem = props => {
    return (
      <a
        className={["dropdown__item", props.classAdded].join(" ")}
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        {props.leftIcon ? (
          <span className="icon-button">{props.leftIcon}</span>
        ) : null}
        {props.children}
      </a>
    );
  };

  const DropdownSearch = props => {
    const [value, setValue] = useState(null);

    const active = value ? "active" : null;
    return (
      <form className="search">
        <div className="search__controller">
          <input
            type="text"
            className={["search__input", active].join(" ")}
            onChange={e => setValue(e.target.value)}
            placeholder="Search"
          />
        </div>
      </form>
    );
  };

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="dropdown__primary"
        onEnter={calcHeight}
      >
        <div className="dropdown__menu">
          <DropdownItem classAdded="dropdown__search">
            <DropdownSearch />
          </DropdownItem>
          <DropdownLink link="/">Home</DropdownLink>
          <DropdownItem goToMenu="articles">Articles</DropdownItem>
          <DropdownItem goToMenu="profile">Profile</DropdownItem>
          <DropdownLink link="/" classAdded="danger">
            Sign Out
          </DropdownLink>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "articles"}
        unmountOnExit
        timeout={500}
        classNames="dropdown__secondary"
        onEnter={calcHeight}
      >
        <div className="dropdown__menu">
          <DropdownItem classAdded="dropdown__title" goToMenu="main">
            Back
          </DropdownItem>
          <DropdownLink link="/editor">New Article</DropdownLink>
          <DropdownLink link={"/" + props.currentUser.username}>
            My Articles
          </DropdownLink>
          <DropdownLink link={"/" + props.currentUser.username + "/liked"}>
            Liked Articles
          </DropdownLink>
          <DropdownLink link={"/" + props.currentUser.username + "/read-later"}>
            Read Later
          </DropdownLink>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "profile"}
        unmountOnExit
        timeout={500}
        classNames="dropdown__secondary"
        onEnter={calcHeight}
      >
        <div className="dropdown__menu">
          <DropdownItem classAdded="dropdown__title" goToMenu="main">
            Back
          </DropdownItem>
          <DropdownLink link={"/" + props.currentUser.username}>
            Profile
          </DropdownLink>
          <DropdownLink link="/settings">Settings</DropdownLink>
          <DropdownLink link={"/" + props.currentUser.username + "/followers"}>
            Followers
          </DropdownLink>
          <DropdownLink link={"/" + props.currentUser.username + "/following"}>
            Following
          </DropdownLink>
        </div>
      </CSSTransition>
    </div>
  );
};
