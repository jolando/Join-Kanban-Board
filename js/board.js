
let allTasks2 = [];

function initBoard() {
    includeHTML();
    getTaskInfo();
    renderTaskInfo();
    // loadAllTask();
}


// function loadAllTask() {
//     for (let i = 0; i < allTasks.length; i++) {
//         document.getElementById('todo-container').innerHTML = '4';
//     }
// }


// `
//         <div class="task-unit">
//             <div class="task-container">
//                 <span id="task-title">${allTasks[0].title}</span>
//                 <span id="description-container"></span>
//                 <span id="category-container" class="extra-info" >ssfs</span>
//                 <span id="date-container" class="extra-info" >sdf</span>
//                 <span id="urgency-container" class="extra-info" >sdf</span>
//                 <span id="assigned-container" class="extra-info" >sdf</span>
//             </div>
//         </div
//         `;

async function getTaskInfo() {
    let allTasksAsString = localStorage.getItem('allTasks');
    allTasks2 = JSON.parse(allTasksAsString);
    console.log(allTasks2);
}

function renderTaskInfo() {
    for (let i = 0; i < allTasks2.length; i++) {
        document.getElementById('todo-container').innerHTML += `
            <div class="task-unit">
                <div class="task-container">
                    <span class="task-title" id="description-container" class="description-container"><b>Title:</b> ${allTasks2[i].title}</span>
                    <span id="task-title" ><b>Description:</b>  ${allTasks2[i].description}</span>
                    <span id="category-container" class="extra-info" ><b>Category:</b>  ${allTasks2[i].category}</span>
                    <span id="date-container" class="extra-info"><b>Date: </b>${allTasks2[i].date}</span>
                    <span id="urgency-container" class="extra-info" ><b>Urgency: </b>${allTasks2[i].urgency}</span>
                    <span id="assigned-container" class="extra-info" ></span>
                </div>
            </div>`;
    }
}






