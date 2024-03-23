const title = document.querySelector(".post-title");
const content = document.querySelector(".post-content");
const username = document.querySelector(".post-username");
const blogPostsSection = document.querySelector(".blog-posts");

const existingPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];

existingPosts.forEach((post) => {
  const newPostDiv = document.createElement("div");
  newPostDiv.classList.add("post");

  newPostDiv.innerHTML = `
      <div>
        <h2 class="post-title">${post.title}</h2>
        <p class="post-content">${post.content}</p>
      </div>
      <p>Posted By: <span class="post-username">${post.username}</span></p>
    `;

  blogPostsSection.appendChild(newPostDiv);
});
