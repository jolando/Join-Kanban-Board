let allRegisteredUsers = [
  {
    userPassword: "123123123",
    validatePassword: "123123123",
    firstName: "example",
    lastName: "name",
    email: "123@gmail.com",
  },
];
let allTasks = [];
let selectedUser = [];
let index;
let isburgerMenuOpen = false;
let taskk;



/**
 * loads the stored information from the backend into an empty array so that the content can be displayed
 */
async function loadRegisterRequest() {
  await downloadFromServer();
  allRegisteredUsers = JSON.parse(backend.getItem("registeredUser")) || [];
  console.log("From Server User:", allRegisteredUsers);
}

/**
 * loads the stored information from the backend into an empty array so that the content can be displayed
 */
async function loadAllTasks() {
  await downloadFromServer();
  allTasks = JSON.parse(backend.getItem("allTasks")) || [];
  console.log("From Server AllTasks:", allTasks);
}

/**
 * converts the global allRegisteredUsers array into a string and stores it in the backend
 */
async function saveRegisterRequest() {
  await backend.setItem("registeredUser", JSON.stringify(allRegisteredUsers));
}

/**
 * converts the global allTasks array into a string and stores it in the backend
 */
async function saveAllTasks() {
  await backend.setItem("allTasks", JSON.stringify(allTasks));
}

/**
 * opens and closes the burger menu
 */
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
