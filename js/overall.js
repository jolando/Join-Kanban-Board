// setURL('http://developerakademie.com/smallest_backend_ever');

let allTasks = [];
let userCache = [];
let users = [
  {
    userId: 1,
    userData: [
      {
        firstName: "Jones",
        lastName: "Jackson",
        profileImg: "",
        email: "Jones@gmail.com"
      },
    ],
  },
  {
    userId: 2,
    userData: [
      {
        firstName: "Joe",
        lastName: "Jackson",
        profileImg: "",
        email: "Joe@gmail.com"
      },
    ],
  },
  ,
  {
    userId: 3,
    userData: [
      {
        firstName: "Joness",
        lastName: "Jackson",
        profileImg: "",
        email: "Jones@gmail.com"
      },
    ],
  },
  {
    userId: 4,
    userData: [
      {
        firstName: "Jonessss",
        lastName: "Jackson",
        profileImg: "",
        email: "Jones@gmail.com"
      },
    ],
  },
  {
    userId: 5,
    userData: [
      {
        firstName: "Jonesss",
        lastName: "Jackson",
        profileImg: "",
        email: "Jones@gmail.com"
      },
    ],
  },
  {
    userId: 6,
    userData: [
      {
        firstName: "Jones",
        lastName: "Jackson",
        profileImg: "",
        email: "Jones@gmail.com"
      },
    ],
  },
  {
    userId: 7,
    userData: [
      {
        firstName: "Jonesssss",
        lastName: "Jackson",
        profileImg: "",
        email: "Jones@gmail.com",
      },
    ],
  },
];

function getTaskInfo() {
  let allTasksAsString = localStorage.getItem("allTasks");
  allTasks = JSON.parse(allTasksAsString) || [];
  console.log(allTasks);
}
function getProfileInfo() {
  let allProfilesAsString = localStorage.getItem("Profiles");
  userCache = JSON.parse(allProfilesAsString) || [];
  console.log(userCache);
}

function saveCreatedTasks() {
  let allTasksAsString = JSON.stringify(allTasks);
  localStorage.setItem("allTasks", allTasksAsString);
}
function saveCreatedProfiles() {
  let allProfilesAsString = JSON.stringify(userCache);
  localStorage.setItem("Profiles", allProfilesAsString);
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
