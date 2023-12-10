import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import { getAllPosts } from "../../../lib/utils";

function AddPost({ token, setPosts }) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  //const [text, setText] = useState("");
  //const [postsState, setPostsState] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [notes, setNotes] = useState("");
  const [coverPhoto, setCoverPhoto] = useState("");
  const [username, setUsername] = useState("");

  const addPostRoute = "http://127.0.0.1:4000/post/";

  async function AddNewPost(e) {
    e.preventDefault();
    console.log("testing this add a post function!");

    //* Add a New Post
    let response = await fetch(addPostRoute, {
      headers: new Headers({
        "content-type": "application/json",
        Authorization: token,
      }),
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
        ingredients: ingredients,
        instructions: instructions,
        notes: notes,
        coverPhoto: coverPhoto,
        //username: username,
      }),
    });

    if (response.ok) {
      toggle();

      // Get posts from database
      const posts = await getAllPosts(token);

      // Update post in parent state
      //setPosts(posts);
    }
  }

  return (
    <div style={{ width: "48%", display: "inline-block" }}>
      <Button color="primary" onClick={toggle}>
        Add Post
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add New Recipe Post</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Input
                placeholder="Recipe Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Input
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Input
                placeholder="Ingredients"
                onChange={(e) => setIngredients(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Input
                placeholder="Instructions"
                onChange={(e) => setInstructions(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Input
                placeholder="Notes"
                onChange={(e) => setNotes(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Input
                placeholder="Cover Photo"
                onChange={(e) => setCoverPhoto(e.target.value)}
              />
            </FormGroup>
            {/* <FormGroup>
              <Input
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormGroup> */}
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={AddNewPost}>
            Create Recipe Post
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddPost;