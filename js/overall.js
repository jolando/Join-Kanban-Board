let allTasks = [];

let users = [
  {
    userId: 1,
    firstName: "Jones",
    lastName: "Jackson",
    profileImg: "",
    email: "Jones@gmail.com",
  },
  {
    userId: 2,
    firstName: "Jones",
    lastName: "Jackson",
    profileImg: "",
    email: "Jones@gmail.com",
  },
  ,
  {
    userId: 3,
    firstName: "Jones",
    lastName: "Jackson",
    profileImg: "",
    email: "Jones@gmail.com",
  },
  {
    userId: 4,
    firstName: "Jones",
    lastName: "Jackson",
    profileImg: "",
    email: "Jones@gmail.com",
  },
  {
    userId: 5,
    firstName: "Jones",
    lastName: "Jackson",
    profileImg: "",
    email: "Jones@gmail.com",
  },
  {
    userId: 6,
    firstName: "Jones",
    lastName: "Jackson",
    profileImg: "",
    email: "Jones@gmail.com",
  },
  {
    userId: 7,
    firstName: "Jones",
    lastName: "Jackson",
    profileImg: "",
    email: "Jones@gmail.com",
  },
];

function getTaskInfo() {
  let allTasksAsString = localStorage.getItem("allTasks");
  allTasks = JSON.parse(allTasksAsString);
  console.log(allTasks);
}

function saveCreatedTasks() {
  let allTasksAsString = JSON.stringify(allTasks);
  localStorage.setItem("allTasks", allTasksAsString);
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
