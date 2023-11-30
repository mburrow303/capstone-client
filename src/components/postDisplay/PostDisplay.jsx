import React from "react";
import {useNavigate} from "react-router-dom";
import { getAllPosts } from "../../lib/utils";
import AddPost from "./addPost/AddPost";
import UpdatePost from "./updatePost/UpdatePost";
import DeletePost from "./deletePost/DeletePost";

function PostDisplay({ token, getAllPosts }) {
  const navigate = useNavigate();

  return (
    <div>      
      <AddPost path="/post" token={token} getAllPosts={getAllPosts} />
      <DeletePost path="/post/:id" token={token} getAllPosts={getAllPosts} />
      <UpdatePost path="/post/:id" token={token} getAllPosts={getAllPosts} />
    </div>
  );
}

export default PostDisplay;