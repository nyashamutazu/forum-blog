import React from "react";
import {Link} from 'react-router-dom';

const ArticleMeta = props => {
  const article = props.article;
  return (
    <div className="articlemeta">
      <div className="articlemeta__head">
        <Link to={'/' + article.author.username} className="articlemeta__user">
          <img
            className="articlemeta__user--img"
            src={article.author.profileImage}
            alt="user image"
          />
          <div className="articlemeta__user--details">
            <p className="articlemeta__user--title">{article.author.username}</p>
            <p className="articlemeta__user--bio">
              {article.author.bio}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ArticleMeta;
