// <----While Loop starts here----->

// <----While Loop - №1 starts here ----->
// let number = 0;
// while (number <= 10){
//     console.log(number);
//     number += 1;
// }

// <----While Loop - №2 starts here----->
// //10 хүртэлх натурал тооны сондгой тоонуудыг хэвлэх программ бич

// console.log("10 хүртэлх натурал тооны сондгой");

// number = 0

// while (number <= 10){
//     if (number % 2 !== 0){
//         console.log(number);
//     }
//     number += 1;
// }

// <----While Loop - №3 starts here----->
// //10 хүртэлх натурал тооны тэгш тоонуудыг хэвлэх программ бич

// console.log("10 хүртэлх натурал тооны тэгш");

// <----While Loop - №4 starts here----->
// number = 0
// while (number <= 10){
//     if (number % 2 == 0){
//         console.log(number);
//     }
//     number += 1;
// }
// //100 хүртэлх натурал тооны нийлбэрийг олох программ бич

// console.log('100 hurtleh sum');

// <----While Loop - №5 starts here----->
// number = 1
// let sum = 0

// while (number <= 100){
//     sum += number
//     number ++
// }
// console.log(sum);

// <----While Loop - №5 starts here----->
// //5. N хүртэлх натурал тооны хэвлэх болон тэдгээр тооны нийлбэрийг олох программ бич

// number = prompt('Duriin too oruulj niilberiin olno uu?')
// sum = 0
// let total = 0

// while (sum <= number){
//     total += sum
//     sum ++
// }
// console.log( number, 'too hurtleh nilber:', total);

// <----While Loop - №=6 starts here----->
// //6. Өгөгдсөн тоог анхны мөн эсэхийг олох программ бич

// let n = prompt("Duriin too oruulj anhnii too mon eshiig medne uu?");
// let isPrime = true;
// if (n === 2) {
//   console.log(`${n} анхны тоо мөн`);
// } else {
//   let i = 2;
//   while (i < n) {
//     if (n % i === 0) {
//       isPrime = false;
//       break;
//     }
//     i++;
//   }
//   if (isPrime) {
//     console.log(`${n} анхны тоо мөн`);
//   } else {
//     console.log(`${n} анхны тоо биш`);
//   }
// }

// <----While Loop - №=7 starts here----->
//7. Өгөгдсөн интервал дахь анхны тоог хэвлэх программ бич

// let min = 10;
// let max = 20;

// // while (min <= max) {
//   if (min % 2 == 0) {
//     console.log(`${min} анхны тоо`);
//     min++;
//   }
// }

// <----While Loop - №=8 starts here----->
//8. N тооны факториал олох программ бич
// let n = 3;
// let i = 1;
// let urjiver = 1;
// while (i < n) {
//   urjiver = urjiver + urjiver * i;
//   i++;
// }
// console.log(`${n} тооны факториал бол ${urjiver}`);

// <----While Loop - №=9 starts here----->
//9. Өгөгдсөн тооны цифрүүдийн нийлбэрийг олох программ бич
///?????????????????????

// <----While Loop - №=10 starts here----->
//N хүртэлх тооны сондгой тоо хэвлэх болон түүний нийлбэрийг олох программ бич
// n = 10;
// i = 0;
// let oddSum = 0;

// while (i <= n) {
//   if (i % 3 == 0) {
//     console.log(`${i} бол сондгой тоо`);
//     oddSum += i;
//     i++;
//   } else {
//     i++;
//   }
// }
// console.log(`${oddSum} бол ${n} хүртэл сондгой тооны нийлбэр`);

// <----While Loop - №=11 starts here----->
//11. N хүртэлх тооны тэгш тоо хэвлэх болон түүний нийлбэрийг олох программ бич
n = 10;
i = 0;
let evenSum = 0;

while (i <= n) {
  if (i % 2 == 0) {
    console.log(`${i} бол тэгш тоо`);
    evenSum += i;
    i++;
  } else {
    i++;
  }
}
console.log(`${evenSum} бол ${n} хүртэл тэгш тооны нийлбэр`);
