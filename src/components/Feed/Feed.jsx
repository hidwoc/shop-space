import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "../Post/Post";
import { apiURL } from "../../services/apiConfig";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const today = new Date().toJSON().slice(0,10)
  const searchParam = "count=5";
  // start_date=${today}

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${apiURL}&${searchParam}`);
      setPosts(res.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <form>
        <input type="date" value={today}/>
      </form>
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};

export default Feed;
