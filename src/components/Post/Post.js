import React, { useState } from "react";
import Comment from "../Comment/Comment";
const Post = ({ post }) => {
  const [showComment, setShowComment] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const { _id, title, content, time, comment } = post;
  const handlePostDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure you want to delete the post? "
    );
    if (proceed) {
      const url = `http://localhost:5000/posts/${id}`;
      fetch(url, { method: "DELETE" })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
      console.log("Deleting user with ", id);
    }
  };
  const handleReportPost = () => {
    const proceed = window.confirm(
      "Are you sure you want to report this post? "
    );
    if (proceed) {
      const reportedPost = { _id, title, content, time, comment };
      fetch("http://localhost:5000/posts/reported", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reportedPost),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };
  return (
    <div
      key={post._id}
      style={{
        width: "60%",
        backgroundColor: "salmon",
        padding: "20px 50px",
        textAlign: "left",
        borderRadius: "10px",
        margin: "10px auto",
      }}
    >
      <h4>{post.title}</h4>
      <em>{post.time}</em>
      <br />
      <p>{post.content}</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <button>Like</button>
          <button onClick={() => setShowComment(!showComment)}>Comment</button>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p style={{ color: "white", marginRight: "10px" }}>
            {post.comment.length} comments
          </p>
          <button onClick={() => setShowOptions(!showOptions)}>Options</button>
          {showOptions && (
            <div>
              <button onClick={() => handlePostDelete(post._id)}>
                Delete Post
              </button>
              <button onClick={handleReportPost}>Report Post</button>
            </div>
          )}
        </div>
      </div>
      {showComment && <Comment post={post}></Comment>}
    </div>
  );
};

export default Post;
