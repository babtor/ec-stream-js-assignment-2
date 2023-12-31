fetchCounter = 0;

function createTasks() {
  const userInput = document.getElementById("userInput").value;
  const fetchId = "task-" + fetchCounter;

  const createInputDescription = document.createElement("input");
  createInputDescription.placeholder = "Describe your task";
  createInputDescription.type = "text";
  createInputDescription.id = "inputDesc-" + fetchId;

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", function () {
    singleContainer.remove();
  });

  const descButton = document.createElement("button");
  descButton.textContent = "Post description";
  descButton.addEventListener("click", function () {
    let userInputDescription = document.getElementById(
      "inputDesc-" + fetchId
    ).value;
    let descriptionDiv = document.createElement("div");

    descriptionDiv.textContent = userInputDescription;
    descriptionDiv.id = "descriptionDiv" + fetchId;

    taskText.appendChild(descriptionDiv);

    createInputDescription.remove();
    descButton.remove();
  });

  let taskComplete = false;
  const taskText = document.createElement("div");
  taskText.id = "taskText";
  taskText.textContent = userInput + ":";

  const taskStatus = document.createElement("div");

  const container = document.getElementById("taskContainer");
  const singleContainer = document.createElement("div");
  singleContainer.id = "singleContainer";
  const checkBoxContainer = document.createElement("div");

  const createCheckBox = document.createElement("input");
  createCheckBox.type = "checkbox";

  createCheckBox.addEventListener("change", function () {
    if (this.checked) {
      console.log("Checkbox is checked");
      createCheckBox.style.accentColor = "green";
      taskComplete = true;
      taskStatus.textContent = "Task completed";
      createEndDate();
    } else {
      taskComplete = false;
      taskStatus.textContent = "Task unfinished";
      console.log("Checkbox is unchecked");
      removeDate();
    }
  });

  let today = new Date();
  let year = today.getFullYear().toString().padStart(2, "0");
  let month = today.getMonth().toString().padStart(2, "0");
  let day = today.getDate().toString().padStart(2, "0");
  let currentDate = year + "-" + month + "-" + day;
  let dateDivEnd = document.createElement("div");
  dateDivEnd.id = "dates";
  dateDivEnd.textContent = currentDate;
  let dateDivStart = document.createElement("div");
  dateDivStart.id = "dates";
  dateDivStart.textContent = currentDate;

  function createStartDate() {
    singleContainer.appendChild(dateDivStart);
  }

  function createEndDate() {
    singleContainer.appendChild(dateDivEnd);
  }

  function removeDate() {
    dateDivEnd.remove();
  }

  createStartDate();
  container.appendChild(singleContainer);
  singleContainer.appendChild(taskText);
  taskText.appendChild(createInputDescription);
  singleContainer.appendChild(descButton);
  singleContainer.appendChild(removeButton);
  singleContainer.appendChild(checkBoxContainer);
  checkBoxContainer.appendChild(createCheckBox);
  singleContainer.appendChild(taskStatus);

  fetchCounter++;

  fetch("https://dummyjson.com/todos/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      todo: userInput,
      completed: taskComplete,
      userId: fetchCounter,
    }),
  })
    .then((res) => res.json())
    .then(console.log);
}
