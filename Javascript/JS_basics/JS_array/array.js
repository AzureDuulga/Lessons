// // let studentNames = ["boldo", "dorjo", "tsetsgee", "dulmaa"];
// // let i = 0;
// // while (i < studentNames.length) {
// //   if (studentNames[i][0] === "d") {
// //     console.log(studentNames[i]);
// //   }
// //   i++;
// // }

// // // Array of numbers
// // //1
// // let arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11],
// //   //2
// //   sum = 0;
// // for (let i = 0; i < arrayOfNumbers.length; i++) {
// //   sum += arrayOfNumbers[i];
// // }
// // console.log(sum);
// // //3 Hamgiin ih too
// // let max = 0;
// // for (let i = 0; i < arrayOfNumbers.length; i++) {
// //   if (max < arrayOfNumbers[i]) {
// //     max = arrayOfNumbers[i];
// //   }
// // }
// // console.log("Hamgiin ih utga:", max);
// // //4 Hamgiin baga too
// // let min = arrayOfNumbers[i];
// // for (let i = 0; i < arrayOfNumbers.length; i++) {
// //   if (min > arrayOfNumbers[i]) {
// //     min = arrayOfNumbers[i];
// //   }
// // }
// // console.log("Hamgiin baga utga:", min);
// // //5. Array - ийн эхэнд дурын 1 тоог нэм.

// // //Simple Array-1
// // let itCompanies = [
// //   "Facebook",
// //   "Google",
// //   "Microsoft",
// //   "Apple",
// //   "IBM",
// //   "Oracle",
// //   "Amazon",
// // ];
// // console.log(itCompanies);
// // console.log(itCompanies.length);
// // //Эхний компани, дунд болон сүүлчийн компанийг хэвлэх

// // console.log(itCompanies[0]);
// // console.log(itCompanies[Math.floor(Number(itCompanies.length) / 2)]);
// // console.log(itCompanies[Number(itCompanies.length) - 1]);
// // //Компани бүрийг хэвлэх

// // for (let i = 0; i < itCompanies.length; i++) {
// //   console.log(itCompanies[i]);
// // }
// // //Компанийн нэр тус бүрийг нэг нэгээр нь том үсгээр сольж хэвлэж гарга
// // console.log(
// //   "Компанийн нэр тус бүрийг нэг нэгээр нь том үсгээр сольж хэвлэж гарга"
// // );
// // for (let i = 0; i < itCompanies.length; i++) {
// //   console.log(itCompanies[i].toUpperCase());
// // }
// // //Array - г өгүүлбэр болгон хэвлэ: Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon зэрэг мэдээллийн технологийн томоохон компаниуд.

// // console.log(
// //   "Компанийн нэр тус бүрийг нэг нэгээр нь том үсгээр сольж хэвлэж гарга"
// // );
// // console.log(`${itCompanies} зэрэг мэдээллийн технологийн томоохон компаниуд.`);

// // //Simple Array - 2
// // //Array - аас эхний 3 компанийг хайчилж ав
// // const comp = itCompanies.slice(3);
// // console.log(comp);
// // console.log(itCompanies.slice(3));

// // //Array - аас сүүлийн 3 компанийг хайчилж ав
// // console.log(itCompanies.slice(0, -3));

// // //Мэдээллийн технологийн дунд компани эсвэл компаниудыг arrey - аас хайчилж ав

// // // console.log(
// // //   itCompanies.slice(
// // //     Math.floor(Number(itCompanies.length) / 2),
// // //     Math.ceil(Number(itCompanies.length) / 2)
// // //   )
// // // );
// // //Эхний мэдээллийн технологийн компанийг array - аас хас
// // console.log(itCompanies.slice(1));
// // //Сүүлийн мэдээллийн технологийн компанийг array - аас хас
// // console.log(itCompanies.slice(Number(itCompanies.length)));

// // //count word
// // let data = [
// //   "Засгийн",
// //   "газарт",
// //   "6.4",
// //   "сая",
// //   "тонн",
// //   "нүүрс",
// //   "алдагдсан",
// //   "гэх",
// //   "мэдээлэл",
// //   "ирээгүй",
// //   "байна.",
// //   "Бодит",
// //   "байдалд",
// //   "ийм",
// //   "их",
// //   "хэмжээний",
// //   "нүүрс",
// //   "алдагдсан",
// //   "гэх",
// //   "асуудал",
// //   "эргэлзээтэй",
// //   "байна.",
// //   "Хууль",
// //   "хяналтын",
// //   "байгууллага",
// //   "хяналт",
// //   "шалгалтын",
// //   "ажил",
// //   "явуулж",
// //   "байна",
// // ];
// // let utga = "нүүрс";
// // let count = 0;
// // for (let m = 0; m < data.length; m++) {
// //   if (utga === data[m]) {
// //     count++;
// //   }
// // }
// // console.log(utga, "тоо:", count);

// // //Duplicate counter
// // let input = 87602550504;

// // for (let j = 0; j <= 9; j++) {
// //   let number = 0;
// //   for (let i = 0; i < `${input}`.length; i++) {
// //     if (`${input}`[i] == j) {
// //       number++;
// //     }
// //   }
// //   console.log(`${j}:${number}`);
// // }

// // // console.log(number0);

// // //хоёр массивын үржвэр
// // arr1 = [3, 45, 23, 78, 34];
// // arr2 = [4, 2, 34, 4, 12, 1];
// // arr3 = [];
// // for (let i = 0; i < arr2.length; i++) {
// //   arr3[i] = arr1[i] * arr2[i];
// // }
// // console.log(arr3);

// // //Even and odd
// // let evOdd = [5, 6, 4, 12, 19, 121, 1, 7, 9, 63];
// // let even = 0;
// // let odd = 0;
// // for (let i = 0; i < evOdd.length; i++) {
// //   console.log(evOdd[i]);
// //   if (evOdd[i] % 2 == 0) {
// //     even++;
// //   } else if (evOdd[i] % 2 !== 0) {
// //     odd++;
// //   }
// // }
// // console.log("тэгш тоо: ", even);
// // console.log("тэгш тоо: ", odd);

// // //Өгөгдсөн массив дахь давхардсан утгa

// // // let array1 = [4, 2, 34, 4, 1, 12, 1, 4];

// // // for (let j = 0; j < array1.length; j++) {
// // //   if (array1[j]) {
// // //   }
// // // }

// //Өгөгдсөн массив дахь давхардсан утгa

// let davhardsanFunc = (arr) => {
//   let sorted_arr = arr.slice().sort();
//   console.log(sorted_arr);
//   let results = [];
//   let results2 = [];
//   for (let i = 0; i < sorted_arr.length; i++) {
//     if (sorted_arr[i] in results) continue;
//     if (sorted_arr[i + 1] == sorted_arr[i]) {
//       //1,0 2,1
//       if (sorted_arr[i] in results) {
//         console.log("ss", results);
//       } else results.push(sorted_arr[i]);
//     }
//   }
//   return results;
// };
// let OgogdsonMassive = [4, 2, 34, 4, 1, 12, 1, 4];
// console.log(
//   `Өгөгдсөн массив дахь ${OgogdsonMassive} давхардсан утгa ${davhardsanFunc(
//     OgogdsonMassive
//   )}`
// );

//Routine
let activities = [
  ["Ажил", 10],
  ["идэх", 1],
  ["ярилцах", 2],
  ["Тоглох", 3],
  ["Унтах", 8],
];
console.table(activities);

for (let i = 0; i < activities.length; i++) {
  let activitiesPercent = Math.floor((activities[i][1] / 24) * 100) + "%";
  activities[i].push(activitiesPercent);
}
console.log(activities);
