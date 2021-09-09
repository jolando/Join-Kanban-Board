// window.apiRoot = location.origin + '/wp-json/wp/v2/';
// import { apiRoot, acfApiRoot } from '/config.js';
// export const acfApiRoot = location.origin + '/wp-json/acf/v3/';
// const apiRoot    = location.origin + '/wp-json/wp/v2/';
let allTasks2 = [];

let users = [
  {
    name: "Jones",
    profileImg: "description",
    email: "Jones@gmail.com",
  },
  {
    name: "Hannes",
    profileImg: "description",
    email: "Hannes@gmail.com",
  },
  {
    name: "Anna",
    profileImg: "description",
    email: "Anna@gmail.com",
  },
  {
    name: "Joe",
    profileImg: "description",
    email: "Joe@gmail.com",
  },
];

function initBacklog() {
  includeHTML();
  getTaskInfo();
  document.getElementById("backlog").innerHTML = "No Tasks";
  checkBacklogContainer();
  console.log(allTasks2);
}

function getTaskInfo() {
  let allTasksAsString = localStorage.getItem("allTasks");
  allTasks2 = JSON.parse(allTasksAsString);
}

function checkBacklogContainer() {
  let backlogContainer = document.getElementById("backlog");
  if (backlogContainer.innerHTML == "No Tasks") {
    for (let i = 0; i < allTasks2.length; i++) {
      let cardCategory = allTasks2[i].category;
      let taskDescription = allTasks2[i].description;
      let switchDescription = checkDescription(taskDescription);
      let categoryColor = getRightCategoryColor(cardCategory);
      renderBacklogCard(i, categoryColor, cardCategory, switchDescription);
    }
  }
}

function renderBacklogCard(index, color, category, description) {
  let contentContainer = document.getElementById("backlog");
  contentContainer.innerHTML += `
        <div id="backlog-unit${index} "class="backlog-unit">
                <span id="category-color" class="category-color ${color}"></span>
                <div class="backlog-unit-content">
                    <div class="user-inforamtion-container">
                         <div class="user-profile">
                            <img class="profile-picture" src="img/profile.png">
                            <div class="user-information">
                                <span class="backlog-unit-name">Darrin S. Jones</span>
                                <a href="email" class="backlog-unit-email">contact@darrin.com</a>
                            </div> 
                        </div>
                        <div class="tast-information">
                            <span class="category ${color}">${category}</span>
                            <span id="description" class="backlog-details">${description}</span>
                        </div>
                        <div class="delete-icon">
                            <img src="img/trash2.png"> 
                        </div>
                    </div>     
                </div>
            </div>
            `;
}

function checkDescription(rightDescription) {
  let description = document.getElementById("description");

  if (description === "") {
    return rightDescription;
  } else {
    return "No Description";
  }
}

function getRightCategoryColor(category) {
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
}
