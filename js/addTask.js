async function initAddTask() {
  includeHTML();
  setURL("http://gruppe-99.developerakademie.com/smallest_backend_ever-master");
  await loadAllTasks();
  await loadRegisterRequest();
  renderUserProfiles();
}

function renderUserProfiles() {
  for (let i = 0; i < allRegisteredUsers.length; i++) {
    document.getElementById("assignment-box").innerHTML += `
    <div class="profile-box" id="profile${i}">
        <span>${allRegisteredUsers[i].userData[0].firstName}</span>
        <span>${allRegisteredUsers[i].userData[0].lastName}</span>
        <img src="img/icon plus.png" class="plus-icon" onclick="saveSelectedUser(${i}), addSelectedUser();"/>
        <span id="name-container"></span>
    </div>
    `;
  }
}

function saveSelectedUser(indexOfselectedUser) {
  index = indexOfselectedUser;
  return index;
}

function addSelectedUser() {
  document.getElementById("assigned-to").innerHTML = "";
  document.getElementById("assigned-to").innerHTML = `   
  <span>${allRegisteredUsers[index].userData[0].firstName}</span>
  <span>${allRegisteredUsers[index].userData[0].lastName}</span>
  `;
}

function clearSelectedUser() {
  document.getElementById("assigned-to").innerHTML = "";
}

function getInputValues() {
  let title = document.getElementById("title-field").value;
  let description = document.getElementById("description-field").value;
  let date = document.getElementById("date-field").value;
  let urgency = document.getElementById("urgency-category").value;
  let category = document.getElementById("task-category").value;
  let fName = allRegisteredUsers[saveSelectedUser(index)].userData[0].firstName;
  let lName = allRegisteredUsers[saveSelectedUser(index)].userData[0].lastName;
  let img = allRegisteredUsers[saveSelectedUser(index)].userData[0].profileImg;
  let email = allRegisteredUsers[saveSelectedUser(index)].userData[0].email;
  let allInputValues = [title, description, date, urgency, category, fName, lName, img ,email,];
  return allInputValues;
}

function addTask(event) {
  event.preventDefault();
  let allInputValues = getInputValues();
  let task = {
    title: allInputValues[0],
    description: allInputValues[1],
    date: allInputValues[2],
    urgency: allInputValues[3],
    category: allInputValues[4],
    fName: allInputValues[5],
    lName: allInputValues[6],
    img: allInputValues[7],
    email: allInputValues[8],
    status: "todo",
  };
  allTasks.push(task);
  saveAllTasks();
  console.log("alltasks", allTasks);
  resetAddTask(); 
  alert("Task has been created");
}

function resetAddTask() {
  document.forms["addTask-form"].reset();
}


function NameSelector() {
  let nameSelection = document.getElementById("name-selection");
  nameSelection.classList.remove("d-none");
  document.getElementById("profile").style.justifyContent = "space-around";
}

// let profiles = [
//   {
//     "id": 0,
//     "name": "Peter",
//     "e-mail": "peter@t-online.de"
//   },
//   {
//     "id": 1,
//     "name": "Adilet",
//     "e-mail": "Adilet@t-online.de"
//   },
//   {
//     "id": 2,
//     "name": "Sebastian",
//     "e-mail": "sebastian@t-online.de"
//   },
// ]

// function changeUrgency(){
//     let urgency = document.getElementById('urgency-content');
//     if (urgency.classList.contains('d-none')){
//         urgency.classList.remove('d-none')
//     } else {
//         urgency.classList.add('d-none');
//     }
// }

// function highUrgency(){
//     document.getElementById('urgency-status-field').innerHTML = 'High';
//     document.getElementById('urgency-content').classList.add('d-none');
// }
// function mediumUrgency(){
//     document.getElementById('urgency-status-field').innerHTML = 'Medium';
//     document.getElementById('urgency-content').classList.add('d-none');
// }
// function lowUrgency(){
//     document.getElementById('urgency-status-field').innerHTML = 'Low';
//     document.getElementById('urgency-content').classList.add('d-none');
// }
