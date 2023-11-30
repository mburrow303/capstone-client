import React, { useState } from "react";

function DeletePost() {
  const [post, setPost] = useState("");

  const [response, setResponse] = useState("");

  const handleInputChange = async (e) => {
    e.preventDefault();

    try {
      let response = await fetch("http://127.0.0.1:4000/post/:id", {
        method: "DELETE",
      });

      const data = await response.json();
      setResponse(data.post);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="delete-post">
      <form onSubmit={handleSubmit}>
        <input type="text" value={post} onChange={handleInputChange} />
        <button type="submit">Post Deleted</button>
      </form>
      {response && <p>{response}</p>}
    </div>
  );
}

export default DeletePost;