// document.addEventListener("keypress", (event) => {
//   console.log("Darsan");
//   if (event.key == "Enter") {
//     console.log("Enter daragdlaa");
//   }
// });
const inputText = document.querySelector("#borderbottom");
const addBtn = document.querySelector("#button-addon2");
const taskList = document.getElementById("tasks");
const remainingTasks = document.getElementById("remainingTasks");

var ognoo = document.getElementById("time");
function time() {
  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth();
  var day = d.getDate();
  ognoo.textContent = "Он сар өдөр: " + year + "-" + month + "-" + day;
}
setInterval(time, 1000);
// Үлдэгдэл task counter
function uldsenTask=()=>{
  remainingTasks.textContent = ``;
}

//Task Нэмэх

const cardItem = (text) => {
  return `<div class="row rounded border border-warning p-1 my-3" id="jagsaalt">
    <input
      class="col-8"
      type="text"
      placeholder="Coding"
      aria-label="Username"
      aria-describedby="basic-addon1"
      readonly
      value="${text}"
    />
    <div class="col p-0">
      <button type="button" class="btn p-2">
        <i class="bi bi-pencil-fill"></i>
      </button>
      <button type="button" class="btn p-2" onclick="checkBtn(this)">
        <i class="bi bi-check2 text-success"></i>
      </button>
      <button type="button" class="btn p-2" onclick="deleteBtn(this)">
        <i class="bi bi-trash text-danger"></i>
      </button>
    </div>
  </div>`;
};

const taskAdd = () => {
  let text = inputText.value;
  console.log(text);
  if (text === "") {
    alert("Ta utga oruulna uu");
  } else {
    taskList.innerHTML += cardItem(text);
    console.log(taskList);
  }
};

addBtn.addEventListener("click", taskAdd);
document.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    taskAdd();
  }
});

//Delete hiih
const deleteBtn = (e) => {
  const parent = e.parentNode.parentNode.parentNode;
  const child = e.parentNode.parentNode;
  parent.removeChild(child);
};

//Check hiih
const checkBtn = (e) => {
  const parent = e.parentNode.parentNode.parentNode;
  const child = e.parentNode.parentNode;
  parent.removeChild(child);
};
