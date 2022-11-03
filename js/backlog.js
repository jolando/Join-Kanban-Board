// window.onload = checkBacklogContainer;
window.onresize = checkBacklogContainer;

const ISWINDOW_WIDTH = 720;

/**
 * Will be executed when the backlog page is refreshed
 */
async function backlogInit() {
  includeHTML();

  setURL('https://gruppe-99.developerakademie.com/smallest_backend_ever-master');
  await loadRegisterRequest();
  await loadAllTasks();
  checkBacklogContainer();
}
/**
 * Provides the necessary information for the cards and updates them when they are deleted
 */
function checkBacklogContainer() {
  if (allTasks.length == 0) {
    document.getElementById('backlog').innerHTML =
      '<h2 class="empty-backlog">No Tasks</h2>';
  } else {
    executeRender();
  }
}

/**
 * If allTasks contains more than zero tasks execute render-function
 */
function executeRender() {
  document.getElementById('backlog').innerHTML = '';
  for (let i = 0; i < allTasks.length; i++) {
    renderBacklogCard(i);
    allTasks[i].selectedId.forEach((userId) => {
      let UserObject = allRegisteredUsers.find((user) => user.id == userId);
      let index = allRegisteredUsers.indexOf(UserObject);
      document.getElementById('user-information' + i).innerHTML += `
        <div class="underline">
            <span class='backlog-unit-name'>${allRegisteredUsers[index].firstName}</span>
            <span class='backlog-unit-name'>${allRegisteredUsers[index].lastName}</span>
        </div>`;
    });
  }
}

/**
 * Checks if you want to load responsive card or the normal one
 *
 * @param {String} index position of task in the array
 */
function renderBacklogCard(index) {
  let cardCategory = allTasks[index].category;
  let taskDescription = allTasks[index].description;
  let categoryColor = getRightCategoryColor(cardCategory);
  let switchDescription = checkDescription(taskDescription);

  if (window.innerWidth > ISWINDOW_WIDTH) {
    returnNormalCard(index, categoryColor, cardCategory, switchDescription);
  } else {
    returnResponsiveCard(index, categoryColor, switchDescription);
  }
}

/**
 * Returns the normal card
 *
 * @param {String} index position of task in the array
 * @param {String} colorClass name of the selected class
 * @param {String} description descrption text
 * @returns {String} normal card
 */
const returnResponsiveCard = (index, colorClass, description) => {
  document.getElementById('backlog').innerHTML += `
  <div id='backlog-unit${index}' class='backlog-unit ${colorClass}'>
          <span id='category-color' class='category-color ${colorClass}'></span>
          <div class='backlog-unit-content'>
              <div class='user-inforamtion-container'>
                   <div class='user-profile'>
                      <div id='user-information${index}' class='user-information'></div> 
                  </div>
                  <span id='description${index}' class='backlog-details'>${description}</span>
                  
                  <div class='delete-icon'>
                      <img onclick='deleteTask(${index})' src='img/trash2.png'> 
                  </div>
              </div>     
          </div>
      </div>
      `;
  return;
};

/**
 * Returns the responsive card
 *
 * @param {String} index position of task in the array
 * @param {String} colorClass name of the selected class
 * @param {String} category name of the department
 * @param {String} description descrption text
 * @returns {String} responsive card
 */
const returnNormalCard = (index, colorClass, category, description) => {
  document.getElementById('backlog').innerHTML += `
  <div id='backlog-unit${index}' class='backlog-unit'>
          <span id='category-color' class='category-color ${colorClass}'></span>
          <div class='backlog-unit-content'>
              <div class='user-inforamtion-container'>
                   <div class='user-profile'>
                    <div id='user-information${index}' class='user-information'></div> 
                  </div>
                  <div class='tast-information'>
                      <span class='category ${colorClass}'>${category}</span>
                      <span id='description${index}' class='backlog-details'>${description}</span>
                  </div>
                  <div class='delete-icon'>
                      <img onclick='deleteTask(${index})' src='img/trash.png'> 
                  </div>
              </div>     
          </div>
      </div>
      `;
  return;
};

/**
 * clear selected task and load the rest tasks again
 *
 * @param {String} allTasksIndex position of task in the array
 */
function deleteTask(allTasksIndex) {
  allTasks.splice(allTasksIndex, 1);
  saveAllTasks();
  saveRegisterRequest();
  document.getElementById('backlog-unit' + allTasksIndex).style =
    'display: none;';
  checkBacklogContainer();
}

/**
 * checks if the description is empty or not
 *
 * @param {String} rightDescription
 * @returns {String} if the description is empty load 'no description' otherwise load the actual description
 */
let checkDescription = (rightDescription) => {
  if (rightDescription == '') {
    return 'No Description';
  } else {
    return rightDescription;
  }
};
