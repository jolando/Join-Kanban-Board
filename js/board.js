let currentElement;

async function initBoard() {
  includeHTML();
  setURL("http://gruppe-99.developerakademie.com/smallest_backend_ever-master");
  await loadAllTasks();
  await loadRegisterRequest();
  renderTaskInfo();
}

function renderTaskInfo() {
  renderTodoContainer();
  renderProgressContainer();
  renderTestingContainer();
  renderDoneContainer();
}

function renderTodoContainer() {
  let todos = allTasks.filter((t) => t.status == "todo");
  console.log(todos);
  document.getElementById("todo-container").innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    const todoTask = todos[i];
    document.getElementById("todo-container").innerHTML += returnTaskHTML(
      i,
      todoTask
    );
    console.log(todoTask);
  }
}

function renderProgressContainer() {
  let progress = allTasks.filter((t) => t.status == "progress");
  console.log(progress);
  document.getElementById("progress-container").innerHTML = "";
  for (let i = 0; i < progress.length; i++) {
    const progressTask = progress[i];
    document.getElementById("progress-container").innerHTML += returnTaskHTML(
      i,
      progressTask
    );
    console.log(progressTask);
  }
}

function renderTestingContainer() {
  let testing = allTasks.filter((t) => t.status == "testing");
  console.log(testing);
  document.getElementById("testing-container").innerHTML = "";
  for (let i = 0; i < testing.length; i++) {
    const testingTask = testing[i];
    document.getElementById("testing-container").innerHTML += returnTaskHTML(
      i,
      testingTask
    );
    console.log(testingTask);
  }
}
function renderDoneContainer() {
  let done = allTasks.filter((t) => t.status == "done");
  console.log(done);
  document.getElementById("done-container").innerHTML = "";
  for (let i = 0; i < done.length; i++) {
    const doneTask = done[i];
    document.getElementById("done-container").innerHTML = returnTaskHTML(
      i,
      doneTask
    );
    console.log(doneTask);
  }
}

function dragTask(index) {
  currentElement = index;
}

function dropTask(currentStatus) {
  allTasks[currentElement].status = currentStatus;
  console.log(allTasks[currentElement]);
  renderTaskInfo();
}

function allowDrop(ev) {
  ev.preventDefault();
}

function returnTaskHTML(index, taskStatus) {
  let cardCategory = allTasks[index].category;
  let cardDate = allTasks[index].date;
  let cardUrgency = allTasks[index].urgency;
  let categoryColor = getRightCategoryColor(cardCategory);
  return `
    <div id="task-unit${index}" draggable="true" ondragstart="dragTask(${index})" class="task-unit">
        <div class="task-container">
            <span class="task-title" id="description-container" class="description-container"> ${allTasks[index].title}</span>
            <span id="task-title" > ${allTasks[index].description}</span>
            <div class="info-container">
              <span class="${categoryColor} extra-info">${cardCategory}</span>
              <span class="extra-info">${cardDate}</span></span>
              <span class="extra-info">${cardUrgency}</span>
            </div>
            <img onclick="deleteBoardCard(${index})" class="delete-icon" src="img/close-board.png">
        </div>
    </div>`;
}

function deleteBoardCard(allTasksIndex) {
  allTasks.splice(allTasksIndex, 1);
  saveAllTasks();
  loadAllTasks();
  document.getElementById("task-unit" + allTasksIndex).style = "display: none;";
}
