const usernameInput = document.querySelector("#username");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
const createPostButton = document.querySelector("#create-post");
const msgDiv = document.querySelector("#msg");

// displays a message for when the form is submitted
function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

// Listens for when the button is clicked and handles the form submit
createPostButton.addEventListener("click", function (event) {
  event.preventDefault();

  // creates a new blog post object with the form information
  const blogPost = {
    username: usernameInput.value,
    title: titleInput.value,
    content: contentInput.value,
  };

  // checks to see if the user left any form inputs empty
  if (usernameInput.value === "") {
    displayMessage("error", "Username cannot be blank");
  } else if (titleInput.value === "") {
    displayMessage("error", "Title cannot be blank");
  } else if (contentInput.value === "") {
    displayMessage("error", "Content cannot be blank");
  } else {
    // either retrieves an existing array of blog posts or creates an empty one
    const existingPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    // pushs the new post to the front of the array
    existingPosts.unshift(blogPost);
    // sets the updated array of posts to local storage
    localStorage.setItem("blogPosts", JSON.stringify(existingPosts));
    displayMessage("success", "Success");
    window.location.href = "blog.html";
  }

  // clears the form values
  usernameInput.value = "";
  titleInput.value = "";
  contentInput.value = "";
});
