// javascript Object
// object  are refernece type
const student = {
  name: "shraddha",
  age: 23,
  marks: 94.4,
  city: "Delhi",
};
// access the value
console.log(student);
console.log(student["name"]);
console.log(student.name);
console.log(typeof student);

let prop = "age";
console.log(student[prop]);
// this will not work with .operator
console.log(student.prop); //undefined

let obj = {
  1: "a",
  2: "b",
  null: "c",
  true: "d",
  undefined: "e",
};

console.log(obj[1], obj[2], obj[null], obj[true], obj[undefined]);
//  console.log(obj.1)//error but for all the other key which are present in object  will work with .operator

// add update (we can do it using dot(.) operator also)
student["city"] = "Mumbai";
student["gender"] = "Female";
student.marks = "A";
console.log(student);

// delete
delete student.marks;
console.log(student);

// nested object

const classInfo = {
  aman: {
    grade: "A+",
    city: "Delhi",
  },
  shradha: {
    grade: "A",
    city: "Pune",
  },
  rajat: {
    grade: "B+",
    city: "Mumbai",
  },
};

console.log(classInfo.aman);
console.log(classInfo.aman.grade);
classInfo.aman["country"]="india";
console.log("classInfo",classInfo)

// array of objects

const classInfo1 = [
  {
    name: "aman",
    grade: "A+",
    city: "Delhi",
  },
  {
    name: "shraddha",
    grade: "A",
    city: "Pune",
  },
  {
    name: "rajat",
    grade: "B+",
    city: "Mumbai",
  },
];
console.log(classInfo1[2])
console.log(classInfo1[2].name)
classInfo1[2]["country"]="india"
console.log(classInfo1)

// math Object

console.log(Math.PI)
console.log(Math.E)
console.log(Math.abs(-12))
console.log(Math.pow(2,3))
console.log(Math.floor(4.7));  // Output: 4
console.log(Math.floor(4.1));  // Output: 4
console.log(Math.floor(-4.7)); // Output: -5
console.log(Math.floor(-4.1)); // Output: -5
console.log(Math.floor(5));// Output: 5
console.log(Math.floor(5.9999999999));//// Output: 5
console.log("-----------------------------------")
console.log(Math.ceil(4.7));  // Output: 5
console.log(Math.ceil(4.1));  // Output: 5
console.log(Math.ceil(-4.7)); // Output: -4
console.log(Math.ceil(-4.1)); // Output: -4
console.log(Math.ceil(5));// Output: 5
console.log(Math.ceil(5.9999999999));//// Output: 6
console.log("------------------------------------")
// random number from 1 to 10
console.log(Math.floor(Math.random()*10)+1)//from 1 to 10
console.log(Math.floor(Math.random()*100)+1)//from 1 to 100
console.log(Math.floor(Math.random()*5)+1)//from 1 to 5