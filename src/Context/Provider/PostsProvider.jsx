import React, { useEffect, useState } from "react";
import { PostContext } from "../Context/PostContext";
import { toast } from "react-toastify";
import LoadingSpinner from "../../Components/UI/LoadingSpinner";

const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://server-iota-khaki.vercel.app/flatPost"
        );
        const allPost = await res.json();
        setPosts(allPost);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadPost();
  }, []);

  if (loading) {
    return <LoadingSpinner />
  }
  const allFlatPost = {
    posts,
  };
  return (
    <PostContext.Provider value={allFlatPost}>{children}</PostContext.Provider>
  );
};

export default PostsProvider;
