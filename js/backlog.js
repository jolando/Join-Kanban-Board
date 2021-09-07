
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


