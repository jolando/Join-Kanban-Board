let allTasks = [];


function getTaskInfo() {
  let allTasksAsString = localStorage.getItem("allTasks");
  allTasks = JSON.parse(allTasksAsString);
  console.log(allTasks);
  
}

function saveCreatedTasks() {
  let allTasksAsString = JSON.stringify(allTasks);
  localStorage.setItem("allTasks", allTasksAsString);
}


function deleteTask(allTasksIndex) {
  allTasks.splice(allTasksIndex, 1);
  saveCreatedTasks();
  getTaskInfo();
  document.getElementById('backlog-unit' + allTasksIndex).style = 'display: none;'
}

let isburgerMenuOpen = false;
function openBurgerMenu() {
  let burgerMenu = document.getElementById('dropDownMenu');
  if (isburgerMenuOpen) {
      burgerMenu.style.display ="none";
      isburgerMenuOpen = false;
  } else {
      burgerMenu.style.display ="flex";
      isburgerMenuOpen = true;
  }

}


