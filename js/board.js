let currentElement;
let todosArr;
let progressArr;
let testingArr;
let doneArr;
let subtasks;
let subtask;

/**
 * Load tasks from backend
 */
async function initBoard() {
  includeHTML();
  getLoggedInUser();
  await getTasks();
  await getUsers();
  await getSubtasks();
  renderTaskInfo();
}

function getLoggedInUser() {
  let loggedInUser = localStorage.getItem('username');
  let userId = localStorage.getItem('userid');
  console.log("this is the current user:", loggedInUser);
  console.log("this is the current userid:", userId);
}

/**
 *  Refresh all tasks
 */
function renderTaskInfo() {
  filterAllTasks();
  renderTasks();
}

/**
 * Filters by task status
 */
function filterAllTasks() {
  todosArr = tasks.filter((t) => t.status == 'todo');
  progressArr = tasks.filter((t) => t.status == 'progress');
  testingArr = tasks.filter((t) => t.status == 'testing');
  doneArr = tasks.filter((t) => t.status == 'done');
}

/**
 * Render all tasks
 */
function renderTasks() {
  renderTask(todosArr, 'todo-container');
  renderTask(progressArr, 'progress-container');
  renderTask(testingArr, 'testing-container');
  renderTask(doneArr, 'done-container');
}

/**
 * Get the ids of the elements and save it in a global variable
 *
 * @param {number} id of every task
 */
function onDragTask(id) {
  console.log('do');
  tasks.forEach((task) => {
    if (task.id == id) {
      currentElement = tasks.indexOf(task);
    }
  });
}

/**
 * Changes the task status after dropping the task into another container
 *
 * @param {string} currentStatus equals the status in every container
 */
function dropTask(currentStatus) {
  tasks[currentElement]['status'] = currentStatus;
  let backendTaskID = tasks[currentElement]['id'];
  updateTask(tasks[currentElement]);
  renderTaskInfo();
}

/**
 * Render each container by task status
 *
 * @param {array} arr for each status
 * @param {string} containerId of the task container
 */
function renderTask(arr, containerId) {
  document.getElementById(containerId).innerHTML = '';
  for (let i = 0; i < arr.length; i++) {
    const taskObj = arr[i];
    document.getElementById(containerId).innerHTML += returnTaskHTML(taskObj);
    console.log(taskObj);
  }

  // saveTasks();
  // getTasks();
}

/**
 * Allow dropping
 *
 * @param {Event} ev drop event
 */
function allowDrop(ev) {
  ev.preventDefault();
}

/**
 * Create a HMTL task element
 *
 * @param {number} i
 * @param {object} taskObj
 * @returns created task
 */
function returnTaskHTML(taskObj) {
  let categoryColor = getRightCategoryColor(taskObj.category);
  let subtasksHTML = '';

  const matchingSubtasks = getSubtasksForTask(taskObj);
  for (let i = 0; i < matchingSubtasks.length; i++) {
    const subtask = matchingSubtasks[i];
    subtasksHTML += `<span>${subtask.title}</span>`;
  }
  return `
      <div id="task-unit${taskObj.id}" draggable="true"    ondragstart="onDragTask(${taskObj.id})" ontouchstart="onDragTask(${taskObj.id})"  class="task-unit">
          <div class="task-container">
              <span class="task-title" id="description-container" class="description-container"> ${taskObj.title}</span>
              <span id="task-title" > ${taskObj.description}</span>
              <div class="info-container">
                <span class=" extra-info ${categoryColor}">${taskObj.category}</span>
                <span class="extra-info">${taskObj.due_date}</span></span>
                <span class="extra-info">${taskObj.urgency}</span>
              </div>
              <img onclick="deleteBoardCard(${taskObj.id})" class="delete-icon" src="img/close-board.png">
              <div class="subtask-container">
              ${subtasksHTML}
              </div>
          </div>
      </div>`;
}

function getSubtasksForTask(taskObj) {
  let matchingSubtasks = [];
  for (let i = 0; i < subtasks.length; i++) {
    let subtask = subtasks[i];
    if (taskObj.subtasks.includes(subtask.id)) {
      matchingSubtasks.push(subtask);
    }
  }
  return matchingSubtasks;
}


/**
 * Delete current task
 *
 * @param {number} allTasksIndex
 */
function deleteBoardCard(taskId) {
  let task = tasks.find((task) => task.id == taskId);
  let taskIndex = tasks.indexOf(task);
  tasks.splice(taskIndex, 1);
  deleteTask(taskId);
  renderTaskInfo();
}

