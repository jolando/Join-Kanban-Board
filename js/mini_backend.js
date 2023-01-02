let tasks;

async function getTasks() {
  try {
    let response = await fetch('https://sebastianseitz36.pythonanywhere.com/tasks/');
      tasks = await response.json();
    if (!response.ok)
      throw new Error("Response not ok");
    console.log(tasks);
  } catch (error) {
    console.error(error);
  }

}
async function saveTasks(task) {
  try {
    let response = await fetch('https://sebastianseitz36.pythonanywhere.com/tasks/',
      { method: 'POST', body: task, headers: {'Content-Type': 'application/json'} } );
    if (!response.ok)
      throw new Error("Response not ok");
    const tasks = await response.json();
    console.log(tasks);
  } catch (error) {
    console.error(error);
  }

}