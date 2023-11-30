import React, { useState } from "react";

function UpdatePost() {
  const [post, setPost] = useState("");

  const [response, setResponse] = useState("");

  const handleInputChange = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:4000/post/:id", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ post }),
      });

      const data = await response.json();
      setResponse(data.post);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="update-post">
      <form onSubmit={handleSubmit}>
        <input type="text" value={post} onChange={handleInputChange} />
        <button type="submit">UpDate Post</button>
      </form>
      {response && <p>{response}</p>}
    </div>
  );
}

export default UpdatePost;