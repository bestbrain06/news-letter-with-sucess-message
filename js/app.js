const form = document.querySelector("form");
const input = document.querySelector("input");
const error = document.querySelector("small");

const emailRegex = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]+)\w+/;

form.addEventListener("submit", (e) => {
  let validEmail = emailRegex.test(input.value);

  if (!validEmail) {
    error.textContent = " invalid  Email";
    input.style.borderColor = " hsl(4, 100%, 67%)";
  } else {
    error.textContent = "";
  }
});
