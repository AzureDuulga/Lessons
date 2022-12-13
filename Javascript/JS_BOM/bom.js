// function openWindow() {
//   let url = "http://www.google.com";
//   window.open(url, "");
// }

// const showAlert = () => {
//   alert("Sainuu Homie");
// };
const h1 = document.getElementsByTagName("h1")[0];
console.log(h1);

const startBtn = document.getElementsByTagName("button")[0];
const stopBtn = document.getElementsByTagName("button")[1];

startBtn.addEventListener("click", increament);
stopBtn.addEventListener("click", stop);

let second = 0;
let minute = 0;
let hours = 0;

const increament = () => {
  second = new Date().getSeconds();
  minute = new Date().getMinutes();
  hours = new Date().getHours();
  h1.innerHTML = `Time:${hours}:${minute}:${second}`;
};
const stop = () => {
  clearInterval(timer);
};

// setTimeout(increament, 1000); //Zovhon neg udaa ajilna
const timer = setInterval(increament, 1000); //Bainga ajilna
