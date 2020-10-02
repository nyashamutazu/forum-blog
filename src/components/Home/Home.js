import React, { Component } from "react";
import { connect } from "react-redux";

import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  APPLY_TAG_FILTER
} from "../../constants/actionTypes";
import Banner from "./Banner";
import MainView from "./MainView";
import Tags from "./Tags";
import agent from "../../agent";

const Promise = global.Promise;

class Home extends Component {
  componentWillMount() {
    // const tab = this.props.token ? "feed" : "all";
    // const articlesPromise = this.props.token
    //   ? agent.Articles.feed
    //   : agent.Articles.all;
    // this.props.onLoad(
    //   tab,
    //   articlesPromise,
    //   Promise.all([agent.Tags.getAll(), articlesPromise()])
    // );
  }

  componentWillUnmount() {
    // this.props.onUnload();
  }

  render() {
    return (
      <div className="home">
        {!this.props.currentUser ? (
          <div>
            <Banner token={this.props.token} appName={this.props.appName} />
          </div>
        ) : null}

        <div className="home__container">
          <MainView
            pager={this.props.pager}
            articles={this.props.articles}
            loading={this.props.loading}
            articlesCount={this.props.articlesCount}
            currentPage={this.props.currentPage}
            currentUser={this.props.currentUser}
            token={this.props.token}
            tags={this.props.tags}
            onClickTag={this.props.onClickTag}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.home,
  ...state.articleList,
  appName: state.common.appName,
  token: state.common.token,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onClickTag: (tag, pager, payload) =>
    dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
  onLoad: (tab, pager, payload) =>
    dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload }),
  onUnload: () => dispatch({ type: HOME_PAGE_UNLOADED })
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
