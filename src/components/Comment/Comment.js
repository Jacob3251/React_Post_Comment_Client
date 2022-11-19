import React, { useEffect, useState } from "react";

import moment from "moment";
const Comment = ({ post }) => {
  //   const [commentId, setCommentId] = useState(0);
  const { _id, title, content, comment } = post;
  //   const [comments, setComments] = useState([]);

  //   const commentobjects = [
  //     { name: "adil", id: 1 },
  //     { name: "hasan", id: 2 },
  //     { name: "nayeem", id: 3 },
  //     { name: "md", id: 4 },
  //   ];

  const handleNewComment = (event) => {
    const time = moment().format("MMMM Do YYYY, h:mm:ss a");
    event.preventDefault();
    // setCommentId(commentId + 1);
    const commentContent = event.target.usercomment.value;
    const newComment = { time, commentContent };
    // setComments([...comment, newComment]);
    // console.log(newComment);
    fetch(`http://localhost:5000/posts/${_id}`, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    })
      .then((response) => response.json())
      .then((data) => {
        event.target.reset();
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  //   useEffect(() => {
  //     fetch(`http://localhost:5000/post/${_id}`)
  //       .then((res) => res.json())
  //       .then((data) => setComments(data));
  //   }, [comments]);
  return (
    <div>
      <form onSubmit={handleNewComment}>
        <input type="text" name="usercomment" />
        <input type="submit" value="submit" />
      </form>
      <div
        style={{
          backgroundColor: "lightblue",
          padding: "4px 10px",
          margin: "10px 0",
        }}
      >
        <p>{comment.length}</p>
        {comment.reverse().map((item) => (
          <div
            style={{
              margin: "5px 0",
              backgroundColor: "blue",
              padding: "8px",
              borderRadius: "8px",
            }}
          >
            <h3 style={{ color: "black", fontSize: "18px" }}>
              {item.commentContent}
            </h3>
            <p style={{ color: "white", fontSize: "12px" }}>{item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;
