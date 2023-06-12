function createTasks() {
  const userInput = document.getElementById("userInput").value;
  const taskText = document.createElement("div");
  const container = document.getElementById("taskContainer");
  taskText.textContent = userInput;

  const createCheckBox = document.createElement("input");
  createCheckBox.type = "checkBox";

  createCheckBox.addEventListener("change", function () {
    if (createCheckBox.checked) {
      console.log("Checkbox is checked");
      createCheckBox.style.accentColor = "green";
    } else {
      console.log("Checkbox is unchecked");
    }
  });

  container.appendChild(taskText);
  taskText.appendChild(createCheckBox);

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
