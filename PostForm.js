import React, { useState } from "react";
import { connect } from "react-redux";
import { createPost } from "../actions/PostAction";

const PostForm = ({ createPost }) => {
  const [title, setTitle] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    createPost({ title });
    setTitle("");
  }
  return (
    <div>
        <h2>Create a Post</h2>
      <form onSubmit={onSubmit}>
      <div>
        <label> Title:</label>
        <br />
        <input type="text" name="title" value={title} onChange={(e)=>setTitle(e.target.value)} />
      </div>
      <br />
      <button type="submit"> Submit</button>
      </form>
    </div>
    )
};
export default connect(null,{createPost})(PostForm);
