const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const ul = document.querySelector("ul");
  const display = document.querySelector("#list").value;
  ul.innerHTML += "<li>" + display + "</li>";
});
