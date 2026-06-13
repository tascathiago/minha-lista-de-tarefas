const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const list = document.querySelector("#task-list");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskText = input.value.trim();

  if (taskText === "") {
    return;
  }

  const item = document.createElement("li");
  item.textContent = taskText;

  list.appendChild(item);
  input.value = "";
});