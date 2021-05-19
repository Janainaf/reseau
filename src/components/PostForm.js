import React, { Component } from "react";
import { connect } from "react-redux";

function PostForm() {
  return (
    <div className="post-container">
      <h1 className="post_heading">Create Post</h1>
      <form className="form center">
        <input
          required
          type="text"
          // ref={(input) => (this.getTitle = input)}
          placeholder="Enter Post Title"
        />
        <br />
        <br />
        <textarea
          required
          rows="5"
          // ref={(input) => (this.getMessage = input)}
          cols="28"
          placeholder="Enter Post"
        />
        <br />
        <br />
        <button>Post</button>
      </form>
    </div>
  );
}
export default PostForm;
