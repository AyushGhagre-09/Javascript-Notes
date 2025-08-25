// to log the  output
console.log("hello  from javascript");
console.log(2 + 2);
console.log("Apna", "College", "delta");
let a = 10;
let b = 20;
console.log("sum is : ", a + b);
// template literals
console.log(`your pay is ${a + b} rupees`);
// comparsion operator
console.log(5 == "5");
console.log(5 === "5");
console.log(0 == "");
console.log(0 === "");
console.log(0 == false);
console.log(0 === false);
console.log(null == undefined);
console.log(null === undefined);
// comparsion of non number value
console.log("a" > "A");
console.log("a" > "b");

// if-else

let age = 28;
if (age > 18) {
  console.log("you can vote");
} else {
  console.log("you can't vote");
}

// else if
let marks = 85;
if (marks >= 80) {
  console.log("A");
} else if (marks >= 60) {
  console.log("B");
} else if (marks >= 45) {
  console.log("C");
} else {
  console.log("fail");
}

// nested if else
if (marks >= 33) {
  console.log("Pass");
  if (marks >= 80) {
    console.log("Grade : O");
  } else {
    console.log("Grade : A");
  }
} else {
  console.log("Better Luck Next Time");
}

// truthy falsy value

if (undefined) {
  console.log("it has true value");
} else {
  console.log("it has false value");
}
// switch case
let color = "red";
switch (color) {
  case "red":
    console.log("stop");
    break;
  case "yellow":
    console.log("slow down");
    break;
  case "green":
    console.log("go");
    break;
  default:
    console.log("broken Light");
}
// alert
// alert("something went wrong!");
// error
console.error("this is an error msg");
// warn
console.warn("this is warning msg");
// prompt
let rollNo=prompt("Enter your roll no : ");
console.log(`roll no is :${rollNo}`)