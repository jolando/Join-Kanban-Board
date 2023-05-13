let tasks;
let newUsers;

async function getTasks() {
  try {
    let response = await fetch('https://sebastianseitz36.pythonanywhere.com/tasks/');
      tasks = await response.json();
    if (!response.ok)
      throw new Error("Response not ok");
    console.log(tasks);
  } catch (error) {
    console.error(error);
  }
}

async function getSubtasks() {
  try {
    let response = await fetch('https://sebastianseitz36.pythonanywhere.com/subtasks/');
      subtasks = await response.json();
    if (!response.ok)
      throw new Error("Response not ok");
    console.log(subtasks);
  } catch (error) {
    console.error(error);
  }
}
async function getUsers() {
  try {
    let response = await fetch('https://sebastianseitz36.pythonanywhere.com/users/');
      newUsers = await response.json();
    if (!response.ok)
      throw new Error("Response not ok");
    console.log(newUsers);
  } catch (error) {
    console.error(error);
  }
}


/**
 * Javascript Code Snippet to send post request from frontend to backend
 */

function saveTasks(task){
let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

let currentTask = JSON.stringify(task);

let requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: currentTask,
  redirect: 'follow'
};

fetch("https://sebastianseitz36.pythonanywhere.com/tasks/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

function saveSubtasks(subtask){
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let currentSubtask = JSON.stringify(subtask);

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: currentSubtask,
    redirect: 'follow'
  };

  fetch("https://sebastianseitz36.pythonanywhere.com/subtasks/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  }

function saveUser(user){
let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

let currentUser = JSON.stringify(user);

let requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: currentUser,
  redirect: 'follow'
};

fetch("https://sebastianseitz36.pythonanywhere.com/users/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

function updateTask(task){
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let payload = JSON.stringify(task);

  let requestOptions = {
    method: 'PATCH',
    headers: myHeaders,
    body: payload,

  };

  fetch(`https://sebastianseitz36.pythonanywhere.com/tasks/${task.id}/`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  }

  function updateSubtask(subtask){
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let payload = JSON.stringify(subtask);

    let requestOptions = {
      method: 'PATCH',
      headers: myHeaders,
      body: payload,

    };

    fetch(`https://sebastianseitz36.pythonanywhere.com/subtasks/${subtask.id}/`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    }

  function deleteTask(taskId){
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
    };

    fetch(`https://sebastianseitz36.pythonanywhere.com/tasks/${taskId}/`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    }