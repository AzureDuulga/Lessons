let studentNames = ["boldo", "dorjo", "tsetsgee", "dulmaa"];
let i = 0;
while (i < studentNames.length) {
  if (studentNames[i][0] === "d") {
    console.log(studentNames[i]);
  }
  i++;
}

// Array of numbers
//1
let arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11],
  //2
  sum = 0;
for (let i = 0; i < arrayOfNumbers.length; i++) {
  sum += arrayOfNumbers[i];
}
console.log(sum);
//3 Hamgiin ih too
let max = 0;
for (let i = 0; i < arrayOfNumbers.length; i++) {
  if (max < arrayOfNumbers[i]) {
    max = arrayOfNumbers[i];
  }
}
console.log("Hamgiin ih utga:", max);
//4 Hamgiin baga too
let min = arrayOfNumbers[i];
for (let i = 0; i < arrayOfNumbers.length; i++) {
  if (min > arrayOfNumbers[i]) {
    min = arrayOfNumbers[i];
  }
}
console.log("Hamgiin baga utga:", min);
//5. Array - ийн эхэнд дурын 1 тоог нэм.

//Simple Array-1
let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(itCompanies);
console.log(itCompanies.length);
//Эхний компани, дунд болон сүүлчийн компанийг хэвлэх

console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(Number(itCompanies.length) / 2)]);
console.log(itCompanies[Number(itCompanies.length) - 1]);
//Компани бүрийг хэвлэх

for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}
//Компанийн нэр тус бүрийг нэг нэгээр нь том үсгээр сольж хэвлэж гарга
console.log(
  "Компанийн нэр тус бүрийг нэг нэгээр нь том үсгээр сольж хэвлэж гарга"
);
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i].toUpperCase());
}
//Array - г өгүүлбэр болгон хэвлэ: Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon зэрэг мэдээллийн технологийн томоохон компаниуд.

console.log(
  "Компанийн нэр тус бүрийг нэг нэгээр нь том үсгээр сольж хэвлэж гарга"
);
console.log(`${itCompanies} зэрэг мэдээллийн технологийн томоохон компаниуд.`);

//Simple Array - 2
//Array - аас эхний 3 компанийг хайчилж ав
const comp = itCompanies.slice(3);
console.log(comp);
console.log(itCompanies.slice(3));

//Array - аас сүүлийн 3 компанийг хайчилж ав
console.log(itCompanies.slice(0, -3));

//Мэдээллийн технологийн дунд компани эсвэл компаниудыг arrey - аас хайчилж ав

// console.log(
//   itCompanies.slice(
//     Math.floor(Number(itCompanies.length) / 2),
//     Math.ceil(Number(itCompanies.length) / 2)
//   )
// );
//Эхний мэдээллийн технологийн компанийг array - аас хас
console.log(itCompanies.slice(1));
//Сүүлийн мэдээллийн технологийн компанийг array - аас хас
console.log(itCompanies.slice(Number(itCompanies.length)));

//count word
let data = [
  "Засгийн",
  "газарт",
  "6.4",
  "сая",
  "тонн",
  "нүүрс",
  "алдагдсан",
  "гэх",
  "мэдээлэл",
  "ирээгүй",
  "байна.",
  "Бодит",
  "байдалд",
  "ийм",
  "их",
  "хэмжээний",
  "нүүрс",
  "алдагдсан",
  "гэх",
  "асуудал",
  "эргэлзээтэй",
  "байна.",
  "Хууль",
  "хяналтын",
  "байгууллага",
  "хяналт",
  "шалгалтын",
  "ажил",
  "явуулж",
  "байна",
];
let utga = "нүүрс";
let nuurs = 0;
for (let count = 0; count < data.length; count++) {
  if (utga === data[count]) {
    nuurs++;
  }
}
console.log("nuurs too", nuurs);
