var ognoo = 119;

// if (ognoo >= 18) {
//     console.log("Ta nasand hursen baina", ognoo);
// } else if (ognoo <= 18) console.log("Ta nasand hureegui baina");

let huis = "ergetei",
  nas1 = 29;

if (huis == "ergetei" && nas1 >= 18) {
  console.log("Ta nasand hursen eregtei baina");
} else if (huis == "ergetei" && nas1 <= 18) {
  console.log("Ta nasand hureegui eregtei baina");
} else console.log("Ta hun bish baina");

//Хувьсагч
//Хувьсагч-1

let a = 85,
  b = 75,
  c = 96,
  d = 69;
let sum = 0;
if (a > 80) {
  sum = sum * a;
}
if (b > 80) {
  sum = sum + b;
}
if (c > 80) {
  sum = sum + c;
}

if (d > 80) {
  sum = sum + d;
}

console.log("sum=", sum);

//Хувьсагч-2

let e = 3,
  f = 7,
  g = 2,
  h = 4;
let urjiver = 1;

if (e < 5) {
  urjiver = urjiver * e;
}
if (f < 5) {
  urjiver = urjiver * f;
}
if (g < 5) {
  urjiver = urjiver * g;
}

if (h < 5) {
  urjiver = urjiver * h;
}

console.log("urjiver=", urjiver);

//Тэмцээн
//Тэмцээн-1

let ATeam1 = 96,
  ATeam2 = 108,
  ATeam3 = 89,
  BTeam1 = 88,
  BTeam2 = 91,
  BTeam3 = 110;
let ATeamDundaj = (ATeam1 + ATeam2 + ATeam3) / 3;
console.log("ATeamDundaj=", ATeamDundaj);

let BTeamDundaj = (BTeam1 + BTeam2 + BTeam3) / 3;
console.log("BTeamDundaj=", BTeamDundaj);
//Тэмцээн-2

if (ATeamDundaj < 100 && BTeamDundaj < 100) {
  console.log("Ялагч байхгүй");
} else if (ATeamDundaj > BTeamDundaj) {
  console.log("A Team түрүүлсэн");
} else if (ATeamDundaj < BTeamDundaj) {
  console.log("B Team түрүүлсэн");
} else {
  console.log("багууд тэнцсэн");
}

// Өгөгдсөн тоонуудын хамгийн их болон хамгийн багыг олно уу
console.log("Өгөгдсөн тоонуудын хамгийн их болон хамгийн багыг олно уу");
(a = 85), (b = 95), (c = 50);

// хамгийн их утгатай хувьсагч

if (a > b && a > c) {
  console.log("Хамгийн их утга=", a);
} else if (b > a && b > c) {
  console.log("Хамгийн их утга=", b);
} else {
  console.log("Хамгийн их утга=", c);
}

// хамгийн бага утгатай хувьсагч

if (a < b && a < c) {
  console.log("Хамгийн бага утга=", a);
} else if (b < a && b < c) {
  console.log("Хамгийн бага утга=", b);
} else {
  console.log("Хамгийн бага утга=", c);
}

//Сурагчдын шалгалтын дүнг гаргаарай

console.log("Сурагчдын шалгалтын дүнг гаргаарай");

let bat = 67;
let ontsDumd = 59;

if (bat <= 100 && bat > 90) {
  console.log("Бат-", bat, "-Маш сайн");
} else if (bat <= 90 && bat > 80) {
  console.log("Бат-", bat, "- Сайн");
} else if (bat <= 80 && bat > 70) {
  console.log("Бат-", bat, "- Дунд");
} else if (bat <= 70 && bat > 60) {
  console.log("Бат-", bat, "- Хангалттай");
} else {
  console.log("Бат-", bat, "- Маш муу");
}

if (ontsDumd <= 100 && ontsDumd > 90) {
  console.log("Онц Дүмд-", ontsDumd, "-Маш сайн");
} else if (ontsDumd <= 90 && ontsDumd > 80) {
  console.log("Онц Дүмд-", ontsDumd, "- Сайн");
} else if (ontsDumd <= 80 && ontsDumd > 70) {
  console.log("Онц Дүмд-", ontsDumd, "- Дунд");
} else if (ontsDumd <= 70 && ontsDumd > 60) {
  console.log("Онц Дүмд-", ontsDumd, "- Хангалттай");
} else {
  console.log("Онц Дүмд-", ontsDumd, "- Маш муу");
}

//Өндөр жилийг олно уу
console.log("Өндөр жилийг олно уу");
let year = 4000;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("Өндөр жил мөн:" + year);
} else {
  console.log("Өндөр жил биш:" + year);
}

//Tip
console.log("Tip");

let tohioldol1 = 3000;
let tohioldol2 = 27500;
let tohioldol3 = 100000;

let tohioldol1TolohDun =
  tohioldol1 > 5000 && tohioldol1 < 30000
    ? tohioldol1 * 1.15
    : +tohioldol1 * 1.2;
console.log(`Tohiold1 toloh dun: ${tohioldol1TolohDun} ₮`);

let tohioldol2TolohDun =
  tohioldol2 > 5000 && tohioldol2 < 30000
    ? tohioldol2 * 1.15
    : +tohioldol2 * 1.2;
console.log(`Tohiold2 toloh dun: ${tohioldol2TolohDun} ₮`);

let tohioldol3TolohDun =
  tohioldol3 > 5000 && tohioldol1 < 30000
    ? tohioldol1 * 1.15
    : +tohioldol1 * 1.2;
console.log(`Tohiold3 toloh dun: ${tohioldol3TolohDun} ₮`);

//4 тооны бага

let inp1 = 120,
  inp2 = 33,
  inp3 = 10,
  inp4 = 12;

if (inp1 < inp2 && inp1 < inp3 && inp1 < inp4) {
  console.log("Хамгийн бага утга:", inp1);
} else if (inp2 < inp1 && inp2 < inp3 && inp2 < inp4) {
  console.log("Хамгийн бага утга:", inp2);
} else if (inp3 < inp1 && inp3 < inp2 && inp3 < inp4) {
  console.log("Хамгийн бага утга:", inp3);
} else {
  console.log("Хамгийн бага утга:", inp4);
}

//Assignment -1

console.log("Assignment -1");

//1
let i = 4 > 3; //true
let ii = 4 >= 3; //true
let iii = 4 < 3; //false
let iv = 4 <= 3; //false
let v = 4 == 4; //true
let vi = 4 === 4; //true
let vii = 4 != 4; //false
let iix = 4 !== 4; //false
let ix = 4 != "4"; //false
let x = 4 == "4"; //true
let xi = 4 === "4"; //false

console.log(i);
console.log(ii);
console.log(iii);
console.log(iv);
console.log(v);
console.log(vi);
console.log(vii);
console.log(iix);
console.log(ix);
console.log(x);
console.log(xi);

//2

let one = 4 > 3 && 10 < 12; //true
let two = 4 > 3 && 10 > 12; //false
let three = 4 > 3 || 10 < 12; //true
let four = 4 > 3 || 10 > 12; //true
let five = !(4 > 3); // false
let six = !(4 < 3); // true
let eight = !(4 > 3 && 10 < 12); // false
let nine = !(4 > 3 && 10 > 12); //true
let ten = !(4 === "4"); // true
console.log("object");
console.log(one);
console.log(two);
console.log(three);
console.log(four);
console.log(five);
console.log(six);
console.log(eight);
console.log(nine);
console.log(ten);

//3
let myAge = 24;

let yourAge = prompt("Насаа оруулна уу: ");

if (myAge < yourAge) {
  console.log("Та хөгшин");
} else {
  console.log("Би хөгшин");
}

//Easy
console.log("Easy");
//2
let sar = prompt("Та дурын сараа оруулна уу?", 2);
if ((sar = 1)) {
  console.log("Tuhain sariin too: 31");
} else if ((sar = 2)) {
  console.log("Tuhain sariin too: 28 or 29");
} else if ((sar = 3)) {
  console.log("Tuhain sariin too: 28 or 29");
} else if ((sar = 4)) {
  console.log("Tuhain sariin too: 28 or 29");
} else if ((sar = 5)) {
  console.log("Tuhain sariin too: 28 or 29");
} else if ((sar = 6)) {
  console.log("Tuhain sariin too: 28 or 29");
} else if ((sar = 7)) {
  console.log("Tuhain sariin too: 28 or 29");
} else if ((sar = 8)) {
  console.log("Tuhain sariin too: 28 or 29");
} else if ((sar = 9)) {
  console.log("Tuhain sariin too: 28 or 29");
} else if ((sar = 10)) {
  console.log("Tuhain sariin too: 28 or 29");
} else if ((sar = 11)) {
  console.log("Tuhain sariin too: 28 or 29");
} else if ((sar = 12)) {
  console.log("Tuhain sariin too: 28 or 29");
} else sar > 12;
console.log("Buruu utga");
26;

//3
let L = prompt("Ta duriin too oruulna uu");
if (L / 3 == 0) {
  console.log("3n urjiver :>> ", L);
} else if (L / 7 == 0) {
  console.log("7n urjiver :>> ", L);
}
