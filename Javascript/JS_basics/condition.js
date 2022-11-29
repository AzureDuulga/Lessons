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