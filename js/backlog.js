
function initBacklog() {
    includeHTML();
    renderBacklogCard();
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