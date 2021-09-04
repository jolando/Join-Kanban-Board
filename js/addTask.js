

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