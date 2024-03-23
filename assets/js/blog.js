const title = document.querySelector(".post-title");
const content = document.querySelector(".post-content");
const username = document.querySelector(".post-username");
const blogPostsSection = document.querySelector(".blog-posts");

// gets the existing array of blogposts or creates an empty array
const existingPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];

// loops through each post in the array
existingPosts.forEach((post) => {
  // creates a div with the class name "post"
  const newPostDiv = document.createElement("div");
  newPostDiv.classList.add("post");

  // adds the html for the "post" div
  newPostDiv.innerHTML = `
      <div>
        <h2 class="post-title">${post.title}</h2>
        <p class="post-content">${post.content}</p>
      </div>
      <p>Posted By: <span class="post-username">${post.username}</span></p>
    `;

  // appends the posts to the blog post section
  blogPostsSection.appendChild(newPostDiv);
});
