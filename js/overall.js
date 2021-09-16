//setURL('http://gruppe-99.developerakademie.com/smallest_backend_ever-master')

let allRegisteredUsers = [];
let allTasks = [];

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
