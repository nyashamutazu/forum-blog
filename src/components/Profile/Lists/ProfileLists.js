import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import ProfileCreateList from "./ProfileCreateList";
import { ReactComponent as LockSvg } from "../../../assets/main-icons/https.svg";
import {
  ARTICLE_LIST_LOADED,
  ARTICLE_LIST_UNLOADED,
  ADD_ARTICLE_LIST
} from "../../../constants/actionTypes";

class ProfileLists extends Component {
  render() {
    return (
      <main className="main">
        <div className="container">
          <ProfileCreateList />
          <hr />
          <ul className="list__preview--list">
            {this.props.lists.map((list, i) => {
              return (
                <li className="list__preview--item" key={i}>
                  <ListPreview list={list} />
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    );
  }
}

const ListPreview = props => {
  const _description = props.list.description.split(" ");
  const _descriptionT =
    _description.length > 12
      ? _description.slice(0, 12).join(" ") + " ..."
      : _description.join(" ");
  return (
    <div className="list__preview">
      <Link to={'/' + props.list.author.username + '/lists/' + props.list.slug} className="list__preview--header">
        <div className="list__preview--main">
          <p className="list__preview--title">{props.list.name}</p>
          <p className="list__preview--text">{_descriptionT}</p>
        </div>
        <div className="list__preview--type">
          {props.list.private ? (
            <LockSvg className="list__preview--icon" />
          ) : null}
        </div>
      </Link>

      <div className="list__preview--footer">
        <Link to={'/' + props.list.author.username} className="list__preview--body">
          <img
            className="list__preview--img"
            src={props.list.author.profileImage}
            alt={props.list.author.username}
          />
          <p className="list__preview--user">{props.list.author.username}</p>
        </Link>
        <Link to={'/' + props.list.author.username + '/lists/' + props.list.slug}>
          <p className="list__preview--text">
            Articles: {props.list.articleCount}
          </p>
          <p className="list__preview--text">
            Updated on: {props.list.updatedDate}
          </p>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  lists: state.profile.lists
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: ARTICLE_LIST_LOADED, payload }),
  onUnload: () => dispatch({ type: ARTICLE_LIST_UNLOADED }),
  createList: list => dispatch({ type: ADD_ARTICLE_LIST, list })
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileLists);
