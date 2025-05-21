import React, { useEffect, useState } from "react";
import { PostContext } from "../Context/PostContext";
import { toast } from "react-toastify";

const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const loadPost = async () => {
      try {
        const res = await fetch("http://localhost:9000/flatPost");
        const allPost = await res.json();
        setPosts(allPost);
      } catch (error) {
        toast.error(error.message);
      }
    };
    loadPost();
  }, []);
  const allFlatPost = {
    posts,
  };
  return (
    <PostContext.Provider value={allFlatPost}>{children}</PostContext.Provider>
  );
};

export default PostsProvider;
