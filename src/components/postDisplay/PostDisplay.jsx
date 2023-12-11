import React from "react";
import { useNavigate } from "react-router-dom";
import { getAllPosts } from "../../lib/utils";

import AddPost from "./addPost/AddPost";
import UpdatePost from "./updatePost/UpdatePost";
import DeletePost from "./deletePost/DeletePost";

function PostDisplay({ token, posts, setPosts, currentUser }) {
  //console.log("userId in PostDisplay:", userId);
  return (
    <div>
      <AddPost token={token} setPosts={setPosts} /* userId={userId} */ />
      {posts.map((post) => (
        <div key={post._id}>
          {post.username === currentUser && (
            <>
              <UpdatePost
                path={`/post/${post._id}`}
                token={token}
                post={post}
                setPosts={setPosts}
                id={post._id}
              />
              <DeletePost
                path={`/post/${post._id}`}
                token={token}
                post={post}
                setPosts={setPosts}
                id={post._id}
              />
            </>
          )}
          {/* Render the post details here */}
        </div>
      ))}
    </div>
  );
}

export default PostDisplay;