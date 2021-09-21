import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "../Post/Post";
import { apiURL } from "../../services/apiConfig";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const searchParam = "count=5";

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${apiURL}&${searchParam}`);
      setPosts(res.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};

export default Feed;
