import React, { useEffect } from 'react';

const Post = ({post}) => {
  const { copyright, date, explanation, hdurl, title} = post

  return (
    <div>
      <h3>{title}</h3>
      <h5>{date}</h5>
      <img src={hdurl} alt={title} height="500"/>
      <p>{explanation}</p>
      <h4>{copyright}</h4>
    </div>
  );
};

export default Post;