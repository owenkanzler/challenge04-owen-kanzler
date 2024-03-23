const usernameInput = document.querySelector("#username");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
const createPostButton = document.querySelector("#create-post");
const msgDiv = document.querySelector("#msg");

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

createPostButton.addEventListener("click", function (event) {
  event.preventDefault();

  const blogPost = {
    username: usernameInput.value,
    title: titleInput.value,
    content: contentInput.value,
  };

  if (usernameInput.value === "") {
    displayMessage("error", "Username cannot be blank");
  } else if (titleInput.value === "") {
    displayMessage("error", "Title cannot be blank");
  } else if (contentInput.value === "") {
    displayMessage("error", "Content cannot be blank");
  } else {
    const existingPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    existingPosts.unshift(blogPost);
    localStorage.setItem("blogPosts", JSON.stringify(existingPosts));
    displayMessage("success", "Success");
    window.location.href = "blog.html";
  }

  usernameInput.value = "";
  titleInput.value = "";
  contentInput.value = "";
});
