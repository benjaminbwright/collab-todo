// DEPENDENCIES
const newTodoForm = document.querySelector("#new-todo-form");

// USER INTERACTIONS
// a user submits the new todo form...
newTodoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("new todo form submitted");
});
