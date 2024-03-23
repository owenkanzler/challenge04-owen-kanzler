const modeEl = document.querySelector("#mode-selector");
const logo = document.querySelector(".logo");
const form = document.querySelector(".form");

modeEl.addEventListener("click", () => {
  const body = document.body;
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeEl.textContent = "dark";
    logo.src = "./assets/imgs/dark-bitcoin.png";
  } else {
    modeEl.textContent = "light";
    logo.src = "./assets/imgs/bitcoin.png";
  }

  form.classList.toggle("dark");
});
