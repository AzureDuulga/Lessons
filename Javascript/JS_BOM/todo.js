const taskArray = [];
const inputText = document.querySelector("#borderbottom");
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
    let text = `<div class="row rounded border border-warning p-1 my-3" id="jagsaalt">
                  <input
                    class="col-8"
                    type="text"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    readonly
                    value="${taskArray[i]}"
                  />
                  <div class="col p-0">
                    <button type="button" class="btn p-2" onclick="editBtn(${i})">
                      <i class="bi bi-pencil-fill"></i>
                    </button>
                    <button type="button" class="btn p-2" onclick="checkBtn(this)">
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
  if (text === "") {
    alert("Ta utga oruulna uu");
  } else {
    taskArray.push(text);
    fulljagsaalt();
    uldsenTask();
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
console.log(taskArray);

//Edit tasks start here----->

const editBtn = (i) => {
  taskList.children[i].children[0].removeAttribute("readonly");
};
