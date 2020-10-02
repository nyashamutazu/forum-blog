import React from "react";
import ArticlePreview from "./ArticlePreview";
import { ListPagination } from "./ListPagination";
import Spinner from "./UI/Spinner";

const ArticleList = props => {
  if (!props.articles) {
    return <Spinner />;
  }

  if (props.articles.length === 0 || typeof props.articles === "undefined") {
    return (
      <div>
        <p>No articles have been made yet</p>
      </div>
    );
  }

  if (props.currentUser.profileImage === null) {
    return (
      <div>
        <p>No profile Image have been made yet</p>
      </div>
    );
  }

  const LoadMore = props => {
    const handler = ev => {
      ev.preventDefault();
      console.log("Load More");
    };
    return (
      <button onClick={handler} className="btn btn__secondary--long">
        Load More
      </button>
    );
  };

  return (
    <div>
      <ol className="article__list--container">
        {props.articles.map((article, i) => {
          return (
            <ArticlePreview
              key={i}
              currentUser={props.currentUser}
              article={article}
            />
          );
        })}
      </ol>
      <LoadMore />

      <ListPagination
        pager={props.pager}
        articlesCount={props.articlesCount}
        currentPage={props.currentPage}
      />
    </div>
  );
};

export default ArticleList;
