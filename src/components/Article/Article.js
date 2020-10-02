import React, { Component } from "react";
import { connect } from "react-redux";
import marked from "marked";

import {
  ARTICLE_PAGE_LOADED,
  ARTICLE_PAGE_UNLOADED
} from "../../constants/actionTypes";
import agent from "../../agent";
import ArticleMeta from "./ArticleMeta";
import CommentContainer from "./CommentContainer";
import { ArticleFooter } from "./ArticleFooter";

export class Article extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  componentWillMount() {
    // this.props.onLoad(
    //   Promise.all([
    //     agent.Articles.get(this.props.match.params.id),
    //     agent.Comments.forArticle(this.props.match.params.id)
    //   ])
    // );
  }

  componentWillUnmount() {
    // this.props.onUnload();
  }

  

  render() {


    const markup = {
      __html: marked(this.props.article.body, { sanitize: true })
    };
    const creator =
      this.props.currentUser &&
      this.props.currentUser.username === this.props.article.author.username;

    if (!this.props.article) {
      return null;
    }
    return (
      <div>
        <div className="article__page">
          <div className="container">
            <div className="article__page--banner">
              <ArticleDetails article={this.props.article} />
              <ArticleMeta article={this.props.article} creator={creator} />
              <h1 className="article__page--heading">
                {this.props.article.title}
              </h1>
              <p className="article__page--text">
                {this.props.article.description}
              </p>
            </div>
          </div>
        </div>
        <div className="article__page--image">
          <img
            src={this.props.article.imageUrl}
            className="article__page--image--img"
            alt={this.props.article.title}
          />
        </div>
        <div className="article__page--body">
          <div className="article__page--container">
            <div className="container page">
              <div
                className="article__page--content"
                dangerouslySetInnerHTML={markup}
              ></div>
              <div className="article__page--tags">
                <ArticleTags article={this.props.article} />
              </div>
            </div>
          </div>
          <ArticleFooter
            article={this.props.article}
            currentUser={this.props.article.author}
          />
          <ArticleComments
            article={this.props.article}
            comments={this.props.comments}
            currentUser={this.props.currentUser}
            commentErrors={this.props.commentErrors}
            slug={this.props.article.slug}
          />
        </div>
      </div>
    );
  }
}

const ArticleDetails = props => {
  return (
    <div className="article__page--details">
      <p className="article__page--details--main">
        {props.article.category} - {props.article.createdAt}
      </p>
    </div>
  );
};

const ArticleComments = props => {
  return (
    <div id="comment" className="article__page--comments">
      <div className="container">
        <CommentContainer
          comments={props.comments || []}
          errors={props.commentErrors || []}
          slug={props.slug}
          slug={props.article.slug}
          currentUser={props.currentUser}
        />
      </div>
    </div>
  );
};

const ArticleTags = props => {
  return (
    <ul className="article__page--tags--list">
      {props.article.tagList.map(tag => {
        return (
          <li className="article__page--tags--item" key={tag}>
            {tag}
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = state => ({
  ...state.article,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: ARTICLE_PAGE_LOADED, payload }),
  onUnload: () => dispatch({ type: ARTICLE_PAGE_UNLOADED })
});

export default connect(mapStateToProps, mapDispatchToProps)(Article);
