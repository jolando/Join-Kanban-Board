

async function initIndex() {
  includeHTML();
  setURL("http://gruppe-99.developerakademie.com/smallest_backend_ever-master");
  await loadRegisterRequest();
  registerInputValues();
}

function deleteUser() {
  backend.deleteItem('allTasks');
}

function registerInputValues() {
  let userId = Math.random() * 999999;
  let email = document.getElementById("register-email").value;
  let fName = document.getElementById("register-firstname").value;
  let lName = document.getElementById("register-lastname").value;
  let pw = document.getElementById("register-password").value;
  let confirmedPw = document.getElementById("register-confirmed").value;
  let inputValuesArr = [userId, email, fName, lName, pw, confirmedPw];
  
  return inputValuesArr;
};



function register() {
  let currentInputValue = registerInputValues()

  if (!emailExists(currentInputValue[1])) {
      registerNewUser();
      console.log('new user created');
  } else {
      alert('The user cannot be registered.');
  }
}


/**
 * compare input-email with all emails in allRegisteredUsers
 */
 function emailExists(currentInputValue) {
  for (let i = 0; i < allRegisteredUsers.length; i++) {
    let email = allRegisteredUsers[i].userData[0].email;
    console.log("Every Email in allRegisteredUsers:", email);
    if (currentInputValue[1] == email) {
      alert("this email is already registered");
      
      
    } 
  }
}

async function registerNewUser() {
  let v = registerInputValues()
  for (let i = 0; i < v.length; i++) {
    user = {
      userId: `${v[0].toFixed()}`,
      userPassword: `${v[4]}`,
      validatePassword: `${v[5]}`,
      userData: [
        {
          firstName: `${v[3]}`,
          lastName: `${v[4]}`,
          profileImg: "",
          email: `${v[1]}`,
        },
      ],
    };
  }
  allRegisteredUsers.push(user);
  await saveRegisterRequest();
  await loadRegisterRequest()
  deleteRegisterInput();
  console.log('user', user)
}

function deleteRegisterInput() {
  document.forms['register-form'].reset();
}

function openRegisterWindow() {
  document.getElementById('register-window').style.display = 'flex';
}

function closeRegisterWindow() {
  document.getElementById('register-window').style.display = 'none';
}


/**
 * fromvalidation
 */
// function checkRegisterOperation() {
//   let inputV = registerInputValues();

//   if (emailExists(inputV[1])) {
//     registerNewUser();
//     addBlurToRegister();
//     alert("the registration was successful");
//   } else {
//     alert("The user cannot be registered.");
//   }
// }



// /**
//  *
//  * @param {String} inputV value of password-input-fields
//  */
// function comparePasswords(inputV) {
//   if (inputV[4] != inputV[5]) {
//     alert("the passwords do not match");
//     inputV[4].value = "";
//     inputV[5].value = "";
//   }
// }

// /**
//  *  set empty user-object and
//  */
// function registerNewUser() {
  
//   loadUserDataInObjekt(user);
//   addBlurToRegister();
//   // saveRegisterRequest();
//   console.log("From: Server", allRegisteredUsers);
// }


// /**
//  * load all inputvalues into an object and save it in "smallest backend ever"
//  *
//  * @param {Object} user empty user object
//  */
// function loadUserDataInObjekt(user) {
//   const data = readFormInput();
//   for (let i = 0; i < data.length; i++) {
//     user = {
//       userId: `${data[0].toFixed()}`,
//       userPassword: `${data[4]}`,
//       validatePassword: `${data[5]}`,
//       userData: [
//         {
//           firstName: `${data[3]}`,
//           lastName: `${data[4]}`,
//           profileImg: "",
//           email: `${data[1]}`,
//         },
//       ],
//     };
//   }
//   console.log("filled user-object", user);
//   console.log("values in returnRegisterFormInput:", data);
//   allRegisteredUsers.push(user);
//   saveRegisterRequest();
//   deleteRegisterInput();
// }



function addBlurToRegister() {
  document.addEventListener("click", () => {
    document.getElementById("login-form").classList.remove("blur");
    document.getElementById("register-form").classList.add("blur");
  });
}

function addBlurToLogin() {
  document.addEventListener("click", () => {
    document.getElementById("login-form").classList.add("blur");
    document.getElementById("register-form").classList.remove("blur");
  });
}



