function initIndexPage() {
    includeHTML();
    renderIndexPage();
}

function renderIndexPage() {
    document.getElementById('index-container').innerHTML += `
    <div class="board">
    <div class="column">
      <h2>TODO</h2>
      <div class="board-column" id="todo-container"></div>
    </div>
    <div class="column">
      <h2>IN PROGRESS</h2>
      <div class="board-column"></div>
    </div>
    <div class="column">
      <h2>TESTING</h2>
      <div class="board-column"></div>
    </div>
    <div class="column">
      <h2>DONE</h2>
      <div class="board-column"></div>
    </div>
  </div>
    `;
}