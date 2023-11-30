import React from "react";
import { useNavigate } from "react-router-dom";

import AddPost from './addPost/AddPost';
import DeletePost from './deletePost/DeletePost';
import UpdatePost from './updatePost/UpdatePost';

function PostDisplay({ token, getAllPosts }) {
  const navigate = useNavigate();

  return (
    <div>
      <AddPost path="/post/create" token={token} getAllPosts={getAllPosts} />
      <DeletePost path="/post/:id" token={token} getAllPosts={getAllPosts}/>
      <UpdatePost path="/post/:id" token={token} getAllPosts={getAllPosts}/>
    </div>
  );
}

export default PostDisplay;