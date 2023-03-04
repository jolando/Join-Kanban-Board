let tasks;
let newUsers;

async function getTasks() {
  try {
    let response = await fetch('http://127.0.0.1:8000/tasks/');
      tasks = await response.json();
    if (!response.ok)
      throw new Error("Response not ok");
    console.log(tasks);
  } catch (error) {
    console.error(error);
  }
}
async function getUsers() {
  try {
    let response = await fetch('http://127.0.0.1:8000/users/');
      newUsers = await response.json();
    if (!response.ok)
      throw new Error("Response not ok");
    console.log(newUsers);
  } catch (error) {
    console.error(error);
  }
}

// async function saveTasks(task) {
//   if (typeof task !== 'object') {
//     throw new Error('Task parameter is not a valid object');
//   }
//   try {
//     let response = await fetch('https://sebastianseitz36.pythonanywhere.com/tasks/',
//       { method: 'POST', body: task, headers: {'Content-Type': 'application/json'} } );
//     if (!response.ok)
//       throw new Error("Response not ok");
//     const tasks = await response.json();
//     console.log(tasks);
//   } catch (error) {
//     console.error(error);
//   }

// }

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

fetch("http://127.0.0.1:8000/tasks/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

function updateTask(tasks, id){
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let currentTask = JSON.stringify(tasks);

  let requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: currentTask,
    redirect: 'follow'
  };

  fetch(`http://127.0.0.1:8000/tasks/${id}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  }