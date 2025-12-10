let name = "Polina";
console.log("Hei " + name);

let num1 = 4;
let num2 = 3;
console.log(num1 + " + " + num2 + " = " + (num1 + num2));
console.log(num1 + " - " + num2 + " = " + (num1 - num2));
console.log(num1 + " * " + num2 + " = " + (num1 * num2));
console.log(num1 + " / " + num2 + " = " + (num1 / num2).toFixed(4));

let age = 19;
if (age < 18) {
  console.log("Du får ikke kjøpe øl");
} else {
  console.log("Du får kjøpe øl");
}

let personAge = 45;
if (personAge < 18) {
  console.log("barnebillett");
} else if (personAge >= 18 && personAge < 67) {
  console.log("voksenbillett");
} else {
  console.log("honnørbillett");
}