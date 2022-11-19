import React from "react";
import moment from "moment";
const AddUser = () => {
  const time = moment().format("MMMM Do YYYY, h:mm:ss a");
  const handleAddUser = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const content = event.target.content.value;
    const comment = [];
    const post = { title, content, time, comment };
    // alert(`title: ${title} content: ${content}`);
    fetch("http://localhost:5000/posts", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    event.target.reset();
  };
  return (
    <div style={{ width: "60%", margin: "0 auto" }}>
      <h1>Add a post from here</h1>
      <form
        onSubmit={handleAddUser}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          name="title"
          required
          placeholder="Enter title"
          style={{
            margin: "10px 50px",
            paddingLeft: "10px",
            height: "25px",
            width: "100%",
          }}
        />
        <input
          type="text"
          name="content"
          required
          placeholder="Enter content"
          style={{
            margin: "10px 50px",
            paddingLeft: "10px",
            height: "25px",
            width: "100%",
          }}
        />
        <input
          type="submit"
          value="Submit"
          style={{
            margin: "10px 40px",

            height: "35px",
            width: "101%",
          }}
        />
      </form>
    </div>
  );
};

export default AddUser;
