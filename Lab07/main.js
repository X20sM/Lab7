const text = document.querySelector("h1");
const button = document.querySelector("button");
const form = document.querySelector("form");
const input = document.querySelector("input");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    text.style.color = input.value.toLowerCase();
    input.value = "";
  });
}
