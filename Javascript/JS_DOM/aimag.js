console.log(document.querySelector("ul").lastElementChild.textContent);
console.log(document.querySelector("ul").firstElementChild.textContent);
console.log(document.getElementById("aimag-315").textContent);
// var li = document.getElementsByTagName("li");
let ehniih = document.querySelectorAll("li")[0].textContent;
console.log(ehniih);
const li = document.querySelectorAll("li");
for (let i = 0; i < document.querySelectorAll("li").length; i++) {
  li[i].style.fontSize = "25px";
  li[i].style.color = "blue";
  li[i].style.border = "thick solid #0000FF";
  li[i].style.padding = "20px";
  li[i].style.margin = "20px";
  li[i].style.fontFamily = "Arial, Helvetica, sans-serif";
}
let id = document.getElementsByClassName("aimags")[0].id;
console.log(id[6]);
console.log(li.length);
for (let i = 0; i < li.length; i++) {
  if (li[i].id[6] == 1) {
    li[i].style.backgroundColor = "yellow";
  } else if (li[i].id[6] == 2) {
    li[i].style.backgroundColor = "green";
  } else if (li[i].id[6] == 3) {
    li[i].style.backgroundColor = "gray";
  } else if (li[i].id[6] == 4) {
    li[i].style.backgroundColor = "lime";
  } else li[i].style.backgroundColor = "red";
}
