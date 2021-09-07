let allTasks = [];

function initAddTask() {
  includeHTML();
}


function addTask(event) {
  event.preventDefault();
  let title = document.getElementById('title-field').value;
  let description = document.getElementById('description-field').value;
  let date = document.getElementById('date-field').value;
  


  let task = {
    'title': title,
    'description': description,
    // 'Category': Category,
    'date': new Date().getTime()
  };

  allTasks.push(task);
  console.log(allTasks);
  let allTasksAsString = JSON.stringify(allTasks);
  console.log(allTasksAsString);
  localStorage.setItem('allTasks', allTasksAsString);

  // window.location.href = 'board.html';
}



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