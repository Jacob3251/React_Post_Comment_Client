import React, { useEffect, useState } from "react";
import AddUser from "../AddUser/AddUser";
import Comment from "../Comment/Comment";
import Post from "../Post/Post";
import "./Home.css";
const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [posts]);
  return (
    <div>
      <h1>User Posts: {posts.length}</h1>
      <AddUser />
      <br />
      <br />
      <br />
      {posts.reverse().map((post) => (
        <Post post={post}></Post>
      ))}
    </div>
  );
};

export default Home;
