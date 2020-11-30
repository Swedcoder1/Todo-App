//SELECTORS
const addBtn = document.querySelector("#addbtn");
const listDiv = document.querySelector("#list");
const textArea = document.querySelector("#textarea");

//EVENTLISTENERS
document.addEventListener("DOMContentLoaded", getList);
addBtn.addEventListener("click", createTask);
listDiv.addEventListener("click", delTask);

function createTask(event) {
  event.preventDefault();
  //CREATE NEW DIV
  let div = document.createElement("div");
  div.classList.add("task");
  listDiv.appendChild(div);
  // ADD LIST TO LOCALSTORAGE 
  saveLocalList(textArea.value);
  //CREATE NEW LI
  let newLi = document.createElement("li");
  newLi.innerHTML = textArea.value;
  div.appendChild(newLi);
  newLi.classList.add("new-task")
  // CREATE CHECKBTN
  let checkBtn = document.createElement("button");
  checkBtn.innerHTML = '<i class="fas fa-check"></i>'
  checkBtn.classList.add("checkbtn")
  div.appendChild(checkBtn);
  // CREATE DELETEBTN
  let delBtn = document.createElement("button");
  delBtn.innerHTML = '<i class="fas fa-trash"></i>';
  delBtn.classList.add("delbtn")
  div.appendChild(delBtn);

  textArea.value = '';
}

function delTask(e) {
 const item = e.target;
 //DELETE TASK
 if(item.classList[0] === "delbtn") {
   const todo = item.parentElement;
   deleteLocalTask(todo);
   todo.remove();
   
 }

 //COMPLETE TASK
 if(item.classList[0] === "checkbtn") {
  const todo = item.parentElement;
  todo.classList.toggle("completed");
}
}

function saveLocalList(task) {
  let todos; 
  if(localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage
      .getItem("todos"));
  }
  
  todos.push(task);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteLocalTask(task) {
  let todos; 
  if(localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage
      .getItem("todos"));
  }

  const taskIndex = task.children[0].innerHTML;
  todos.splice(todos.indexOf(taskIndex), 1)
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getList() {
  let todos; 
  if(localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage
      .getItem("todos"));
  }

  todos.forEach(function(task) {
    //CREATE NEW DIV
  let div = document.createElement("div");
  div.classList.add("task");
  listDiv.appendChild(div);
  //CREATE NEW LI
  let newLi = document.createElement("li");
  newLi.innerHTML = task;
  div.appendChild(newLi);
  newLi.classList.add("new-task")
  // CREATE CHECKBTN
  let checkBtn = document.createElement("button");
  checkBtn.innerHTML = '<i class="fas fa-check"></i>'
  checkBtn.classList.add("checkbtn")
  div.appendChild(checkBtn);
  // CREATE DELETEBTN
  let delBtn = document.createElement("button");
  delBtn.innerHTML = '<i class="fas fa-trash"></i>';
  delBtn.classList.add("delbtn")
  div.appendChild(delBtn);
  })

}

