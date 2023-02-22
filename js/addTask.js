let selectedUsers = [
  // {
  //   "email": '',
  //   "first_name": '',
  //   "last_name": '',
  // }
];
let uniqueUserIDs;
let newTask;


async function initAddTask() {
  includeHTML();
  await getTasks();
  await getUsers();
  await renderUserProfiles();
  // await loadRegisterRequest();
}

/**
 * This function saves the values of the form input fields into variables
 * @returns the input values of every form input field
 */
function getInputValues() {
  newTask = {
    id: `${new Date().getTime()}`,
    title: document.getElementById('title-field').value,
    description: document.getElementById('description-field').value,
    due_date: document.getElementById('date-field').value,
    urgency: document.getElementById('urgency-category').value,
    category: document.getElementById('task-category').value,
    // status: 'todo',
    // selectedId: [],
    user: {
      "id": selectedUsers,
    }
  };
  return newTask;
}

/**
 * This function pushes the input values of the form into a global array and informs the user that a task has been created
 * @param {*} event -this is an onsubmit default event
 */
function addTask(event) {
  event.preventDefault();
  // if (selectedUser.length == 0) {
  //   alert('You have to choose at least one user');
  // } else {
    executeAddTask();
  // }
}

/**
 * This function creates a task and clears the input fields
 *
 */
function executeAddTask() {
  let newTask = getInputValues();
  // task.selectedId = selectedUser.map((u) => u.id);
  // allTasks.push(task);
  // saveAllTasks();
  // tasks.push(task);
  saveTasks(newTask);
  showAddSymbol();
  alert('Task has been created');
}

/**
 * This function displays the users who are saved in the backend
 */
async function renderUserProfiles() {
  document.getElementById('assignment-box').innerHTML = '';
  for (let i = 0; i < newUsers.length; i++) {

    document.getElementById('assignment-box').innerHTML += `
    <div class="profile-box" id="profile${i}">
        <span>${newUsers[i].first_name}</span>
        <span>${newUsers[i].last_name}</span>
        <img id="plus${i}" src="img/icon-plus.png" class="plus-icon" onmouseover="addHighlight(${i})" onclick="pushSelectedUser(${i});"/>
    </div>
    `;
  }
}

/**
 * This function pushes the id of a registeredUser into the "selectedUser" array
 */
function pushSelectedUser(id) {
  let userID = newUsers[id].id;
  selectedUsers.push(userID);
  // filterUserArray();
  document.getElementById('plus' + id).style = 'visibility: hidden;';
  renderSelectedUser(id);
}

// function filterUserArray(){
//   uniqueUserIDs = selectedUsers.filter((item, i, ar) => ar.indexOf(item) === i);
// }

//1. Get users List users

/**
 * This function adds the selected user to a separate box in order to highlight them
 */
function renderSelectedUser(id) {
  // document.getElementById('assigned-to').innerHTML = '';
    document.getElementById('assigned-to').innerHTML += `
    <div id="selected${id}" class="assigned-to-card">
      <span>${newUsers[id].first_name}</span>
      <span>${newUsers[id].last_name}</span>
      <img onclick="removeSelectedUser(${id})" class="minus-icon" src="img/minus.png">
    <div>
   `;

}

/**
 *Deletes the selected users
 *
 * @param {index} index of allRegisteredUsers
 */
function removeSelectedUser(index) {
  selectedUsers.splice(index, 1);
  console.log(selectedUsers);
  renderSelectedUser();
  renderUserProfiles();
}

/**
 * Shows the pulse icons again after a task has been created
 */
function showAddSymbol() {
  let addicons = document.getElementsByClassName('plus-icon');
  for (let i = 0; i < addicons.length; i++) {
    const addicon = addicons[i];
    addicon.style.visibility = 'visible';
  }
}

/**
 * Highlights the selected user when hovering over the plus sign
 *
 * @param {Number} i index of allRegisteredUsers
 */
function addHighlight(i) {
  let highLight = document.getElementById('profile' + i);
  highLight.style.backgroundColor = '#dce0dd';
  highLight.addEventListener('mouseout', () => {
    highLight.style.backgroundColor = 'white';
  });
}

/**
 *
 * @param {integer} indexOfselectedUser - stands for the index of the selected users
 * @returns
 * This function saves the index of the selected users into the global variable index
 */
function saveSelectedUser(indexOfselectedUser) {
  index = indexOfselectedUser;
  return index;
}

/**
 * This functions resets the entire form after submitting
 */
function resetAddTask() {
  document.forms['addTask-form'].reset();
  document.getElementById('assigned-to').innerHTML = '';

  selectedUser = [];
  console.log(selectedUser);
  renderSelectedUser();
  renderUserProfiles();
}
