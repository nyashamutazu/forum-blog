import React from "react";
import Spinner from "../UI/Spinner";
import agent from "../../agent";

const Tags = props => {
  const tags = props.tags;
  return tags ? (
    <ul className="tag__preview--list">
      <a href="" className="tag__preview--title">
        Trending Articles:
      </a>
      {/* <a
        href=""
        className="tag__preview tag__preview--item"
        onClick={handleClick}
      >
        All
      </a> */}
      {tags.map(tag => {
        const handleClick = ev => {
          ev.preventDefault();
          props.onClickTag(
            tag,
            page => agent.Articles.byTag(tag, page),
            agent.Articles.byTag(tag)
          );
        };

        return (
          <a
            href=""
            className="tag__preview tag__preview--item"
            key={tag}
            onClick={handleClick}
          >
            {tag}
          </a>
        );
      })}
    </ul>
  ) : (
    <div>
      <Spinner />
    </div>
  );
};

export default Tags;
