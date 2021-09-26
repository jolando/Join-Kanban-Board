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
  getInputValues();
  renderUserProfiles();

  taskkk = {
    id: `${new Date().getTime()}`,
    title: document.getElementById("title-field").value,
    description: document.getElementById("description-field").value,
    date: document.getElementById("date-field").value,
    urgency: document.getElementById("urgency-category").value,
    category: document.getElementById("task-category").value,
    status: "todo",
    selectedId: [],
  };
}

/**
 * this function saves the values of the form input fields into variables
 * @returns the input values of every form input field
 */
function getInputValues() {
  return {
    id: `${new Date().getTime()}`,
    title: document.getElementById("title-field").value,
    description: document.getElementById("description-field").value,
    date: document.getElementById("date-field").value,
    urgency: document.getElementById("urgency-category").value,
    category: document.getElementById("task-category").value,
    status: "todo",
    selectedId: [],
  };
}

/**
 * this function saves the values of the form input fields into variables
 * @returns the input values of every form input field
 */

/**
 * This function pushes the input values of the form into a global array and informs the user that a task has been created
 * @param {*} event -this is an onsubmit default event
 */
async function addTask(event) {
  event.preventDefault();

  // let task = getInputValues();
  allTasks.push(getInputValues());

  saveAllTasks();
  resetAddTask();
  document.getElementById("assigned-to").innerHTML = "";
  showAddSymbol();
  alert("Task has been created");
}

/**
 * This function displays the users who are saved in the backend
 */
function renderUserProfiles() {
  document.getElementById("assignment-box").innerHTML = "";
  for (let i = 0; i < allRegisteredUsers.length; i++) {
    let v = "";
    if (selectedUser.find((user) => user.id == allRegisteredUsers[i].id)) {
      v = "hidden";
    }
    document.getElementById("assignment-box").innerHTML += `
    <div class="profile-box" id="profile${i}">
        <span>${allRegisteredUsers[i].firstName}</span>
        <span>${allRegisteredUsers[i].lastName}</span>
        <img id="plus${i}" src="img/icon-plus.png" class="plus-icon  ${v}" onmouseover="addHighlight(${i})" onclick="pushSelectedUser(${i});"/>

    </div>
    `;
  }
}

/**
 * this function adds the selected user to a separate box in order to highlight them
 */

function pushSelectedUser(id) {
  let profile = {
    fName: `${allRegisteredUsers[id].firstName}`,
    lName: `${allRegisteredUsers[id].lastName}`,
    email: `${allRegisteredUsers[id].email}`,
  };

  selectedUser.push(allRegisteredUsers[id]);

  getInputValues().selectedId.push(profile);

  document.getElementById("plus" + id).style = "visibility: hidden;";

  addSelectedUser();
}

function addSelectedUser() {
  document.getElementById("assigned-to").innerHTML = "";
  for (let i = 0; i < selectedUser.length; i++) {
    document.getElementById("assigned-to").innerHTML += `
    <div id="selected${i}" class="assigned-to-card">   

      <span>${selectedUser[i].firstName}</span>
      <span>${selectedUser[i].lastName}</span>

      <img onclick="removeSelectedUser(${i})" class="minus-icon" src="img/minus.png">
    <div>
   `;
  }
}

function removeSelectedUser(index) {
  selectedUser.splice(index, 1);
  // document.getElementById("plus" + index).style.visibility = "visible";
  console.log(selectedUser);
  addSelectedUser();
  renderUserProfiles();
}

/**
 * shows the pulse icons again after a task has been created
 */
function showAddSymbol() {
  let addicons = document.getElementsByClassName("plus-icon");
  for (let i = 0; i < addicons.length; i++) {
    const addicon = addicons[i];
    addicon.style.visibility = "visible";
  }
}

/**
 * highlights the selected user when hovering over the plus sign
 *
 * @param {Number} i index of allRegisteredUsers
 */
function addHighlight(i) {
  let highLight = document.getElementById("profile" + i);
  highLight.style.backgroundColor = "#dce0dd";
  highLight.addEventListener("mouseout", () => {
    highLight.style.backgroundColor = "white";
  });
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
 * this function removes the selected user from the separate box again
 */
function clearSelectedUser() {
  document.getElementById("assigned-to").innerHTML = "";
}

/**
 * This functions resets the entire form after submitting
 */
function resetAddTask() {
  document.forms["addTask-form"].reset();
}
