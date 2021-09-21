import React, { useEffect } from 'react';
import axios from 'axios';
import Post from '../Post/Post';
import { apiURL } from '../../services/apiConfig';

const Feed = () => {
  useEffect(() => {
    const fetchData = async() => {
      const res = await axios.get(apiURL)
      console.log(res)
    }
    fetchData()
  })
  return (
    <div>
      FEED
      <Post />
    </div>
  );
};

export default Feed;