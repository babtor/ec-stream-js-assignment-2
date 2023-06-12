function createTasks() {
  const userInput = document.getElementById("userInput").value;

  const createInputDescription = document.createElement("input");
  createInputDescription.placeholder = "Describe your task";
  createInputDescription.type = "text";
  createInputDescription.id = "inputDesc";

  const descButton = document.createElement("button");
  descButton.textContent = "Post description";
  descButton.addEventListener("click", function () {
    let userInputDescription = document.getElementById("inputDesc").value;
    let descriptionDiv = document.createElement("div");
    descriptionDiv.textContent = userInputDescription;
    taskText.appendChild(descriptionDiv);
    createInputDescription.remove();
    descButton.remove();
  });

  let taskComplete = false;
  const taskText = document.createElement("div");
  taskText.textContent = userInput;
  const container = document.getElementById("taskContainer");

  const createCheckBox = document.createElement("input");
  createCheckBox.type = "checkbox";

  createCheckBox.addEventListener("change", function () {
    if (createCheckBox.checked) {
      console.log("Checkbox is checked");
      createCheckBox.style.accentColor = "green";
      taskComplete = true;
    } else {
      taskComplete = false;
      console.log("Checkbox is unchecked");
    }
  });

  container.appendChild(taskText);
  taskText.appendChild(createCheckBox);
  taskText.appendChild(createInputDescription);
  taskText.appendChild(descButton);

  fetch("https://dummyjson.com/todos/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      todo: userInput,
      completed: taskComplete,
      userId: 5,
    }),
  })
    .then((res) => res.json())
    .then(console.log);
}
