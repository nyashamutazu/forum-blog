/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { connect } from "react-redux";
import agent from "../../agent";
import { CHANGE_TAB } from "../../constants/actionTypes";
import ArticleList from "../ArticleList";
import Tags from "./Tags";

const GlobalFeedTab = props => {
  const clickHandler = ev => {
    ev.preventDefault();
    props.onTabClick("all", agent.Articles.all, agent.Articles.all());
  };

  return (
    <li className={props.tab === "all" ? "tag__item active" : "tag__item"}>
      <a
        href=""
        onClick={clickHandler}
        className="tag__link"
      >
        Global
      </a>
    </li>
  );
};

const TagFilterTab = props => {
  if (!props.tag) {
    return null;
  }

  return (
    <li className="tag__item">
      <a href="" className="tag__link active">
        {props.tag}
      </a>
    </li>
  );
};

const YourFeedTab = props => {
  const clickHandler = ev => {
    ev.preventDefault();
    props.onTabClick("feed", agent.Articles.feed, agent.Articles.feed());
  };

  return props.token ? (
    <li className={props.tab === "feed" ? "tag__item active" : "tag__item"}>
      <a
        href=""
        className="tag__link"
        onClick={clickHandler}
      >
        Your Feed
      </a>
    </li>
  ) : null;
};

const MainView = props => {
  return (
    <div className="mainview__container">
      <div className="tag__toggle">
        <ul className="tag__list tag__active">
          <YourFeedTab
            token={props.token}
            tab={props.tab}
            onTabClick={props.onTabClick}
          />
          <GlobalFeedTab tab={props.tab} />
          <TagFilterTab tag={props.tag} />
        </ul>
      </div>
      <div className="container">
        <Tags tags={props.tags} onClickTag={props.onClickTag} />

        <ArticleList
          pager={props.pager}
          articles={props.articles}
          loading={props.loading}
          articlesCount={props.articlesCount}
          currentPage={props.currentPage}
          currentUser={props.currentUser}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  ...state.articleList,
  tags: state.home.tags,
  token: state.common.token,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onTabClick: (tab, pager, payload) =>
    dispatch({ type: CHANGE_TAB, tab, pager, payload })
});

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
