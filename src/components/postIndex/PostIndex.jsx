import React from "react";
import AddPost from '../postDisplay/addPost/AddPost';
// import DeletePost from '../postDisplay/deletePost/DeletePost'
// import UpdatePost from '../postDisplay/updatePost/UpdatePost';
import { getAllPosts} from '../../lib/utils';

function PostIndex({ token }) { 
  const [posts, setPosts] = React.useState([]);

React.useEffect( () => {
  async function runEffect() {
    const allPosts = await getAllPosts(token);
    setPosts(allPosts);
  }
  runEffect();
},
);

return (
  <div>
    {posts.map((post) => {
      console.log(post);
      return <p>{post.text}</p>;
    })}
    <AddPost token={token} setPost={setPosts} />
  </div>
);
}

export default PostIndex;