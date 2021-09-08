
// window.apiRoot = location.origin + '/wp-json/wp/v2/';
// import { apiRoot, acfApiRoot } from '/config.js';
// export const acfApiRoot = location.origin + '/wp-json/acf/v3/';
// const apiRoot    = location.origin + '/wp-json/wp/v2/';

let allTasks3 = [];
let users = [
    {
        'name': Jones,
        'profileImg': description,
        'email': 'Jones@gmail.com',
    },
    {
        'name': Hannes,
        'profileImg': description,
        'email': 'Hannes@gmail.com',
    },
    {
        'name': Anna,
        'profileImg': description,
        'email': 'Anna@gmail.com',
    },
    {
        'name': Joe,
        'profileImg': description,
        'email': 'Joe@gmail.com',
    },
];


function initBacklog() {
    includeHTML();
    renderBacklogCard();
    getTaskInfo();
    renderBacklogCard();
}

function getTaskInfo() {
    let allTasksAsString = localStorage.getItem('allTasks');
    allTasks3 = JSON.parse(allTasksAsString);
    console.log(allTasks3);
}

function renderBacklogCard() {
    let contentContainer = document.getElementById('backlog');
    contentContainer.innerHTML = '';
    for (let i = 0; i < allTasks3.length; i++) {
        const task = allTasks3[i];


        contentContainer.innerHTML += `
            <div class="backlog-unit">
                <span class="category-color"></span>
                <div class="backlog-unit-content">
                    <div class="user-inforamtion-container">
                        <img class="profile-picture" src="img/profile.png">
                        <div class="user-information">
                            <span class="backlog-unit-name">${task.title}Darrin S. Jones</span>
                            <span class="backlog-unit-email">Darrin@gmail.com</span>
                        </div>
                    </div>
                    <span class="category">Marketing</span>
                    <span class="backlog-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, minima!</span>
                </div>
            </div>
        `;
    }


}


function renderRightColor() {
    if (category == 'Managemant') {
        return '';
    }
    if (category == 'Marketing') {
        return '';
    }
    if (category == 'Product') {
        return '';
    }
    if (category == 'Sales') {
        return '';
    }
}