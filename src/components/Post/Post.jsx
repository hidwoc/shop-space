import React, { useEffect, useState } from "react";
import { likeFalse, likeTrue } from "../../services/displayLike";

const Post = ({ post }) => {
  const { copyright, date, explanation, hdurl, title } = post;
  const [like, setLike] = useState(false);
  const [displayLike, setDisplayLike] = useState(likeFalse);

  useEffect(() => {
    like ? setDisplayLike(likeTrue) : setDisplayLike(likeFalse);
  }, [like]);

  return (
    <div>
      <h4>{copyright}</h4>
      <img src={hdurl} alt={title} height="500" />
      <button onClick={() => setLike(!like)}>{displayLike}</button>
      <p>
        <span>{title}</span>
        {explanation}
      </p>
      <h5>{date}</h5>
    </div>
  );
};

export default Post;
