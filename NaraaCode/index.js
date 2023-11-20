const state = { tasks: [] };
function render() {
  console.log(state.tasks);
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";
  state.tasks.forEach((task) => {
    const taskItem = document.createElement("li");
    const taskLabel = document.createElement("span");
    const deleteButton = document.createElement("button");
    taskLabel.textContent = task.text;
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
      taskList.removeChild(taskItem);
    };
    taskItem.appendChild(taskLabel);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
    taskLabel.addEventListener("click", () => {
      task.completed = !task.completed;
      render();
    });
    taskLabel.style.textDecoration = task.completed ? "line-through" : "none";
  });
}
function addTask() {
  const newTaskInput = document.getElementById("new-task-input");
  const taskText = newTaskInput.value.trim();
  if (taskText !== "") {
    state.tasks.push({ text: taskText, completed: false });
    render();
    newTaskInput.value = "";
  }
}
