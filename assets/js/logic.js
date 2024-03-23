const modeEl = document.querySelector("#mode-selector");
const logo = document.querySelector(".logo");
const form = document.querySelector(".form");

// listens for when the dark/light mode selector is clicked
modeEl.addEventListener("click", () => {
  const body = document.body;
  // adds the class dark to the body to apply different styles
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeEl.textContent = "dark";
    logo.src = "./assets/imgs/dark-bitcoin.png";
  } else {
    modeEl.textContent = "light";
    logo.src = "./assets/imgs/bitcoin.png";
  }
});
