let selectedUsers = [];
let newTask;

async function initAddTask() {
  includeHTML();
  await getTasks();
  await getUsers();
  await getSubtasks();
  await renderUserProfiles();
}

function getInputValues() {
  newTask = {
    id: `${new Date().getTime()}`,
    title: document.getElementById('title-field').value,
    description: document.getElementById('description-field').value,
    due_date: document.getElementById('date-field').value,
    urgency: document.getElementById('urgency-category').value,
    category: document.getElementById('task-category').value,
    status: 'todo',
    users: selectedUsers
  };
  return newTask;
}

function addTask(event) {
  event.preventDefault();
  executeAddTask();
}

function executeAddTask() {
  let newTask = getInputValues();
  saveTasks(newTask);
  showAddSymbol();
  alert('Task has been created');
  resetAddTask();
}

async function renderUserProfiles() {
  document.getElementById('assignment-box').innerHTML = '';
  for (let i = 0; i < newUsers.length; i++) {
    let plusIcon = '';

    if (!selectedUsers.includes(newUsers[i].id)) {
      plusIcon = `<img id="plus${i}" src="img/icon-plus.png" class="plus-icon" onmouseover="addHighlight(${i})" onclick="pushSelectedUser(${i})"/>`;
    }

    document.getElementById('assignment-box').innerHTML += `
      <div class="profile-box" id="profile${i}">
          <span>${newUsers[i].first_name}</span>
          <span>${newUsers[i].last_name}</span>
          ${plusIcon}
      </div>
    `;
  }

  renderSelectedUsers();
}

function renderSelectedUsers() {
  document.getElementById('assigned-to').innerHTML = '';

  for (let i = 0; i < selectedUsers.length; i++) {
    let user = newUsers.find(u => u.id === selectedUsers[i]);

    if (user) {
      document.getElementById('assigned-to').innerHTML += `
        <div class="assigned-to-card">
          <span>${user.first_name}</span>
          <span>${user.last_name}</span>
          <img onclick="removeSelectedUser(${i})" class="minus-icon" src="img/minus.png">
        </div>
      `;
    }
  }
}

function pushSelectedUser(id) {
  let userID = newUsers[id].id;

  if (!selectedUsers.includes(userID)) {
    selectedUsers.push(userID);
    document.getElementById(`plus${id}`).style.visibility = 'hidden';
    renderSelectedUsers();
  }
}

function removeSelectedUser(index) {
  selectedUsers.splice(index, 1);
  renderSelectedUsers();
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

  selectedUsers = [];
  console.log(selectedUsers);
  renderSelectedUser();
  renderUserProfiles();
}
