let currentElement;

let todosArr;
let progressArr;
let testingArr;
let doneArr;

/**
 * load tasks from backend
 */
async function initBoard() {
  includeHTML();
  setURL("http://gruppe-99.developerakademie.com/smallest_backend_ever-master");
  await loadAllTasks();
  await loadRegisterRequest();
  renderTaskInfo();
}

/**
 *  refresh all tasks
 */
function renderTaskInfo() {
  filterAllTasks();
  renderTasks();
}

/**
 * filters by task status
 */
function filterAllTasks() {
  todosArr = allTasks.filter((t) => t.status == "todo");
  progressArr = allTasks.filter((t) => t.status == "progress");
  testingArr = allTasks.filter((t) => t.status == "testing");
  doneArr = allTasks.filter((t) => t.status == "done");
}

/**
 * render all tasks
 */
function renderTasks() {
  renderTask(todosArr, "todo-container");
  renderTask(progressArr, "progress-cssssssssontainer");
  renderTask(testingArr, "testing-container");
  renderTask(doneArr, "done-container");
}

/**
 * get the ids of the elements and save it in a global variable
 *
 * @param {number} id of every task
 */
function onDragTask(id) {
  allTasks.forEach((task) => {
    if (task.id == id) {
      currentElement = allTasks.indexOf(task);
    }
  });
}

/**
 * changes the task status after dropping the task into another container
 *
 * @param {String} currentStatus equals the status in every container
 */
function dropTask(currentStatus) {
  allTasks[currentElement]["status"] = currentStatus;
  renderTaskInfo();
}

/**
 * render each container by task status
 *
 * @param {Array} arr for each status
 * @param {String} containerId of the task container
 */
function renderTask(arr, containerId) {
  document.getElementById(containerId).innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    const taskObj = arr[i];
    document.getElementById(containerId).innerHTML += returnTaskHTML(taskObj);
    console.log(taskObj);
  }
  saveAllTasks();
  loadAllTasks();
}

/**
 * allow dropping
 *
 * @param {Event} ev drop event
 */
function allowDrop(ev) {
  ev.preventDefault();
}

/**
 * create a HMTL task element
 *
 * @param {*} i
 * @param {*} taskObj
 * @returns created task
 */
function returnTaskHTML(taskObj) {
  let categoryColor = getRightCategoryColor(taskObj.category);
  return `
      <div id="task-unit${taskObj.id}" draggable="true" ondragstart="onDragTask(${taskObj.id})" class="task-unit">
          <div class="task-container">
              <span class="task-title" id="description-container" class="description-container"> ${taskObj.title}</span>
              <span id="task-title" > ${taskObj.description}</span>
              <div class="info-container">
                <span class=" extra-info ${categoryColor}">${taskObj.category}</span>
                <span class="extra-info">${taskObj.date}</span></span>
                <span class="extra-info">${taskObj.urgency}</span>
              </div>
              <img onclick="deleteBoardCard(${taskObj.id})" class="delete-icon" src="img/close-board.png">
          </div>
      </div>`;
}

/**
 * delete current task
 *
 * @param {Number} allTasksIndex
 */
function deleteBoardCard(taskId) {
  let task = allTasks.find((task) => task.id == taskId);
  let taskIndex = allTasks.indexOf(task);
  allTasks.splice(taskIndex, 1);
  saveAllTasks();
  renderTaskInfo();
}
