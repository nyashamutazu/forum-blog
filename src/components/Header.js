import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

import { ReactComponent as NewArticleSvg } from "../assets/main-icons/sticky-note-o.svg";
import { ReactComponent as SettingsSvg } from "../assets/main-icons/cog.svg";
import { ReactComponent as DropdownSvg } from "../assets/main-icons/expand_more.svg";

import {
  Navbar,
  NavInput,
  SearchInputDropdown,
  NavItem,
  DropdownMenu,
  UserItem
} from "./Header/Navbar";

const LoggedOutView = props => {
  return (
    <ul className="navbar__list--embeded">
      <li className="navbar__item nav__search">
        <Search />
      </li>
      <li className="navbar__item">
        <Link to="/login" className="navbar__link btn btn__secondary">
          Login
        </Link>
      </li>
      <li className="navbar__item">
        <Link to="/sign-up" className="navbar__link btn btn__primary">
          Sign Up
        </Link>
      </li>
    </ul>
  );
};

const LogInView = props => {
  return (
    <ul className="navbar__list">
      <li className="navbar__item nav__search">
        <Search />
      </li>
      <li className="navbar__item">
        <Link to="/new-article" className="navbar__link">
          <NewArticleSvg className="icon" />
        </Link>
      </li>
      <li className="navbar__item">
        <Link to="/settings" className="navbar__link">
          <SettingsSvg className="icon" />
        </Link>
      </li>
      <li className="navbar__item">
        <Link to={`/${props.currentUser.username}`} className="navbar__user">
          <img
            className="navbar__user--img"
            src={props.currentUser.image}
            alt={props.currentUser.username}
          />
        </Link>
      </li>
    </ul>
  );
};

class Header extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <Navbar currentUser={this.props.currentUser}>
            <NavItem
              logo={
                <img
                  className="navbar__logo--img"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSE61QeekQ-1yBTQoHT0AKyA8gIf8oykNZ7sg&usqp=CAU"
                  alt="Logo"
                />
              }
            />

            <NavInput
              currentUser={this.props.currentUser}
              searchedUsers={this.props.searchedUsers}
              searchedArticles={this.props.searchedArticles}
              searchedTrending={this.props.searchedTrending}
            />

            {this.props.currentUser ? (
              <UserItem currentUser={this.props.currentUser} />
            ) : (
              <LoggedOutView />
            )}
          </Navbar>
        </div>
      </nav>
    );
  }
}

export default Header;
