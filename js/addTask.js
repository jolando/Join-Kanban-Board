

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


function renderBacklogCard() {
    let contentContainer = document.getElementById('backlog');
    contentContainer.innerHTML = '';
    contentContainer.innerHTML += `
        <div class="backlog-unit">
            <span class="category-color"></span>
            <div class="backlog-unit-content">
                <div class="user-inforamtion-container">
                    <img class="profile-picture" src="img/profile.png">
                    <div class="user-information">
                        <span class="backlog-unit-name">Darrin S. Jones</span>
                        <span class="backlog-unit-email">Darrin@gmail.com</span>
                    </div>
                </div>
                <span class="category">Marketing</span>
                <span class="backlog-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                    minima!</span>
            </div>
        </div>
    `;
}




