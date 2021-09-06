let allTasks = [];


function changeUrgency(){
    let urgency = document.getElementById('urgency-content');
    if (urgency.classList.contains('d-none')){
        urgency.classList.remove('d-none')
    } else {
        urgency.classList.add('d-none');
    }
}

function highUrgency(){
    document.getElementById('urgency-status-field').innerHTML = 'High';
    document.getElementById('urgency-content').classList.add('d-none');
}
function mediumUrgency(){
    document.getElementById('urgency-status-field').innerHTML = 'Medium';
    document.getElementById('urgency-content').classList.add('d-none');
}
function lowUrgency(){
    document.getElementById('urgency-status-field').innerHTML = 'Low';
    document.getElementById('urgency-content').classList.add('d-none');
}

function addTask() {
    let title = document.getElementById('title-field').value;
    let description = document.getElementById('description-field').value;
    let date = document.getElementById('date-field').value;

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
                <span id="task-title">${allTasks[i].title}</span>
                <span id="description-container"></span>
                <span id="category-container" class="extra-info" >sfs</span>
                <span id="date-container" class="extra-info" >sdf</span>
                <span id="urgency-container" class="extra-info" >sdf</span>
                <span id="assigned-container" class="extra-info" >sdf</span>
            </div>
        </div
        `;
    }
}