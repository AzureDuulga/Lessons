// let number = 0;

// while (number <= 10){
//     console.log(number);
//     number += 1;
// }

// //10 хүртэлх натурал тооны сондгой тоонуудыг хэвлэх программ бич
// console.log("10 хүртэлх натурал тооны сондгой");

// number = 0

// while (number <= 10){
//     if (number % 2 !== 0){
//         console.log(number);
//     }
//     number += 1;
// }
// //10 хүртэлх натурал тооны тэгш тоонуудыг хэвлэх программ бич
// console.log("10 хүртэлх натурал тооны тэгш");

// number = 0

// while (number <= 10){
//     if (number % 2 == 0){
//         console.log(number);
//     }
//     number += 1;
// }
// //100 хүртэлх натурал тооны нийлбэрийг олох программ бич

// console.log('100 hurtleh sum');
// number = 1
// let sum = 0

// while (number <= 100){
//     sum += number
//     number ++
// }
// console.log(sum);

// //5. N хүртэлх натурал тооны хэвлэх болон тэдгээр тооны нийлбэрийг олох программ бич

// number = prompt('Duriin too oruulj niilberiin olno uu?')
// sum = 0
// let total = 0

// while (sum <= number){
//     total += sum
//     sum ++
// }
// console.log( number, 'too hurtleh nilber:', total);

// //6. Өгөгдсөн тоог анхны мөн эсэхийг олох программ бич

let n = prompt("Duriin too oruulj anhnii too mon eshiig medne uu?");
let isPrime = true;
if (n === 2) {
  console.log(`${n} анхны тоо мөн`);
} else {
  let i = 2;
  while (i < n) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
    i++;
  }
  if (isPrime) {
    console.log(`${n} анхны тоо мөн`);
  } else {
    console.log(`${n} анхны тоо биш`);
  }
}
