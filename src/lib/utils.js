//This function fetches AllProfiless from server
export async function getAllProfiles(token) {
  const getAllProfilesRoute = "http://127.0.0.1:4000/room/list";
  console.log("testing this get all profiles function!");

  const response = await fetch(getAllProfilesRoute, {
    headers: new Headers({
      "content-type": "application/json",
      Authorization: token,
    }),
    method: "GET",
  });

  const results = await response.json();
  return results.getAllProfiles;
}

//This function fetches AllPosts in a specific room from server
export async function getAllPosts(token) {
  const getAllPostsRoute = "http://127.0.0.1:4000/message/list/:id";
  console.log("testing this get all posts in a profile function!");

  const response = await fetch(getAllPostsRoute, {
    headers: new Headers({
      "content-type": "application/json",
      Authorization: token,
    }),
    method: "GET",
  });

  const results = await response.json();
  return results.getAllPosts;
}