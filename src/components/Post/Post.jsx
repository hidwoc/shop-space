import React, { useEffect, useState } from "react";
import { likeFalse, likeTrue } from "../../services/displayLike";
import "./Post.css";

const Post = ({ post }) => {
  const { copyright, date, explanation, hdurl, title } = post;
  const [like, setLike] = useState(false);
  const [displayLike, setDisplayLike] = useState(likeFalse);

  useEffect(() => {
    like ? setDisplayLike(likeTrue) : setDisplayLike(likeFalse);
  }, [like]);

  return (
    <div className="post">
      <div className="post-image">
        <img src={hdurl} alt={title} />
      </div>
      <div className="title-like">
        <h4>{title}</h4>
        <div className="date-button">
          <p>{date}</p>
          <button onClick={() => setLike(!like)}>{displayLike}</button>
        </div>
      </div>
      <p>
        {explanation}
        <br></br>
        {copyright ? <span>-{copyright}</span> : null}
      </p>
    </div>
  );
};

export default Post;
