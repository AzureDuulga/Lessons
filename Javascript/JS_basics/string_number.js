// //Escape sequences
// console.log("JS String");
// console.log(`Hello I am "Name Here".
// I am 'Age here' years old.
// This is the new line with tab and some \backslashes\.`);

// //simple assignment
// console.log("simple assignment ");
// 1;
// const fName = "Duulga",
//   lName = "Enkhtur";
// console.log(fName, lName);
// console.log(fName.length);
// console.log(lName.length);

// 2, 3;
// console.log("ТОМ БОЛОН ЖИЖИГ ҮСЭГ РҮҮ ХӨРВҮҮЛЭХ");
// const jijigUseg = "Loremjdfjkhsd";
// console.log(jijigUseg.toLowerCase());
// console.log(jijigUseg.toUpperCase());
// 4;
// console.log(
//   "Pinecone academy- н болон  leap хөтөлбөрт тавтай морилго уу?  - г нэг мөр болгон нэгтгэнэ үү. "
// );
// let pineCone = "Pinecone academy- н";
// let leap = pineCone.concat("", " leap хөтөлбөрт тавтай морилго уу?");
// console.log(leap);

// 5;
// console.log("5.Oguulber zohioh");
// let country = "Mongolia";
// let city = "Ulaanbaatar";
// let age = 24;
// let job = "software engiiner";
// let oguulber =
//   "Намайг " +
//   lName +
//   " овогтой " +
//   fName +
//   " гэдэг." +
//   "Би " +
//   city +
//   " хотд амьдардаг, " +
//   age +
//   " настай, " +
//   job +
//   " мэргэжилтэй.";
// console.log(oguulber);

// // 6.Escape arilgah
// let removeSpace = `1 2 3 4 5
// 2 3 4 5 1
// 3 4 5 1 2
// 4 5 1 2 3
// 5 1 2 3 4`;
// console.log(removeSpace);

// //Огноо хэвлэн гаргах
// let jil = prompt("Ta odoogiin jil oruulna uu:", 2022);
// let sar = prompt("Ta odoogiin  sar oruulna uu:", 09);
// let odor = prompt("Ta odoogiin odor oruulna uu:", 22);

// if (sar <= 9) {
//   sar = "0" + sar;
// }
// if (odor <= 9) {
//   odor = "0" + odor;
// }
// console.log(`${jil}-${sar}-${odor}`);
// //Операторыг олох
// let operater = prompt("Ta utasnii dugaaraa orullna uu:", 99001234);
// if (
//   operater.substring(0, 2) == 94 ||
//   operater.substring(0, 2) == 95 ||
//   operater.substring(0, 2) == 99 ||
//   operater.substring(0, 2) == 85 ||
//   operater.substring(0, 2) == 84 ||
//   operater.substring(0, 2) == 90 ||
//   operater.substring(0, 2) == 87
// ) {
//   console.log("Mobicom");
// } else if (
//   operater.substring(0, 2) == 86 ||
//   operater.substring(0, 2) == 88 ||
//   operater.substring(0, 2) == 89 ||
//   operater.substring(0, 2) == 80
// ) {
//   console.log("Unitel");
// } else if (operater.substring(0, 2) == 60 || operater.substring(0, 2) == 66) {
//   console.log("Ondo");
// } else if (operater.substring(0, 2) == 90 || operater.substring(0, 2) == 91) {
//   console.log("Skytel");
// } else console.log("Ta zov utga oruulna uu");

//<---Number daalgavar starts here--->
//Nearest Number
// console.log("Nearest number");
// let butarhai = prompt("Butarhai too oruulna uu:", 0.234523);
// console.log(Math.round(butarhai));

// //3 orontoi toonii niilber
// let too3 = prompt("3 orontoi too oruulna uu:", 345);
// too3 = Number(too3);
// let num1 = too3 / 100;
// let num2 = too3 / 100;

//general-triangle
console.log("general-triangle");
let traingleA = 3,
  traingleB = 4;
let triangleC = Math.sqrt(traingleA ** 2 + traingleA ** 2);
console.log(Math.round(triangleC));
//Simple assignment
console.log(
  "0-ээс 100 хүртэл санамсаргүй тоо: ",
  Math.random() * (100 - 0) + 0
);
console.log(
  "50-ээс 255 хүртэл санамсаргүй тоо: ",
  Math.random() * (255 - 50) + 50
);

//Validate phone number
