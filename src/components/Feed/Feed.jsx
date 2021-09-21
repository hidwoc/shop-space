import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "../Post/Post";
import { apiURL } from "../../services/apiConfig";

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
      {posts ? posts
        .filter((post) => post.media_type === "image")
        .map((post) => (
          <Post key={post.date} post={post} />
        )) :
        <h2> Loading... </h2>}
    </main>
  );
};

export default Feed;
