// variables for register-form
const registerForm = document.getElementById("register-form");
const registerEmail = document.getElementById("register-email");
const fName = document.getElementById("register-firstname");
const lName = document.getElementById("register-lastname");
const pw = document.getElementById("register-password");
const confirmedPw = document.getElementById("register-confirmed");
// variables for login-form
const loginForm = document.getElementById("login-form");
const loginEmail = document.getElementById("login-email");
const loginPw = document.getElementById("login-password");

allRegisteredEmails = [];
allRegisteredUsersPw = [];

/**
 * loads required information
 */
async function initIndex() {
  includeHTML();
  setURL("http://gruppe-99.developerakademie.com/smallest_backend_ever-master");
  await loadAllTasks();
  await loadRegisterRequest();
  getAllEmails();
  getAllPw();
  // deleteUser();
}

// function deleteUser() {
//   backend.deleteItem("registeredUser");
// }

/**
 * performs the login-form validation and determines which case occurs
 */
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let emailValidation = loginEmail.value == emailExists(loginEmail.value);
  let pwValidation = loginPw.value == pwExists(loginPw.value);

  if (emailValidation && pwValidation) {
    window.location.href = "board.html";
  } else if (emailValidation && !pwValidation) {
    // checkLogin();
    // checkLoginPw();
    outputError(loginPw, "worng password");
  } else if (!emailValidation && pwValidation) {
    outputError(loginEmail, "not registered");
  } else {
    clearInputFields();
  }
});

/**
 * checks typical name characteristics
 *
 * @returns {Boolean}
 */
const checkLogin = () => {
  if (loginEmail.value == "") {
    outputError(loginEmail, "email can not be empty");
    return false;
  } else if (!isEmail(loginEmail.value)) {
    outputError(loginEmail, "no valid email");
    return false;
  } else {
    outputSuccess(loginEmail, "valid email");
    return true;
  }
};

/**
 * checks typical name characteristics
 *
 * @returns {Boolean}
 */
const checkLoginPw = () => {
  if (loginPw.value == "") {
    outputError(loginPw, "pw can not be empty");
    return false;
  } else if (loginPw.value.length < 6) {
    outputError(loginPw, "password min 6 chars");
    return false;
  } else {
    outputSuccess(loginPw, "valid pw");
    return true;
  }
};

/**
 * if not validated values are entered they will be deleted
 */
function clearInputFields() {
  checkLogin();
  checkLoginPw();
  resetClassName();
  deleteLoginInput();
}

/**
 * performs the register-form validation and determines which case occurs
 */
registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (
    checkFirstName() &&
    checkLastName() &&
    checkEmail() &&
    checkPw() &&
    checkConfPw() == true
  ) {
    if (!emailExists(registerEmail.value)) {
      createUserObject();
      resetClassName();
      deleteRegisterInput();
    } else {
      outputError(registerEmail, "this email is already registered");
    }
  } else {
    console.log("no way");
  }
});

/**
 * separates pws
 */
function getAllPw() {
  for (let i = 0; i < allRegisteredUsers.length; i++) {
    const pw = allRegisteredUsers[i].validatePassword;
    allRegisteredUsersPw.push(pw);
  }
}
/**
 * separates emails
 */
function getAllEmails() {
  for (let i = 0; i < allRegisteredUsers.length; i++) {
    const email = allRegisteredUsers[i].email;
    allRegisteredEmails.push(email);
  }
}

/**
 * searches for a registered email
 *
 * @param {String} currentEmail in input-field
 * @returns {Boolean} true if found undefined if not
 */
const emailExists = (currentEmail) => {
  const result = allRegisteredEmails.find((value) => value == currentEmail);
  console.log(result);
  return result;
};

/**
 * searches for a registered email
 *
 * @param {String} currentEmail in input-field
 * @returns {Boolean} true if found undefined if not
 */
const pwExists = (currentPw) => {
  const result = allRegisteredUsersPw.find((value) => value == currentPw);
  console.log(result);
  return result;
};

/**
 * reset register inputfields
 */
function deleteRegisterInput() {
  document.forms["register-form"].reset();
}

/**
 * reset login inputfields
 */
function deleteLoginInput() {
  document.forms["login-form"].reset();
}

/**
 * if the registration is successful a new user will be created
 */
async function createUserObject() {
  let user = {
    id: new Date().getTime(),
    userPassword: `${pw.value}`,
    validatePassword: `${confirmedPw.value}`,
    firstName: `${fName.value}`,
    lastName: `${lName.value}`,
    email: `${registerEmail.value}`,
  };
  allRegisteredUsers.push(user);
  await saveRegisterRequest();
  alert("Regestration successful");
}

/**
 * show non valid feedback
 *
 * @param {Element} input current HTML element
 * @param {String} errorMsg depends on the case which error message is displayed
 */
function outputError(input, errorMsg) {
  const formErrElement = input.parentElement;
  const inputElement = input;
  const small = formErrElement.querySelector("small");
  inputElement.classList.add("error");
  small.style = "visibility: visible;";
  small.innerText = errorMsg;
}

/**
 * show valid feedback
 *
 * @param {Element} input current HTML element
 * @param {String} errorMsg depends on the case which error message is displayed
 */
function outputSuccess(input, errorMsg) {
  const formErrElement = input.parentElement;
  const inputElement = input;
  const small = formErrElement.querySelector("small");
  inputElement.classList.add("success");
  small.style = "visibility: visible;";
  small.innerText = errorMsg;
}

/**
 * checks the email entered in the inputfield for email characteristics
 *
 * @param {String} email current emailvalue
 * @returns {Boolean}
 */
const isEmail = (email) => {
  let atSymbol = email.indexOf("@");
  if (atSymbol < 1) return false;
  let dot = email.lastIndexOf(".");
  if (dot < atSymbol + 2) return false;
  if (dot == email.length - 1) return false;
  return true;
};

/**
 * removes validation feedback
 */
const resetClassName = () => {
  let classNames = document.getElementsByClassName("validation");
  setTimeout(() => {
    for (let i = 0; i < classNames.length; i++) {
      classNames[i].classList.remove("success");
    }
    closeRegisterWindow();
  }, 1000);
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

/**
 * checks typical name characteristics
 *
 * @returns {Boolean}
 */
const checkFirstName = () => {
  if (fName.value == "") {
    outputError(fName, "first name can not be empty"); return false;
  } else if (fName.value.length < 3) {
    outputError(fName, "last name min 3 chars"); return false;
  } else {
    outputSuccess(fName, "Correct!"); return true;
  }
};

/**
 * checks typical name characteristics
 *
 * @returns {Boolean}
 */
const checkLastName = () => {
  if (lName.value == "") {
    outputError(lName, "last name can not be empty"); return false;
  } else if (lName.value.length < 3) {
    outputError(lName, "last name min 3 chars"); return false;
  } else {
    outputSuccess(lName, "Correct!"); return true;
  }
};

/**
 * checks typical email characteristics
 *
 * @returns {Boolean}
 */
const checkEmail = () => {
  if (registerEmail.value == "") {
    outputError(registerEmail, "email can not be empty"); return false;
  } else if (!isEmail(registerEmail.value)) {
    outputError(registerEmail, "no vaild email"); return false;
  } else {
    outputSuccess(registerEmail, "valid email"); return true;
  }
};

/**
 * checks typical pw characteristics
 *
 * @returns {Boolean}
 */
const checkPw = () => {
  if (pw.value == "") {
    outputError(pw, "pw can not be empty"); return false;
  } else if (pw.value.length <= 5) {
    outputError(pw, "pw min 6 chars"); return false;
  } else {
    outputSuccess(pw, "vaild pw"); return true;
  }
};

/**
 * checks typical pw characteristics
 *
 * @returns {Boolean}
 */
const checkConfPw = () => {
  if (confirmedPw.value == "") {
    outputError(confirmedPw, "confirmed pw can not be empty"); return false;
  } else if (pw.value !== confirmedPw.value) {
    outputError(confirmedPw, "the passwords do not match"); return false;
  } else {
    outputSuccess(confirmedPw, "Correct!"); return true;
  }
};
