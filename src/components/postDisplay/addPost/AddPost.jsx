import React from "react";
import {useState} from "react";
import { Button } from 'react';
import { getAllPosts } from "../../../lib/utils"

function AddPost({ token, setPosts }) {
  const [text, setText] = useState("");
  const [posts, setPosts] = useState("");

  const addPostRoute = "http://127.0.0.1:4000/post/";

  async function AddNewPost(e) {
    e.preventDefault();
    console.log("testing this add a post function!");
    // console.log & display data from the input fields
    //console.log(text);
    //console.log(message);

    // Add a Message
    let response = await fetch(addPostRoute, {
      headers: new Headers({
        "content-type": "application/json",
        Authorization: token,
      }),
      method: "POST",
      body: JSON.stringify({
        text: text
      }),
    });
    // Get messages from database
    const posts = await getAllPosts(token);
    // Update room in parent state
    setPosts(posts);
  }

  return (
    <div style={{ width: "48%", display: "inline-block" }}>
    <Button type="submit" onClick={AddNewPost}></Button>
    </div>
  );
}

export default AddPost;