//SELECTORS
const addBtn = document.querySelector("#addbtn");
const listDiv = document.querySelector("#list");

function createTask(e) {
  const textArea = document.querySelector("#textarea").value;
  //CREATE NEW DIV
  let div = document.createElement("div");
  div.classList.add("task");
  listDiv.appendChild(div);
  //CREATE NEW LI
  let newLi = document.createElement("li");
  newLi.innerText = `${textArea}`;
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

}

function delTask(e) {
 const item = e.target;
 //DELETE TASK
 if(item.classList[0] === "delbtn") {
   const todo = item.parentElement;
   todo.remove();
 }

 //COMPLETE TASK
 if(item.classList[0] === "checkbtn") {
  const todo = item.parentElement;
  todo.classList.toggle("completed");
}
}

//EVENTLISTENERS
addBtn.addEventListener("click", createTask);
listDiv.addEventListener("click", delTask);