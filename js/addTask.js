const title = document.getElementById("title-field");
const description = document.getElementById("description-field");
const date = document.getElementById("date-field");
const urgency = document.getElementById("urgency-category");
const category = document.getElementById("task-category");
// const fName = allRegisteredUsers[saveSelectedUser(index)].fName;
// const lName = allRegisteredUsers[saveSelectedUser(index)].lName;
// const email = allRegisteredUsers[saveSelectedUser(index)].email;

async function initAddTask() {
  includeHTML();
  setURL("http://gruppe-99.developerakademie.com/smallest_backend_ever-master");
  await loadAllTasks();
  await loadRegisterRequest();
  renderUserProfiles();
}

/**
 * This function displays the users who are saved in the backend
 */
function renderUserProfiles() {
  for (let i = 0; i < allRegisteredUsers.length; i++) {
    document.getElementById("assignment-box").innerHTML += `
    <div class="profile-box" id="profile${i}">
        <span>${allRegisteredUsers[i].firstName}</span>
        <span>${allRegisteredUsers[i].lastName}</span>
        <img src="img/icon plus.png" class="plus-icon" onclick="saveSelectedUser(${i}), addSelectedUser();"/>
    </div>
    `;
  }
}

/**
 *
 * @param {integer} indexOfselectedUser - stands for the index of the selected users
 * @returns
 * this function saves the index of the selected users into the global variable index
 */
function saveSelectedUser(indexOfselectedUser) {
  index = indexOfselectedUser;
  return index;
}

/**
 * this function adds the selected user to a separate box in order to highlight them
 */
function addSelectedUser() {
  document.getElementById("assigned-to").innerHTML = "";
  document.getElementById("assigned-to").innerHTML = `   
  <span>${allRegisteredUsers[index].firstName}</span>
  <span>${allRegisteredUsers[index].lastName}</span>
  `;
}

/**
 * this function removes the selected user from the separate box again
 */
function clearSelectedUser() {
  document.getElementById("assigned-to").innerHTML = "";
}

/**
 * this function saves the values of the form input fields into variables
 * @returns the input values of every form input field
 */
function getInputValues() {
  return {
    id: `${(Math.random() * 99999).toFixed()}`,
    title: document.getElementById("title-field").value,
    description: document.getElementById("description-field").value,
    date: document.getElementById("date-field").value,
    urgency: document.getElementById("urgency-category").value,
    category: document.getElementById("task-category").value,
    fName: `${allRegisteredUsers[index].firstName}`,
    lName: `${allRegisteredUsers[index].lastName}`,
    email: allRegisteredUsers[saveSelectedUser(index)].email,
    status: "todo",
  };
}

function deliverAllRegisteredInfo() {
  for (let i = 0; i < allRegisteredUsers.length; i++) {
    const user = allRegisteredUsers[i].mail;
    
  }
}

/**
 * This function pushes the input values of the form into a global array and informs the user that a task has been created
 * @param {*} event -this is an onsubmit default event
 */
function addTask(event) {
  event.preventDefault();
  let task = getInputValues();
  allTasks.push(task);
  saveAllTasks();
  console.log("alltasks", allTasks);
  // resetAddTask();
  // alert("Task has been created");
  console.log("Task has been created");
}

/**
 * This functions resets the entire form after submitting
 */
function resetAddTask() {
  document.forms["addTask-form"].reset();
}
