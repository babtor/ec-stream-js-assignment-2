function createTasks() {
  const userInput = document.getElementById("userInput").value;
  const taskText = document.createElement("div");
  taskText.textContent = userInput;

  const container = document.getElementById("todoContainer");
  container.appendChild(taskText);

  fetch("https://dummyjson.com/todos/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      todo: userInput,
      completed: false,
      userId: 5,
    }),
  })
    .then((res) => res.json())
    .then(console.log);
}
