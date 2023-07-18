// let tasks;
// let newUsers;

// async function getTasks() {
//   try {
//     let response = await fetch('https://sebastianseitz36.pythonanywhere.com/tasks/');
//     tasks = await response.json();
//     if (!response.ok)
//       throw new Error("Response not ok");
//     console.log(tasks);
//   } catch (error) {
//     console.error(error);
//   }
// }

// async function getSubtasks() {
//   try {
//     let response = await fetch('https://sebastianseitz36.pythonanywhere.com/subtasks/');
//     subtasks = await response.json();
//     if (!response.ok)
//       throw new Error("Response not ok");
//     console.log(subtasks);
//   } catch (error) {
//     console.error(error);
//   }
// }
// async function getUsers() {
//   try {
//     let response = await fetch('https://sebastianseitz36.pythonanywhere.com/users/');
//     newUsers = await response.json();
//     if (!response.ok)
//       throw new Error("Response not ok");
//     console.log(newUsers);
//   } catch (error) {
//     console.error(error);
//   }
// }


// /**
//  * Javascript Code Snippet to send post request from frontend to backend
//  */

// function saveTasks(task) {
//   let myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");

//   let currentTask = JSON.stringify(task);

//   let requestOptions = {
//     method: 'POST',
//     headers: myHeaders,
//     body: currentTask,
//     redirect: 'follow'
//   };

//   return fetch("https://sebastianseitz36.pythonanywhere.com/tasks/", requestOptions)
//     .then(response => response.json());
// }

// function saveSubtasks(subtask) {
//   let myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");

//   let currentSubtask = JSON.stringify(subtask);

//   let requestOptions = {
//     method: 'POST',
//     headers: myHeaders,
//     body: currentSubtask,
//     redirect: 'follow'
//   };

//   fetch("https://sebastianseitz36.pythonanywhere.com/subtasks/", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
// }

// function saveUser(user) {
//   let myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");

//   let currentUser = JSON.stringify(user);

//   let requestOptions = {
//     method: 'POST',
//     headers: myHeaders,
//     body: currentUser,
//     redirect: 'follow'
//   };

//   fetch("https://sebastianseitz36.pythonanywhere.com/users/", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
// }

// function updateTask(task) {
//   let myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");

//   let payload = JSON.stringify(task);

//   let requestOptions = {
//     method: 'PATCH',
//     headers: myHeaders,
//     body: payload,

//   };

//   fetch(`https://sebastianseitz36.pythonanywhere.com/tasks/${task.id}/`, requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
// }

// function updateSubtask(subtask) {
//   let myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");

//   let payload = JSON.stringify(subtask);

//   let requestOptions = {
//     method: 'PATCH',
//     headers: myHeaders,
//     body: payload,

//   };

//   fetch(`https://sebastianseitz36.pythonanywhere.com/subtasks/${subtask.id}/`, requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
// }

// function deleteTask(taskId) {
//   let myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");

//   let requestOptions = {
//     method: 'DELETE',
//     headers: myHeaders,
//   };

//   fetch(`https://sebastianseitz36.pythonanywhere.com/tasks/${taskId}/`, requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
// }

let tasks;
let newUsers;
let loggedInUser;

async function getTasks() {
  try {
    let response = await fetch("http://127.0.0.1:8000/tasks/");
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
    let response = await fetch('http://127.0.0.1:8000/subtasks/');
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
    let response = await fetch('http://127.0.0.1:8000/users/');
    newUsers = await response.json();
    if (!response.ok)
      throw new Error("Response not ok");
    console.log(newUsers);
  } catch (error) {
    console.error(error);
  }
}

async function getContacts() {
  try {
    let response = await fetch("http://127.0.0.1:8000/contacts/");
    contacts = await response.json();
    if (!response.ok)
      throw new Error("Response not ok");
    console.log(contacts);
  } catch (error) {
    console.error(error);
  }
}


/**
 * Javascript Code Snippet to send post request from frontend to backend
 */

async function saveTasks(task) {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let currentTask = JSON.stringify(task);

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: currentTask,
    redirect: 'follow'
  };

  return fetch("http://127.0.0.1:8000/tasks/", requestOptions)
    .then(response => response.json());
}

async function saveSubtasks(subtask) {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let currentSubtask = JSON.stringify(subtask);

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: currentSubtask,
    redirect: 'follow'
  };

  fetch("http://127.0.0.1:8000/subtasks/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
async function saveContacts(contact) {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let currentContact = JSON.stringify(contact);

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: currentContact,
    redirect: 'follow'
  };

  fetch("http://127.0.0.1:8000/contacts/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

function saveUser(user) {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let currentUser = JSON.stringify(user);

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: currentUser,
    redirect: 'follow'
  };

  fetch("http://127.0.0.1:8000/users/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

function updateTask(task) {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let payload = JSON.stringify(task);

  let requestOptions = {
    method: 'PATCH',
    headers: myHeaders,
    body: payload,

  };

  fetch(`http://127.0.0.1:8000/tasks/${task.id}/`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

function updateSubtask(subtask) {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let payload = JSON.stringify(subtask);

  let requestOptions = {
    method: 'PATCH',
    headers: myHeaders,
    body: payload,

  };

  fetch(`http://127.0.0.1:8000/subtasks/${subtask.id}/`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

function deleteTask(taskId) {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
  };

  fetch(`http://127.0.0.1:8000/tasks/${taskId}/`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

async function loginWithBackend(email, password) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    "username": email,
    "password": password
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  try {
    let resp = await fetch("http://127.0.0.1:8000/login/", requestOptions)
    let json = await resp.json();
    loggedInUser = json.email;
    localStorage.setItem('token', json.token);
    localStorage.setItem('username', loggedInUser);
    window.location.href = "http://127.0.0.1:5505/board.html";
    await getUserId(json);
  } catch (e) {
    console.error();
  }
}

async function getUserId(json){
  for (let i = 0; i < newUsers.length; i++) {
    const user = newUsers[i];
    if(user.email == json.email)
    localStorage.setItem('userid', user.id);
  }
}

async function registerWithBackend(user) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    email: user.email,
    first_name: user.first_name,
    last_name: user.last_name,
    password: user.password,
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  try {
    const response = await fetch("http://127.0.0.1:8000/register/", requestOptions);
    if (response.ok) {
      // Registration successful
      const json = await response.json();
      // Do something with the response data
      console.log(json);
    } else {
      // Registration failed
      const errorResponse = await response.json();
      // Handle the error
      console.error(errorResponse);
    }
  } catch (error) {
    // Network or other error occurred
    console.error(error);
  }
}