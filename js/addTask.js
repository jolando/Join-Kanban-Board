let profiles = [
  {
    "id": 0,
    "name": "Peter",
    "e-mail": "peter@t-online.de"
  },
  {
    "id": 1,
    "name": "Adilet",
    "e-mail": "Adilet@t-online.de"
  },
  {
    "id": 2,
    "name": "Sebastian",
    "e-mail": "sebastian@t-online.de"
  },
]
function initAddTask() {
  includeHTML();
  getTaskInfo();
  renderUserProfiles();

}

function NameSelector(){
  let nameSelection = document.getElementById('name-selection');
  nameSelection.classList.remove('d-none');
  document.getElementById('profile').style.justifyContent = "space-around";
}

function renderUserProfiles(){
  for (let i = 0; i < profiles.length; i++) {
    document.getElementById('assignment-box').innerHTML += `
    <div class="profile-box" id="profile">
    <img src="img/profile.png" class="task-profile-pic" />
    <div class="span-container" id="span-container${i}">
    <span>${profiles[i]['name']},&#160</span>
    <span>${profiles[i]['e-mail']}</span>
    </div>
    <img src="img/icon plus.png" class="plus-icon" onclick="selectUser(${i})"/>
    <span id="name-container"></span>
</div>
`  
  }

}

function selectUser(index){
  let user = {
    "id": index,
    "name": `${profiles[index].name}`,
    "e-mail": `${profiles[index]['e-mail']}`
  }
  document.getElementById(`span-container${index}`).classList.add('selected-user-box');
  document.getElementById(`span-container${index}`).style.color = "white";
  userCache.push(user);
  console.log(user);
  saveCreatedProfiles();
  getProfileInfo();
 
}

function addTask(event,) {
  event.preventDefault();
  let title = document.getElementById("title-field").value;
  let description = document.getElementById("description-field").value;
  let date = document.getElementById("date-field").value;
  let urgency = document.getElementById("urgency-category").value;
  let category = document.getElementById("task-category").value;
  //let profile = document.getElementById('task-category').value;

  //window.location.href = 'board.html';

  let task = {
    title: title,
    description: description,
    category: category,
    date: date,
    urgency: urgency,
    //'profile': profile
  };

  allTasks.push(task);
  console.log(allTasks);

  let allTasksAsString = JSON.stringify(allTasks);
  localStorage.setItem("allTasks", allTasksAsString);

  document.forms['addTask-form'].reset();

  //document.getElementById(`span-container${index}`).style.backgroundColor ="none";
  //document.getElementById(`span-container${index}`).style.color ="black";
}

