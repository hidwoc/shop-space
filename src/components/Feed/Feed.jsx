import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "../Post/Post";
import { apiURL } from "../../services/apiConfig";
import "./Feed.css";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${apiURL}&count=10`);
      setPosts(res.data);
    };
    fetchData();
  }, []);

  return (
    <main>
      {posts.length === 0 ? (
        <h2 className="loading"> Loading... </h2>
      ) : (
        posts
          .filter((post) => post.media_type === "image")
          .map((post) => <Post key={post.date} post={post} />)
      )}
    </main>
  );
};

export default Feed;
