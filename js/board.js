function initBoard() {
  includeHTML();
  getTaskInfo();
  renderTaskInfo();
  // loadAllTask();
}

// async function getTaskInfo() {
//     let allTasksAsString = localStorage.getItem('allTasks');
//     allTasks2 = JSON.parse(allTasksAsString);
//     console.log(allTasks);
// }

function renderTaskInfo() {
  for (let i = 0; i < allTasks.length; i++) {
    document.getElementById("todo-container").innerHTML += `
            <div class="task-unit">
                <div class="task-container">
                    <span class="task-title" id="description-container" class="description-container"><b>Title:</b> ${allTasks[i].title}</span>
                    <span id="task-title" ><b>Description:</b>  ${allTasks[i].description}</span>
                    <span id="category-container" class="extra-info" ><b>Category:</b>  ${allTasks[i].category}</span>
                    <span id="date-container" class="extra-info"><b>Date: </b>${allTasks[i].date}</span>
                    <span id="urgency-container" class="extra-info" ><b>Urgency: </b>${allTasks[i].urgency}</span>
                    <span id="assigned-container" class="extra-info" ></span>
                </div>
            </div>`;
  }
}
