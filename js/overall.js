let allTasks = [];


function getTaskInfo() {
  let allTasksAsString = localStorage.getItem("allTasks");
  allTasks = JSON.parse(allTasksAsString);
  console.log(allTasks);
  
}

