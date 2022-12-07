function sainuu() {
  console.log("Hello pineconde");
}
sainuu();

function sainuu1(name) {
  console.log("Сайна уу " + name);
}
sainuu1("Mongol");

function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}

//Функцууд зохиох
//1. Өгөгдсөн 2 тооны ихийг олох функц бич.
let x = function ihBaga(a, b) {
  if (a > b) {
    console.log(a, "их");
  } else {
    console.log(b, "их");
  }
};
x(4, 5);

//2. Өгөгдсөн array -аас өгөгдсөн тоо байгаа эсэхийг олох функц бич. Тухайн тоо байвал индексийг буцаана. Байхгүй бол -1 буцаана.

let arr1 = [234, 345, 54, 8, 456, 6456];
let duriinToo = function ogogdsonTooShalgah(randomNum) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === randomNum) {
      return i;
    }
  }
  return -1;
};
console.log("Тавтагдсан тоо index: ", duriinToo(8));

//3. Өгөгдсөн тэмдэгт мөрөөс -аас өгөгдсөн тэмдэгт байгаа эсэхийг олох функц бич. Тухайн тэмдэгт байвал индексийг буцаана. Байхгүй бол -1 буцаана.
let arr2 = ["dfg", "ouhst", "h", "iyegr"];
let duriinText = function ogogdsonTextShalgah(randomText) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr2[i] === randomText) {
      return i;
    }
  }
  return -1;
};
console.log("Тавтагдсан текс тindex: ", duriinText("h"));

//4. Өгөгдсөн 2 тоон интервал дахь санамсаргүй тоо буцаах функц бич.

function randomNumBetween(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
console.log("тоон интервал дахь санамсаргүй тоо", randomNumBetween(1, 7));
//5. Өгөгдсөн array - ийн дундажыг олох функц бич.

let arrAverage = [243, 3456, 356, 5646, 67];

function dundajOloh(arrays) {
  let sum = 0;
  for (let i = 0; i < arrays.length; i++) {
    sum += arrays[i];
  }
  let dundaj2 = sum / arrays.length;
  return dundaj2;
}
let dundaj1 = dundajOloh(arrAverage);
console.log(`${arrAverage}-н дундаж ${dundaj1}`);

//6. Өгөгдсөн array - ийн нийлбэрийг олох функц бич.

let sum = 0;
function niilberOloh(arrays) {
  for (let i = 0; i < arrays.length; i++) {
    sum += arrays[i];
  }
  return sum;
}
let niilber = niilberOloh(arrAverage);
console.log(`${arrAverage}-н нийлбэр ${sum}`);

//7. Өгөгдсөн тоо анхны эсэхийг олох функц бич.

function isPrime(n) {
  let Prime = fasle;
  for (let i = 2; i < n, i++; ) {
    n % 2 === 0;
  }
}
