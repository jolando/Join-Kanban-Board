let currentElement;
let todosArr;
let progressArr;
let testingArr;
let doneArr;

/**
 * Load tasks from backend
 */
async function initBoard() {
  includeHTML();
  await getTasks();
  await getUsers();
  renderTaskInfo();
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
  updateTask(tasks[currentElement]['status']);
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
          </div>
      </div>`;
}

/**
 * Delete current task
 *
 * @param {number} allTasksIndex
 */
function deleteBoardCard(taskId) {
  let task = allTasks.find((task) => task.id == taskId);
  let taskIndex = allTasks.indexOf(task);
  allTasks.splice(taskIndex, 1);
  // saveAllTasks();
  renderTaskInfo();
}
