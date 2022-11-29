var ognoo = 119

// if (ognoo >= 18) {
//     console.log("Ta nasand hursen baina", ognoo);    
// } else if (ognoo <= 18) console.log("Ta nasand hureegui baina");

let huis = "ergetei" , nas1 = 29;

if (huis == "ergetei" && nas1 >= 18){
    console.log ("Ta nasand hursen eregtei baina")
    
} else if (huis == "ergetei" && nas1 <= 18){
    console.log ("Ta nasand hureegui eregtei baina")
} else console.log ("Ta hun bish baina");

//Хувьсагч
//Хувьсагч-1

let a=85, b=75, c=96, d=69
let sum=0;
if (a > 80){
    sum = sum*a;
    
}if (b > 80){
    sum = sum+b;
}
if (c > 80){
    sum = sum+c;
}

if (d > 80){
    sum = sum+d;
}

console.log ("sum=", sum);

//Хувьсагч-2

let e=3, f=7, g=2, h=4;
let urjiver=1;

if (e < 5){
    urjiver = urjiver*e;
}
if (f < 5){
    urjiver = urjiver*f;
}
if (g < 5){
    urjiver = urjiver*g;
}

if (h < 5){
    urjiver = urjiver*h;
}

console.log ("urjiver=", urjiver);

//Тэмцээн
//Тэмцээн-1

let ATeam1 = 96,  ATeam2 = 108,  ATeam3 = 89, BTeam1 = 88,  BTeam2=91,  BTeam3=110; 
let ATeamDundaj = (ATeam1+ATeam2+ATeam3)/3;
console.log("ATeamDundaj=",ATeamDundaj)

let BTeamDundaj = (BTeam1+BTeam2+BTeam3)/3;
console.log("BTeamDundaj=",BTeamDundaj)
//Тэмцээн-2

if (ATeamDundaj<100 && BTeamDundaj<100){
    console.log("Ялагч байхгүй")
}
else if (ATeamDundaj>BTeamDundaj){
    console.log("A Team түрүүлсэн")
}
else if (ATeamDundaj<BTeamDundaj){
    console.log("B Team түрүүлсэн")
}
else{
    console.log("багууд тэнцсэн")
}

// Өгөгдсөн тоонуудын хамгийн их болон хамгийн багыг олно уу
console.log('Өгөгдсөн тоонуудын хамгийн их болон хамгийн багыг олно уу');
a=85, b=95, c=50

// хамгийн их утгатай хувьсагч

if ( a > b && a > c){
    console.log( "Хамгийн их утга=" , a);
}
else if ( b > a && b > c){
    console.log( "Хамгийн их утга=" , b);
}
else {
    console.log( "Хамгийн их утга=" , c);
}

// хамгийн бага утгатай хувьсагч

if ( a < b && a < c){
    console.log( "Хамгийн бага утга=" , a);
}
else if ( b < a && b < c){
    console.log( "Хамгийн бага утга=" , b);
}
else {
    console.log( "Хамгийн бага утга=" , c);
}

//Сурагчдын шалгалтын дүнг гаргаарай

console.log('Сурагчдын шалгалтын дүнг гаргаарай');

let bat = 67;
let ontsDumd = 59;

if ( bat <= 100 && bat > 90){
    console.log( "Бат-" , bat , '-Маш сайн');
}
else if ( bat <= 90 && bat > 80){
    console.log( "Бат-" , bat , '- Сайн');
}
else if ( bat <= 80 && bat > 70){
    console.log( "Бат-" , bat , '- Дунд');
}
else if ( bat <= 70 && bat > 60){
    console.log( "Бат-" , bat , '- Хангалттай');
}
else {
    console.log( "Бат-" , bat , '- Маш муу');
}

if ( ontsDumd <= 100 && ontsDumd > 90){
    console.log( "Онц Дүмд-" , ontsDumd , '-Маш сайн');
}
else if ( ontsDumd <= 90 && ontsDumd > 80){
    console.log( "Онц Дүмд-" , ontsDumd , '- Сайн');
}
else if ( ontsDumd <= 80 && ontsDumd > 70){
    console.log( "Онц Дүмд-" , ontsDumd , '- Дунд');
}
else if ( ontsDumd <= 70 && ontsDumd > 60){
    console.log( "Онц Дүмд-" , ontsDumd , '- Хангалттай');
}
else {
    console.log( "Онц Дүмд-" , ontsDumd , '- Маш муу');
}

//Өндөр жилийг олно уу

let today = new Date().toLocaleDateString()

console.log('Today: ',today)

//Tip
console.log('Tip')

let tohioldol1 = 3000;
let tohioldol2 = 27500;
let tohioldol3 = 100000;

// let tohioldol1TolohDun= 
//   (tohioldol1 > 5000 && tohioldol1 < 30000)  ?  tohioldol1 * 1.15 + "₮" : "Tohiold1 toloh dun:", tohioldol1 * 1.2 + "₮" ;