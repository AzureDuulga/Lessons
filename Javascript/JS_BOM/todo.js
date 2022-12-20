const taskArray = [];
const inputText = document.querySelector("#borderbottom");
const priority = document.querySelector("#priority");
const addBtn = document.querySelector("#button-addon2");
let taskList = document.getElementById("tasks");
var remainingTasks = document.getElementById("remainingTasks");

//Ognoo starts here ---->
var ognoo = document.getElementById("time");
function time() {
  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth();
  var day = d.getDate();
  ognoo.textContent = "Он сар өдөр: " + year + "-" + month + "-" + day;
}
setInterval(time, 1000);
//Remaining task counter starts here--->
uldsenTask = () => {
  remainingTasks.textContent = `${taskArray.length} tasks үлдлээ!`;
};
uldsenTask();
//add tasks start here ---->>
const fulljagsaalt = () => {
  taskList.innerHTML = "";
  for (let i = 0; i < taskArray.length; i++) {
    let text = `<div class="row rounded border ${taskArray[i].priority} p-1 my-3" id="jagsaalt">
                  <input
                    class="col-8"
                    type="text"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    readonly
                    value="${taskArray[i].name}"
                  />
                  <div class="col p-0">
                    <button type="button" class="btn p-2" onclick="editBtn(${i})">
                      <i class="bi bi-pencil-fill"></i>
                    </button>
                    <button type="button" class="btn p-2" onclick="checkBtn(${i})">
                      <i class="bi bi-check2 text-success"></i>
                    </button>
                    <button type="button" class="btn p-2" onclick="deleteBtn()">
                      <i class="bi bi-trash text-danger"></i>
                    </button>
                  </div>
                </div>`;
    taskList.innerHTML += text;
  }
};

const taskArrayNemeh = () => {
  let text = inputText.value;
  let zereglel = priority.value;
  if (text === "") {
    alert("Ta utga oruulna uu");
  } else {
    taskArray.push({ name: text, status: "false", priority: zereglel }); //[{name:"asdasd"}]
    fulljagsaalt();
    uldsenTask();
    // console.log(taskList.children[i]);
  }
};
addBtn.addEventListener("click", taskArrayNemeh);
document.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    taskArrayNemeh();
  }
});

//Delete tasks starts here---->

const deleteBtn = (i) => {
  taskArray.splice(i, 1);
  fulljagsaalt();
  uldsenTask();
};

//Edit tasks start here----->

const editBtn = (i) => {
  taskList.children[i].children[0].removeAttribute("readonly");
  let text = taskList.children[i].children[0].value;
  taskArray[i].name = text;
  console.log(taskArray[i]);
};

//Check tasks start here----->
const checkBtn = (i) => {
  if (taskArray[i].status == "false") {
    taskArray[i].status = "true";
    taskList.children[i].classList.add("crosstext");
  } else if (taskArray[i].status == "true") {
    taskArray[i].status = "false";
    taskList.children[i].classList.remove("crosstext");
  }
};
