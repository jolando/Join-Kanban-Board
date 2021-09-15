window.onresize = checkBacklogContainer;

/**
 * will be executed when the backlog page is refreshed
 */
async function backlogInit() {
  includeHTML();
  setURL('http://gruppe-99.developerakademie.com/smallest_backend_ever-master')
  await loadRegisterRequest();
  await loadAllTasks();
  checkBacklogContainer();
  console.log('tasks', allTasks);
}

// window.onload = () => {
//   includeHTML();
//   getTaskInfo();
//   checkBacklogContainer();
//   console.log(allTasks);
// }

/**
 * provides the necessary information for the cards and updates them when they are deleted
 */
function checkBacklogContainer() {
  if (allTasks.length <= 0) { 
    showEmptyBacklog();
  } else {
   executeRenderFunction();
  }
}

/**
 * if allTasks contains zero tasks show "No Tasks"
 */
function showEmptyBacklog() {
  setTimeout(() => {
    document.getElementById("empty-backlog").innerHTML = "No Tasks";
  }, 1000);
}

/**
 * if allTasks contains more than zero tasks execute render-function
 */
function executeRenderFunction() {
  document.getElementById("backlog").innerHTML = "";
  for (let i = 0; i < allTasks.length; i++) {


    let cardCategory = allTasks[i].category;
    let taskDescription = allTasks[i].description;
    let switchDescription = checkDescription(taskDescription);
    let categoryColor = getRightCategoryColor(cardCategory);
    renderBacklogCard(i, categoryColor, cardCategory, switchDescription);
  }
}

/**
 * checks if you want to load responsive card or the normal one
 *
 * @param {String} index position of task in the array
 * @param {String} colorClass name of the selected class
 * @param {String} category name of the department
 * @param {String} description descrption text
 */
function renderBacklogCard(index, color, category, description) {
  if (window.innerWidth > 780) {
    returnNormalCard(index, color, category, description);
  } else {
    returnResponsiveCard(index, color, category, description);
  }
}

/**
 * returns the normal card
 *
 * @param {String} index position of task in the array
 * @param {String} colorClass name of the selected class
 * @param {String} description descrption text
 * @returns {String} normal card
 */
const returnResponsiveCard = (index, colorClass, description) => {
  document.getElementById("backlog").innerHTML += `
  <div id="backlog-unit${index}" class="backlog-unit ${colorClass}">
          <span id="category-color" class="category-color ${colorClass}"></span>
          <div class="backlog-unit-content">
              <div class="user-inforamtion-container">
                   <div class="user-profile">
                      <img class="profile-picture" src="img/profile.png">
                      <div class="user-information">
                          <span class="backlog-unit-name">${allTasks[index].firstName}</span>
                          <span class="backlog-unit-name">${allTasks[index].lastName}</span>
                          <a href="email" class="backlog-unit-email">contact@darrin.com</a>
                      </div> 
                  </div>
                  <div class="tast-information">
                      
                      <span id="description${index}" class="backlog-details">${description}</span>
                  </div>
                  <div class="delete-icon">
                      <img onclick="deleteTask(${index})" src="img/trash2.png"> 
                  </div>
              </div>     
          </div>
      </div>
      `;
  return;
};

/**
 * returns the responsive card
 *
 * @param {String} index position of task in the array
 * @param {String} colorClass name of the selected class
 * @param {String} category name of the department
 * @param {String} description descrption text
 * @returns {String} responsive card
 */
const returnNormalCard = (index, colorClass, category, description) => {
  document.getElementById("backlog").innerHTML += `
  <div id="backlog-unit${index}" class="backlog-unit">
          <span id="category-color" class="category-color ${colorClass}"></span>
          <div class="backlog-unit-content">
              <div class="user-inforamtion-container">
                   <div class="user-profile">
                      <img class="profile-picture" src="img/profile.png">
                      <div class="user-information">
                          <span class="backlog-unit-name">${allTasks[index].fName}</span>
                          <span class="backlog-unit-name">${allTasks[index].lName}</span>
                          <a href="email" class="backlog-unit-email">${allTasks[index].email}</a>
                      </div> 
                  </div>
                  <div class="tast-information">
                      <span class="category ${colorClass}">${category}</span>
                      <span id="description${index}" class="backlog-details">${description}</span>
                  </div>
                  <div class="delete-icon">
                      <img onclick="deleteTask(${index})" src="img/trash.png"> 
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
  allRegisteredUsers.splice(allTasksIndex, 1);
  saveAllTasks();
  saveRegisterRequest();
  loadAllTasks();
  loadRegisterRequest();
  document.getElementById("backlog-unit" + allTasksIndex).style =
    "display: none;";
  console.log(allTasksIndex);
  checkBacklogContainer();
}

/**
 * checks if the description is empty or not
 *
 * @param {String} rightDescription
 * @returns {String} if the description is empty load "no description" otherwise load the actual description
 */
let checkDescription = (rightDescription) => {
  if (rightDescription == "") {
    return "No Description";
  } else {
    return rightDescription;
  }
};

/**
 * checks which department the task is intended for
 *
 * @param {String} category is one of 4 different departments
 * @returns {String} retrun the right classname
 */
let getRightCategoryColor = (category) => {
  if (category == "Management") {
    return "management-color";
  }
  if (category == "Marketing") {
    return "marketing-color";
  }
  if (category == "Product") {
    return "product-color";
  }
  if (category == "Sales") {
    return "sales-color";
  }
};
