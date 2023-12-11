import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  CardFooter,
  CardColumns,
  CardGroup,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import { getAllPosts } from "../../lib/utils";

import "./PostDisplay.css";

import AddPost from "./addPost/AddPost";
import UpdatePost from "./updatePost/UpdatePost";
import DeletePost from "./deletePost/DeletePost";

function PostDisplay({ token, posts, setPosts, currentUser }) {
  //console.log("userId in PostDisplay:", userId);
  return (
    <div>
      <br></br>
      <br></br>
      <AddPost token={token} setPosts={setPosts} /* userId={userId} */ />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <CardColumns>
        {posts.map((post) => (
          <Card key={post._id} className="card-custom">
            <CardBody>
              <CardImg
                top
                width="100%"
                src={post.coverPhoto}
                alt="...Recipe Photo"
              />
              <br></br>
              <br></br>
              <CardTitle tag="h5">{post.title}</CardTitle>
              <CardText>Description: {post.description}</CardText>
              <CardText>Ingredients: {post.ingredients}</CardText>
              <CardText>Instructions: {post.instructions}</CardText>
              <CardText>Notes: {post.notes}</CardText>
              <CardText>
                <small className="text-muted">Author: {post.userId}</small>
              </CardText>
            </CardBody>
            <CardFooter>
              {post.username === currentUser && (
                <>
                  <UpdatePost
                    path={`/post/${post._id}`}
                    token={token}
                    post={post}
                    setPosts={setPosts}
                    id={post._id}
                  />
                  <br></br>
                  <br></br>
                  <DeletePost
                    path={`/post/${post._id}`}
                    token={token}
                    post={post}
                    setPosts={setPosts}
                    id={post._id}
                  />
                </>
              )}
            </CardFooter>
          </Card>
        ))}
      </CardColumns>
    </div>
  );
}

export default PostDisplay;