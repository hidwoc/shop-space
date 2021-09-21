import React, { useEffect, useState } from "react";

const Post = ({ post }) => {
  const { copyright, date, explanation, hdurl, url, title, media_type } = post;
  const [like, setLike] = useState(false);
  const [displayLike, setDisplayLike] = useState(
    <img
      src={`${process.env.PUBLIC_URL}/assets/graphics/icons8-heart-100.png`}
    />
  );

  const display = () => {
    if (media_type === "video") {
      return (
        <video height="500" autoplay>
          <source src={url} type="video/mp4" />
        </video>
      );
    } else {
      return <img src={hdurl} alt={title} height="500" />;
    }
  };

  useEffect(() => {
    like
      ? setDisplayLike(
          <img
            src={`${process.env.PUBLIC_URL}/assets/graphics/icons8-heart-100-filled.png`}
          />
        )
      : setDisplayLike(
          <img
            src={`${process.env.PUBLIC_URL}/assets/graphics/icons8-heart-100.png`}
          />
        );
  }, [like]);

  return (
    <div>
      <h4>{copyright}</h4>
      <div>{display()}</div>
      {/* {if (media_type === "video") {
        <video src={url} loop/>
      } else {
        <img src={hdurl} alt={title} height="500"/>}
      } */}
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
