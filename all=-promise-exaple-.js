const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users');
const fetchPosts = fetch('https://jsonplaceholder.typicode.com/posts');
const fetchComments = fetch('https://jsonplaceholder.typicode.com/comments');

// Run all fetch requests concurrently
Promise.all([fetchUsers, fetchPosts, fetchComments])
  .then(responses => {
    // Convert all to JSON
    return Promise.all(responses.map(res => res.json()));
  })
  .then(data => {
    const [users, posts, comments] = data;
    console.log("Users:", users);
    console.log("Posts:", posts);
    console.log("Comments:", comments);
  })
  .catch(error => {
    // If any of the promises fail, this will catch the error
    console.error("Error fetching data:", error);
  });
