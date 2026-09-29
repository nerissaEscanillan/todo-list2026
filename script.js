const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const ul = document.querySelector("ul");
  const display = document.querySelector("#list").value;
  ul.innerHTML += "<li>" + display + "</li>";
  document.querySelector("#list").value = "";
  addClickList();
});

function addClickList() {
  const listElements = document.querySelectorAll("li");
  listElements.forEach((element) => {
    element.addEventListener("click", () => {
      element.classList.toggle("done");
    });
  });
}
addClickList();
