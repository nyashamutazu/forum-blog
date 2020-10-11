import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";

import { ReactComponent as SearchSvg } from "../../assets/main-icons/search.svg";
import ArticleList from "../ArticleList";
import { useOnClickOutside } from "../Hooks/useOnClickOutside";
import FollowProfile from "../Profile/FollowProfile";
import { LikeArticle } from "../Article/LikeArticle";

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
    <li className="navbar__item">
      <a className="navbar__auth">
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
          <SearchInputDropdown
            currentUser={props.currentUser}
            searchedUsers={props.searchedUsers}
            searchedArticles={props.searchedArticles}
            searchedTrending={props.searchedTrending}
          />
        </div>
      ) : null}
    </li>
  );
};

export const SearchInputDropdown = props => {
  const UserPreview = props => {
    const _list = props.user.bio.split(" ");
    const _bio =
      _list.length > 18
        ? _list.splice(0, 18).join(" ") + " ..."
        : _list.join(" ");
    return (
      <div to={"/" + props.user.username} className="dropdown__preview">
        <div className="dropdown__preview--container">
          <Link
            to={"/" + props.user.username}
            className="dropdown__preview--img"
          >
            <img
              src={props.user.profileImage}
              alt={props.user.username}
              className="dropdown__preview--img--img"
            />
          </Link>

          <Link
            to={"/" + props.user.username}
            className="dropdown__preview--body"
          >
            <p className="dropdown__preview--title">{props.user.username}</p>
            <p className="dropdown__preview--text">{_bio}</p>
          </Link>
          <div className="dropdown__preview--action">
            <FollowProfile
              profile={props.user}
              currentUser={props.currentUser}
            />
          </div>
        </div>
      </div>
    );
  };

  const ArticlePreview = props => {
    const _list = props.article.description.split(" ");
    const _description =
      _list.length > 18
        ? _list.splice(0, 18).join(" ") + " ..."
        : _list.join(" ");

    return (
      <div className="dropdown__preview">
        <div className="dropdown__preview--container">
          <Link
            to={"/article/" + props.article.slug}
            className="dropdown__preview--img"
          >
            <img
              src={props.article.imageUrl}
              alt={props.article.title}
              className="dropdown__preview--img--img1"
            />
          </Link>
          <Link
            to={"/article/" + props.article.slug}
            className="dropdown__preview--body"
          >
            <p className="dropdown__preview--title">{props.article.title}</p>
            <p className="dropdown__preview--text">{_description}</p>
          </Link>
          <div className="dropdown__preview--action">
            <LikeArticle
              article={props.article}
              currentUser={props.currentUser}
            />
          </div>
        </div>
      </div>
    );
  };

  const TrendPreview = props => {
    return (
      <Link
        to={"/search/?trend=" + props.trend}
        className="dropdown__trend--preview"
      >
        <p className="dropdown__trend--text">{props.trend}</p>
      </Link>
    );
  };

  return (
    <div className="search__dropdown dropdown__input">
      <div className="dropdown__menu">
        <div className="dropdown__container">
          <ul className="dropdown__list">
            <li className="dropdown__title">
              <p className="dropdown__title--text">Users:</p>
              <Link className="dropdown__title--btn">More</Link>
            </li>
            {props.searchedUsers.map(user => {
              return (
                <li className="dropdown__item--preview" key={user.username}>
                  <UserPreview user={user} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="dropdown__container">
          <ul className="dropdown__list">
            <li className="dropdown__title">
              <p className="dropdown__title--text">Articles:</p>
              <Link className="dropdown__title--btn">More</Link>
            </li>
            {props.searchedArticles.map(article => {
              return (
                <li className="dropdown__item--preview" key={article.title}>
                  <ArticlePreview article={article} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="dropdown__container">
          <ul className="dropdown__list">
            <li className="dropdown__title">
              <p className="dropdown__title--text">Trending:</p>
              <Link className="dropdown__title--btn">More</Link>
            </li>
            {props.searchedTrending.map((trend, i) => {
              return (
                <li className="dropdown__item--preview" key={i}>
                  <TrendPreview trend={trend} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <button type="button" className="btn btn__primary">
        See All
      </button>
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
          <DropdownLink link={"/" + props.currentUser.username + "/lists"}>
            Lists
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
