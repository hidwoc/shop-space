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
      <div className="copy-like">
        <h4>{copyright}</h4>
        <div className="button">
        <button onClick={() => setLike(!like)}>{displayLike}</button>
          </div>
      </div>
      <p>
        <span>{title}</span><br></br>
        {explanation}
      </p>
      <h5>{date}</h5>
    </div>
  );
};

export default Post;
