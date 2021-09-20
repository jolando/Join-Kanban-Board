let eachValues;
let allUsersEmail = [];

async function initIndex() {
  includeHTML();
  setURL("http://gruppe-99.developerakademie.com/smallest_backend_ever-master");
  await loadAllTasks();
  await saveRegisterRequest();
  await loadRegisterRequest();
  getAllEmails();
  // deleteUser();
}

let user = {
  userPassword: '123123123',
  validatePassword: '123123123',
  firstName: 'Jochen',
  lastName: 'Koch',
  email: '123@gmail.com',
};

// function deleteUser() {
//   backend.deleteItem("allTasks");
// }

/**
 * get every input value of the register form
 * 
 * @returns an array with all register input values
 */
function provideRegisterValues() {
  let email = document.getElementById("register-email").value;
  let fName = document.getElementById("register-firstname").value;
  let lName = document.getElementById("register-lastname").value;
  let pw = document.getElementById("register-password").value;
  let confirmedpw = document.getElementById("register-confirmed").value;
  let userIunputData = [email, fName, lName, pw, confirmedpw];
  return userIunputData;
}

/**
 * register a new user if the passwords are correct and the email does not exist yet
 * 
 * @param {*} ev event 
 */
function registerNewUser(ev) {
  ev.preventDefault();
  console.log(allRegisteredUsers);
  if (!emailExists() && equalPw() == true) {
    createUserObject();
  } else {
    alert('the email already exists or the password does not match')
  }
}

/**
 *  fill user-object with input values
 */
 async function createUserObject() {
  eachValues = provideRegisterValues();
  let user = {
    userPassword: `${eachValues[3]}`,
    validatePassword: `${eachValues[4]}`,
    firstName: `${eachValues[1]}`,
    lastName: `${eachValues[2]}`,
    email: `${eachValues[0]}`,
  };
  allRegisteredUsers.push(user);
  await saveRegisterRequest();
  await loadRegisterRequest();
}

/**
 * get all registered user emails and fills an empty array
 */
function getAllEmails() {
  for (let i = 0; i < allRegisteredUsers.length; i++) {
    const registeredUserEmail = allRegisteredUsers[i].email;
    console.log(registeredUserEmail);
    allUsersEmail.push(registeredUserEmail);
    console.log("arr", allUsersEmail);
  }
}

/**
 * checks if the user email already exists
 * 
 * @returns 
 */
function emailExists() {
  email = provideRegisterValues();
  let checkEmail = allUsersEmail.includes(email[0]) 
  return checkEmail;
}
  

/**
 * compare passwords
 * 
 * @returns {Boolean} true or false
 */
function equalPw() {
  eachValues = provideRegisterValues();
  // equalPw = (eachValues[3] == eachValues[4]) ? true : false;

  if (eachValues[3] == eachValues[4]) {
    return true;
  } else {
    return false;
  }
}

/**
 * reset input fields
 */
function deleteRegisterInput() {
  document.forms["register-form"].reset();
}

/**
 * show register form
 */
function openRegisterWindow() {
  ev.preventDefault();
  document.getElementById("register-window").style.zIndex = "1";
}

/**
 * hide register form
 */
function closeRegisterWindow() {
  ev.preventDefault();
  document.getElementById("register-window").style.zIndex = "-1";
}
