const h3_1 = document.getElementsByTagName("h3")[0];
const h3_2 = document.getElementsByTagName("h3")[1];

h3_1.style.backgroundColor = "red";
h3_2.style.backgroundColor = "yellow";

const changeColor1 = () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  h3_1.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
};
const changeColor2 = () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  h3_2.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
};
const changeColor = () => {
  changeColor1();
  changeColor2();
};

addEventListener("click", changeColor);
