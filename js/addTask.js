let selectedUser = [];
let index;

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
        <img src="img/icon plus.png" class="plus-icon" onclick="saveSelectedUser(${i})"/>
        <span id="name-container"></span>
    </div>
  
`;
  }
}
function saveSelectedUser(indexOfselectedUser) {
  document.getElementById('assigned-to').innerHTML = "";
  document.getElementById('assigned-to').innerHTML = `   
  <span>${allRegisteredUsers[indexOfselectedUser].userData[0].firstName}</span>
  <span>${allRegisteredUsers[indexOfselectedUser].userData[0].lastName}</span>
  `
  index = indexOfselectedUser;
  return index;
}

function clearSelectedUser(){
  document.getElementById('assigned-to').innerHTML = "";
}


function addTask(event) {
  event.preventDefault();

  let title = document.getElementById("title-field").value;
  let description = document.getElementById("description-field").value;
  let date = document.getElementById("date-field").value;
  let urgency = document.getElementById("urgency-category").value;
  let category = document.getElementById("task-category").value;
  
  let task = {
    title: title,
    description: description,
    category: category,
    date: date,
    urgency: urgency,
    fName: `${
      allRegisteredUsers[saveSelectedUser(index)].userData[0].firstName
    }`,
    lName: `${
      allRegisteredUsers[saveSelectedUser(index)].userData[0].lastName
    }`,
    img: `${
      allRegisteredUsers[saveSelectedUser(index)].userData[0].profileImg
    }`,
    email: `${allRegisteredUsers[saveSelectedUser(index)].userData[0].email}`,
    status: 'todo',
  };

  console.log(task);

  allTasks.push(task);

  saveAllTasks();
  console.log("alltasks", allTasks);
  document.forms['addTask-form'].reset();
  clearSelectedUser();
  alert('Task has been created');
 
  // document.getElementById('name-selection').classList.add('d-none');
  // document.getElementById('profile').style.justifyContent = "flex-start";
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
