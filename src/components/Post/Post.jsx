import React, { useEffect } from 'react';
import axios from 'axios';
import { apiURL } from '../../services/apiConfig';

const Post = () => {
  useEffect(() => {
    const fetchData = async() => {
      const res = await axios.get(apiURL)
      console.log(res)
    }
    fetchData()
  })
  return (
    <div>
      POST
    </div>
  );
};

export default Post;