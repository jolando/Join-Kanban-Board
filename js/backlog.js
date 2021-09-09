// window.apiRoot = location.origin + '/wp-json/wp/v2/';
// import { apiRoot, acfApiRoot } from '/config.js';
// export const acfApiRoot = location.origin + '/wp-json/acf/v3/';
// const apiRoot    = location.origin + '/wp-json/wp/v2/';

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
  document.getElementById("empty-backlog").innerHTML = "No Tasks";
  checkBacklogContainer();
  console.log(allTasks);
}

function checkBacklogContainer() {
  if (document.getElementById("empty-backlog").innerHTML == "No Tasks") {
    document.getElementById("empty-backlog").classList.add("d-none");

    for (let i = 0; i < allTasks.length; i++) {
      let cardCategory = allTasks[i].category;
      let taskDescription = allTasks[i].description;
      let switchDescription = checkDescription(taskDescription);
      let categoryColor = getRightCategoryColor(cardCategory);
      renderBacklogCard(i, categoryColor, cardCategory, switchDescription);
    }
  }
}

function renderBacklogCard(index, color, category, description) {
  let contentContainer = document.getElementById("backlog");
  if (window.innerWidth < 780) {
    // console.log(window.innerWidth);
    contentContainer.innerHTML += `
        <div id="backlog-unit ${index}"class="backlog-unit ${color}">
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
                            <span id="description${index}" class="backlog-details">${description}</span>
                        </div>
                        <div class="delete-icon">
                            <img src="img/trash2.png"> 
                        </div>
                    </div>     
                </div>
            </div>
            `;
  } else {
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
                            <span id="description${index}" class="backlog-details">${description}</span>
                        </div>
                        <div class="delete-icon">
                            <img src="img/trash.png"> 
                        </div>
                    </div>     
                </div>
            </div>
            `;
  }
  // window.location.reload();
}

function checkDescription(rightDescription) {
  if (rightDescription == "") {
    return "No Description";
  } else {
    return rightDescription;
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
