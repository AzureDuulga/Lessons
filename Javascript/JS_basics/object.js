// //Simple object
// let nohoi = {
//   үүлдэр: "Beagle",
//   нэр: "Bruno",
//   өнгө: "Brown",
//   нас: 1,
//   хайрТатсанШинжЧанар: "Cute",
// };
// console.log(nohoi);

// //Animals
// let amitan = prompt("amitan herhen dugardag ve?", "Cats");
// let animals = [
//   { type: "Cats", sound: "meow" },
//   { type: "Dogs", sound: "woof" },
//   { type: "Horses", sound: "neigh" },
//   { type: "Goats and sheep", sound: "baa" },
//   { type: "Pigs", sound: "oink" },
//   { type: "Cows", sound: "moo" },
//   { type: "Donkeys", sound: "hee-haw" },
//   { type: "Chickens", sound: "cluck" },
//   { type: "Roosters", sound: "cock-a-doodle-do" },
//   { type: "Birds", sound: "chirp" },
//   { type: "Owls", sound: "Hoot" },
//   { type: "Ducks and geese", sound: "quack and honk" },
//   { type: "Turkeys", sound: "gobble" },
//   { type: "Mosquitoes", sound: "buzz" },
//   { type: "Crickets", sound: "chirp" },
//   { type: "Frogs", sound: "ribbit" },
//   { type: "Lions", sound: "roar" },
// ];

// let urDun = function (amitan) {
//   for (let i = 0; i < animals.length; i++) {
//     if (amitan == animals[i].type) return animals[i].sound;
//   }
//   return "amitan bhgui";
// };
// console.log(urDun(amitan));

//Сурагчид
let students = [
  { name: "Dulguun", birthOfYear: 1999, hobby: "Basketball", single: false },
  { name: "Amar", birthOfYear: 2001, hobby: "Football", single: true },
  { name: "Khongor", birthOfYear: 2000, hobby: "Baseball", single: false },
  { name: "Enerel", birthOfYear: 2002, hobby: "Anime", single: true },
  { name: "Selenge", birthOfYear: 1998, hobby: "Kpop", single: false },
  { name: "Bilguun", birthOfYear: 2003, hobby: "Music", single: true },
];

let nas20deesh = function (name) {
  for (let i = 0; i < students.length; i++) {
    if (name == students[i].name || 2022 - students[i].birthOfYear > 20)
      return students[i].name, "20 nasnaas deesh";
  }
  return students[i].name, "20 nasnaas doosh";
};
console.log(nas20deesh("Bilguun");
