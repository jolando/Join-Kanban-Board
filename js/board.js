async function initBoard() {
  includeHTML();
  setURL("http://gruppe-99.developerakademie.com/smallest_backend_ever-master");
  await loadAllTasks();
  await loadRegisterRequest();
  renderTaskInfo();
}

function renderTaskInfo() {
  for (let i = 0; i < allTasks.length; i++) {
    let cardCategory = allTasks[i].category;
    let categoryColor = getRightCategoryColor(cardCategory);

    document.getElementById("todo-container").innerHTML += `
    <div id="task-unit${i}" class="task-unit">
    <div class="task-container">
        <span class="task-title" id="description-container" class="description-container"> ${allTasks[i].title}</span>
        <span id="task-title" > ${allTasks[i].description}</span>
        <div class="info-container">
          <span class="${categoryColor} extra-info">${cardCategory}</span>
          <span class="extra-info">01.12.19</span></span>
          <span class="extra-info" >High</span>
          
        </div>
        <img onclick="deleteBoardCard(${i})" class="delete-icon" src="img/close-board.png">
    </div>
  </div>`;
  }
}

function deleteBoardCard(allTasksIndex) {
  allTasks.splice(allTasksIndex, 1);
  saveAllTasks();
  loadAllTasks();
  document.getElementById("task-unit" + allTasksIndex).style = "display: none;";
}
