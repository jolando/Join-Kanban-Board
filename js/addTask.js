async function initAddTask() {
  includeHTML();
  setURL("http://gruppe-99.developerakademie.com/smallest_backend_ever-master");
  await loadAllTasks();
  await saveRegisterRequest();
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
        <span id="name-container"></span>
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
  let title = document.getElementById("title-field").value;
  let description = document.getElementById("description-field").value;
  let date = document.getElementById("date-field").value;
  let urgency = document.getElementById("urgency-category").value;
  let category = document.getElementById("task-category").value;
  let fName = allRegisteredUsers[saveSelectedUser(index)].fName;
  let lName = allRegisteredUsers[saveSelectedUser(index)].lName;
  let email = allRegisteredUsers[saveSelectedUser(index)].email;
  let allInputValues = [title, description, date, urgency, category, fName, lName, email];
  return allInputValues;
}

/**
 * This function pushes the input values of the form into a global array and informs the user that a task has been created
 * @param {*} event -this is an onsubmit default event
 */

function addTask(event) {
  event.preventDefault();
  let allInputValues = getInputValues();
  let task = {
    id: `${(Math.random() * 99999).toFixed()}`,
    title: allInputValues[0],
    description: allInputValues[1],
    date: allInputValues[2],
    urgency: allInputValues[3],
    category: allInputValues[4],
    fName: allInputValues[5],
    lName: allInputValues[6],
    email: allInputValues[8],
    status: "todo",
  };
  allTasks.push(task);
  saveAllTasks();
  console.log("alltasks", allTasks);
  resetAddTask(); 
  alert("Task has been created");
}

/**
 * This functions resets the entire form after submitting
 */

function resetAddTask() {
  document.forms["addTask-form"].reset();
}





