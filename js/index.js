
// variables for register-form
const registerForm = document.getElementById("register-form");
const registersEmail = document.getElementById("register-email");
const fName = document.getElementById("register-firstname");
const lName = document.getElementById("register-lastname");
const pw = document.getElementById("register-password");
const confirmedPw = document.getElementById("register-confirmed");
// variables for login-form


allRegisteredEmails = [];

async function initIndex() {
  includeHTML();
  setURL("http://gruppe-99.developerakademie.com/smallest_backend_ever-master");
  await loadAllTasks();
  await loadRegisterRequest();
  getAllEmails();
  // deleteUser();
}

// function deleteUser() {
//   backend.deleteItem("registeredUser");
// }

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (checkFirstName() && checkLastName() && checkEmail() && checkPw() && checkConfPw() == true) {
    if(!emailExists(registersEmail.value)) {
      createUserObject();    
      resetClassName();
      deleteRegisterInput();
    } else {
      console.log('already registered');
      outputError(registersEmail, 'this email already exists');
    } 
  } else {
    console.log("no way");
  }
});


// const loginProcess = (currentLoginEmail) => {
//   const loginEmail = allRegisteredEmails.find((value) => value == currentLoginEmail);
//   const result = allRegisteredEmails.find((value) => value == currentEmail);

// }



function getAllEmails() {
  for (let i = 0; i < allRegisteredUsers.length; i++) {
    const email = allRegisteredUsers[i].email;
    console.log(email);
    allRegisteredEmails.push(email);
  }
}

const emailExists = (currentEmail) => {
  const result = allRegisteredEmails.find((value) => value == currentEmail);
  console.log(result);
  return result;
};

/**
 * reset input fields
 */
function deleteRegisterInput() {
  document.forms["register-form"].reset();
}

async function createUserObject() {
  let user = {
    userPassword: `${pw.value}`,
    validatePassword: `${confirmedPw.value}`,
    firstName: `${fName.value}`,
    lastName: `${lName.value}`,
    email: `${registersEmail.value}`,
  };
  allRegisteredUsers.push(user);
  await saveRegisterRequest();
  alert("Regestration succesful");
}

function outputError(input, errorMsg) {
  const formErrElement = input.parentElement;
  const inputElement = input;
  const small = formErrElement.querySelector("small");
  inputElement.classList.add("error");
  inputElement.classList.remove("success");
  small.style = "visibility: visible;";
  small.innerText = errorMsg;
}

function outputSuccess(input, errorMsg) {
  const formErrElement = input.parentElement;
  const inputElement = input;
  const small = formErrElement.querySelector("small");
  inputElement.classList.add("success");
  inputElement.classList.remove("error");
  small.style = "visibility: visible;";
  small.innerText = errorMsg;
}

const checkFirstName = () => {
  if (fName.value == "") {
    outputError(fName, "Fname can not be blank");
    return false;
  } else if (fName.value.length < 4) {
    outputError(fName, "Fname min 3 chars");
    return false;
  } else {
    outputSuccess(fName, "Correct!");
    return true;
  }
};

const checkLastName = () => {
  if (lName.value == "") {
    outputError(lName, "Lname can not be blank");
    return false;
  } else if (lName.value.length < 4) {
    outputError(lName, "Lname min 3 chars");
    return false;
  } else {
    outputSuccess(lName, "Correct!");
    return true;
  }
};

const checkEmail = () => {
  if (registersEmail.value == "") {
    outputError(registersEmail, "email can not be blank");
    return false;
  } else if (!isEmail(registersEmail.value)) {
    outputError(registersEmail, "not valid");
    return false;
  } else {
    outputSuccess(registersEmail, "Correct!");
    return true;
  }
};

const checkPw = () => {
  if (pw.value == "") {
    outputError(pw, "pq can not be blank");
    return false;
  } else if (pw.value.length <= 5) {
    outputError(pw, "pw min 6 chars");
    return false;
  } else {
    outputSuccess(pw, "Correct!");
    return true;
  }
};

const checkConfPw = () => {
  if (confirmedPw.value == "") {
    outputError(confirmedPw, "conpw can not be blank");
    return false;
  } else if (pw.value !== confirmedPw.value) {
    outputError(confirmedPw, "pws are not matching");
    return false;
  } else {
    outputSuccess(confirmedPw, "Correct!");
    return true;
  }
};

const isEmail = (email) => {
  let atSymbol = email.indexOf("@");

  if (atSymbol < 1) return false;
  let dot = email.lastIndexOf(".");

  if (dot < atSymbol + 2) return false;
  if (dot == email.length - 1) return false;
  return true;
};

const resetClassName = () => {
  let classNames = document.getElementsByClassName("validation");
  setTimeout(() => {
    for (let i = 0; i < classNames.length; i++) {
      classNames[i].classList.remove("success");
    }
    closeRegisterWindow();
  }, 2000);
};

/**
 * show register form
 */
function openRegisterWindow() {
  document.getElementById("register-window").style.zIndex = "1";
}

/**
 * hide register form
 */
function closeRegisterWindow() {
  document.getElementById("register-window").style.zIndex = "-1";
}
