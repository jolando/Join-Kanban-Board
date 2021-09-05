
function initBackLog() {
    includeHTML();
    renderBacklogPage();
    renderBacklogCard();
}


function renderBacklogPage() {
    document.getElementById('backlog-content-container').innerHTML = `
        <div class="backlog-container">
            <div w3-include-html="templates/nav.html"></div>
                <h1 class="backlog-main-title">Backlog</h1>
                <h3 class="backlog-subtitle">Learning Management System Project</h3>
            <div class="sub-titles-section">
                <span>ASSIGNED TO</span>
                <span class="category-title">CATEGORY</span>
                <span>DETAILS</span>
            </div>
            <div id="backlog" class="backlog-unit-content">   
        </div>
    `;
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