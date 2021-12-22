/**
 * loads required information
 */
async function initIndex() {
  includeHTML();
  setURL('http://gruppe-99.developerakademie.com/smallest_backend_ever-master');
  await loadAllTasks();
  await loadRegisterRequest();
  // deleteUser();
}

// function deleteUser() {
//   backend.deleteItem('registeredUser');
// }

/**
 * This function shows a hint when an error occurs
 * @param {string} id string of element id
 * @param {string} id string of errormessage
 */
function printError(id, message) {
  console.log(id, 'Element Id', message, 'Element Message');
  document.getElementById(id).innerHTML = message;
  showHint(id);
}

/**
 * This function gives the user feedback that the input was correct
 * @param {string} id string of element id
 */
function showSuccess(id) {
  const elem = document.getElementById(id);
  elem.classList.add('success');
  elem.classList.remove('error');
}

/**
 * This function gives the user feedback that the input was incorrect
 * @param {string} id string of element id
 */
function removeSuccess(id) {
  const elem = document.getElementById(id);
  elem.classList.add('error');
  elem.classList.remove('success');
}

/**
 * removes visibility
 */
function showHint(id) {
  // console.log('remove', id);
  const elem = document.getElementById(id);
  // console.log('remove', elem);
  elem.classList.remove('visibility');
}

/**
 *  Creates an user-object
 */
async function createUserObject() {
  console.log('success');
  let user = {
    id: new Date().getTime(),
    firstName: document.getElementById('register-firstname').value,
    lastName: document.getElementById('register-firstname').value,
    email: document.getElementById('register-email').value,
    userPassword: document.getElementById('register-firstname').value,
  };
  allRegisteredUsers.push(user);
  console.log(allRegisteredUsers);
  await saveRegisterRequest();
}

/**
 * Performs the login-form validation and determines which case occurs
 * @param {event} e event
 */
function login(e) {
  e.preventDefault();
  checkLoginInput();
  const loginEmail = document.getElementById('login-email');
  const loginPw = document.getElementById('login-password');

  let user = emailExists(loginEmail.value);

  if (user && user.userPassword === loginPw.value) {
    window.location.href = 'board.html';
  } else if (user && user.userPassword !== loginPw.value) {
    document.getElementById('error-full').innerHTML = 'Wrong password';
  } else {
    if (loginEmail.value.length > 0) {
      document.getElementById('error-full').innerHTML = 'User not registered';
      clearInput();
    }
  }
}

/**
 * Constantly check input fields
 */
document.getElementById('login-form').addEventListener('input', () => {
  checkLoginInput();
});

/**
 * Constantly check input fields
 */
document.getElementById('register-form').addEventListener('input', () => {
  checkRegisterInput();
});

/**
 * Check if login-form is valid
 */
function checkLoginInput() {
  validateEmail('login-email', 'login-email-hint');
  validatePassword('login-password', 'login-pw-hint');
}

/**
 * Check if register-form is valid
 */
function checkRegisterInput() {
  validateFirstname();
  validateLastname();
  validateEmail('register-email', 'email-hint');
  validatePassword('register-password', 'pw-hint');
}

/**
 * Performs the register-form validation and determines which case occurs
 * @param {event} e event
 */
function validateRegister(e) {
  e.preventDefault();
  checkRegisterInput();

  if (
    validateFirstname() &&
    validateLastname() &&
    validateEmail() &&
    validatePassword() === true
  ) {
    const found = allRegisteredUsers.find(
      (u) => u.email === document.getElementById('register-email').value
    );
    if (!found) {
      createUserObject();
      window.location.href = 'board.html';
      clearInput();
    } else {
      document.getElementById('error-full').innerHTML =
        'User already registered';
      clearInput();
    }
  } else {
    console.log('something is missing');
  }
}

function clearInput() {
  deleteRegisterInput();
  resetClassName();
  deleteLoginInput();
}

function validateEmail(elementId, hintId) {
  const registerEmail = document.getElementById('register-email').value;
  const loginEmail = document.getElementById('login-email').value;

  if (registerEmail == '' && loginEmail == '') {
    printError(hintId, 'Please enter your email address');
    removeSuccess(elementId);
  } else {
    let regex = /^\S+@\S+\.\S+$/;
    if (
      regex.test(registerEmail) === false &&
      regex.test(loginEmail) === false
    ) {
      printError(hintId, 'Please enter a valid email address');
      removeSuccess(elementId);
    } else {
      if (hintId || elementId) {
        printError(hintId, '');
        showSuccess(elementId);
      }

      return true;
    }
  }
}

function validatePassword(elementId, hintId) {
  const pw = document.getElementById('register-password').value;
  const loginPw = document.getElementById('login-password').value;

  if (pw == '' && loginPw == '') {
    printError(hintId, 'Please enter your password');
    removeSuccess(elementId);
  } else {
    if (pw.length <= 5 && loginPw.length <= 5) {
      printError(hintId, 'Please enter a valid password');
      removeSuccess(elementId);
    } else {
      if (hintId || elementId) {
        printError(hintId, '');
        showSuccess(elementId);
      }
      return true;
    }
  }
}

function validateFirstname() {
  const fName = document.getElementById('register-firstname').value;

  if (fName == '') {
    printError('fname-hint', 'Please enter your name');
    removeSuccess('register-firstname');
  } else {
    let regex = /^[a-zA-Z\s]+$/;
    if (regex.test(fName) === false) {
      printError('fname-hint', 'Please enter a valid name');
      removeSuccess('register-firstname');
    } else {
      printError('fname-hint', '');
      showSuccess('register-firstname');
      return true;
    }
  }
}

function validateLastname() {
  const lName = document.getElementById('register-lastname').value;
  if (lName == '') {
    printError('lname-hint', 'Please enter your name');
    removeSuccess('register-lastname');
  } else {
    let regex = /^[a-zA-Z\s]+$/;
    if (regex.test(lName) === false) {
      printError('lname-hint', 'Please enter a valid name');
      removeSuccess('register-lastname');
    } else {
      printError('lname-hint', '');
      nameErr = false;
      showSuccess('register-lastname');
      return true;
    }
  }
}

/**
 * Searches for a registered email
 * @param {String} currentEmail in input-field
 * @returns {Boolean} true if found undefined if not
 */
const emailExists = (currentEmail) => {
  const result = allRegisteredUsers.find(
    (value) => value.email == currentEmail
  );
  return result;
};

/**
 * Removes validation feedback
 */
function resetClassName() {
  let classNames = document.getElementsByClassName('validation');
  for (let i = 0; i < classNames.length; i++) {
    classNames[i].classList.remove('success');
    classNames[i].classList.remove('error');
  }
  // closeRegisterWindow();
}

/**
 * Show register form
 */
function openRegisterWindow() {
  document.getElementById('register-window').style.zIndex = '1';
  clearInput();
}

/**
 * Hide register form
 */
function closeRegisterWindow() {
  document.getElementById('register-window').style.zIndex = '-1';
  clearInput();
}

/**
 * Reset register inputfields
 */
function deleteRegisterInput() {
  document.forms['register-form'].reset();
}

/**
 * Reset login inputfields
 */
function deleteLoginInput() {
  document.forms['login-form'].reset();
}
