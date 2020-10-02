import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import { ReactComponent as LikeSvg } from "../../assets/main-icons/thumbs-up.svg";
import { ARTICLE_LIKED, ARTICLE_UNLIKED } from '../../constants/actionTypes';


export const LikeArticle = (props) => {
  const [values, setValues ] = useState({liked: props.article.liked, likeCount: props.article.likeCount});
  
  // const classes = props.article.liked ? 'liked' : 'unlike';
  const classes = values.liked ? 'liked' : 'unlike';

  const handleClick = e => {
    e.preventDefault();

    if (values.liked) {
      const amount = values.likeCount - 1;
      setValues( prevState => ({...prevState, liked: !values.liked, likeCount: amount}));
      console.log(values);
      // props.onUnLike(props.article.slug);

    } else {
      const amount = values.likeCount + 1;
      setValues( prevState => ({...prevState, liked: !values.liked, likeCount: amount}) );

      // props.onLike(props.article.slug);
    }
  };

  return (
    <div onClick={handleClick} className={"like__article--button " + classes}>
      <LikeSvg className={"like__article--icon  " + classes} />
      <p className="like__article--text">
        { values.likeCount }
      </p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = dispatch => ({
  onLike: (slug) => dispatch({type: ARTICLE_LIKED, slug}),
  onUnlike: (slug) => dispatch({type: ARTICLE_UNLIKED, slug})
})

export default connect(mapStateToProps, mapDispatchToProps)(LikeArticle)
