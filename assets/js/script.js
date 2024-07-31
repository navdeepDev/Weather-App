let form = document.querySelector("#addForm");
let flexBox = document.querySelector(".flexBox");
let allTask;
let taskList = [];

const addTask = () => {
  let inputValue = form.querySelector("#addTask").value;
  let addTaskDiv = document.createElement("li");
  addTaskDiv.classList.add("task");
  addTaskDiv.innerHTML = `${inputValue} 
  <svg class="editButton" width="100" height="340" viewBox="0 0 100 340" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="50" fill="#000"/>
    <circle cx="50" cy="170" r="50" fill="#000"/>
    <circle cx="50" cy="290" r="50" fill="#000"/>
  </svg>
  `;
  flexBox.appendChild(addTaskDiv);
  form.querySelector("#addTask").value = "";
};

const addTaskStore = () => {
  taskList = [];
  let allTasks = document.querySelectorAll(".task");
  allTasks.forEach((task) => {
    let taskText = task.childNodes[0].textContent.trim();
    taskList.push(taskText);
  });
  let taskListJSON = JSON.stringify(taskList);
  localStorage.setItem("addedTask", taskListJSON);
};

const getAddedTask = () => {
  let getTask = localStorage.getItem("addedTask");
  let newGetTask = JSON.parse(getTask);
  for (let index = 0; index < newGetTask.length; index++) {
    const element = newGetTask[index];
    let addTaskDiv = document.createElement("li");
    addTaskDiv.classList.add("task");
    addTaskDiv.innerHTML = `${element}
    <svg class="editButton" width="100" height="340" viewBox="0 0 100 340" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="50" fill="#000"/>
      <circle cx="50" cy="170" r="50" fill="#000"/>
      <circle cx="50" cy="290" r="50" fill="#000"/>
    </svg>
    `;
    flexBox.appendChild(addTaskDiv);
  }
};
document.addEventListener("onload", getAddedTask());
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask();
  setTimeout(() => {
    addTaskStore();
  }, 100);
});
