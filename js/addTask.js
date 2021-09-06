let allTasks = [];


// function changeUrgency(){
//     let urgency = document.getElementById('urgency-content');
//     if (urgency.classList.contains('d-none')){
//         urgency.classList.remove('d-none')
//     } else {
//         urgency.classList.add('d-none');
//     }
// }

// function highUrgency(){
//     document.getElementById('urgency-status-field').innerHTML = 'High';
//     document.getElementById('urgency-content').classList.add('d-none');
// }
// function mediumUrgency(){
//     document.getElementById('urgency-status-field').innerHTML = 'Medium';
//     document.getElementById('urgency-content').classList.add('d-none');
// }
// function lowUrgency(){
//     document.getElementById('urgency-status-field').innerHTML = 'Low';
//     document.getElementById('urgency-content').classList.add('d-none');
// }
function initAddTask() {
    includeHTML();
    renderAddTaskPage();
}



function renderAddTaskPage() {
    document.getElementById('add-tast-container').innerHTML = `
    <div w3-include-html="templates/nav.html"></div>
    <h1 class="addTask">Add Task</h1>
    <h2 class="addTask">Learning Management System Project</h2>

    <form>
      <div class="form-left">
        <div class="title-box">
          <h3>TITLE</h3>
          <input
            type="text"
            class="title-input"
            id="title-field"
            placeholder="Create a title"
          />
        </div>

        <div class="category-box">
          <h3>CATEGORY</h3>
          <div class="category-field-box">
            <div class="category">Management</div>
            <img src="img/chevron .png" />
          </div>
        </div>

        <div class="description-box">
          <h3>DESCRIPTION</h3>
          <textarea
            type="text"
            class="longInput"
            id="description-field"
            cols="30"
            rows="10"
          >
          </textarea>
        </div>
      </div>

      <div class="form-right">
        <div class="date-box">
          <h3>DUE DATE</h3>
          <input type="date" id="date-field" />
        </div>

        <div class="urgency-box">
          <h3>URGENCY</h3>
          <div class="category-field-box">
            <div class="category" id="urgency-status-field">High</div>
            <img src="img/chevron .png" onclick="changeUrgency()" />
            <div class="urgency-content d-none" id="urgency-content">
              <p
                class="urgency-status"
                id="high-urgency"
                onclick="highUrgency()"
              >
                High
              </p>
              <p
                class="urgency-status"
                id="medium-urgency"
                onclick="mediumUrgency()"
              >
                Medium
              </p>
              <p class="urgency-status" id="low-urgency" onclick="lowUrgency()">
                Low
              </p>
            </div>
          </div>
        </div>

        <div class="assignment-box">
          <h3>ASSIGNED TO</h3>

          <div class="assignment-box-assets">
            <div class="profile-box">
              <img src="img/profile.png" class="profile-pic" />
              <img src="img/icon plus.png" class="plus-icon" />
            </div>

            <div class="button-box">
              <button class="cancel-button">CANCEL</button>
            </div>
          </div>
        </div>
        <button onsubmit="addTask()" class="create-button">CREATE TASK</button>
      </div>
    </form>

    <button onclick="addTask()" class="create-button">CREATE TASK</button>
    `;
}



function addTask() {
    let title = document.getElementById('title-field').value;
    let description = document.getElementById('description-field').value;
    let date = document.getElementById('date-field').value;
    window.location.href = 'index.html';

    // document.getElementById('todo-container').innerHTML = '';
    let task = {
        'title': title,
        'description': description,
        // 'Category': Category,
        'date': date
    };

    allTasks.push(task);

    for (let i = 0; i < allTasks.length; i++) {
        document.getElementById('todo-container').innerHTML += `
        <div class="task-unit">
            <div class="task-container">
                <span id="task-title">${allTasks[0].title}</span>
                <span id="description-container"></span>
                <span id="category-container" class="extra-info" >ssfs</span>
                <span id="date-container" class="extra-info" >sdf</span>
                <span id="urgency-container" class="extra-info" >sdf</span>
                <span id="assigned-container" class="extra-info" >sdf</span>
            </div>
        </div
        `;
    }
}