function getUserFromPostId(postId) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => {
      if (response.ok) return response.json();
      else throw new Error(`Can not find post by id = ${postId}`);
    })
    .then(json =>  fetch(`https://jsonplaceholder.typicode.com/users/${json.userId}`))
    .then(response => {
      if (response.ok) return response.json();
      else throw new Error(`Can not find user by user post id = ${postId}`);
    })
    .then(json => console.log(json.name))
    .catch(reason => {
      console.log(`Error: ${reason}`);
    })
}

getUserFromPostId(50);