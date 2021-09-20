
let allRegisteredUsers = [{
  userPassword: '123123123',
  validatePassword: '123123123',
  firstName: 'Jochen',
  lastName: 'Koch',
  email: '123@gmail.com'
},
];
let allTasks = [];
let index;

async function saveRegisterRequest() {
  await backend.setItem("registeredUser", JSON.stringify(allRegisteredUsers));
}

async function loadRegisterRequest() {
  await downloadFromServer();
  allRegisteredUsers = JSON.parse(backend.getItem("registeredUser")) || [];
  console.log("From Server User:", allRegisteredUsers);
}

async function loadAllTasks() {
  await downloadFromServer();
  allTasks = JSON.parse(backend.getItem("allTasks")) || [];
  console.log("From Server AllTasks:", allTasks);
}

async function saveAllTasks() {
  await backend.setItem("allTasks", JSON.stringify(allTasks));
}

let isburgerMenuOpen = false;
function openBurgerMenu() {
  let burgerMenu = document.getElementById("dropDownMenu");
  if (isburgerMenuOpen) {
    burgerMenu.style.display = "none";
    isburgerMenuOpen = false;
  } else {
    burgerMenu.style.display = "flex";
    isburgerMenuOpen = true;
  }
}


/**
 * checks which department the task is intended for
 *
 * @param {String} category is one of 4 different departments
 * @returns {String} retrun the right classname
 */
 let getRightCategoryColor = (category) => {
  if (category == "Management") {
    return "management-color";
  }
  if (category == "Marketing") {
    return "marketing-color";
  }
  if (category == "Product") {
    return "product-color";
  }
  if (category == "Sales") {
    return "sales-color";
  }
};