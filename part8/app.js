// for each loop in array

let arr = [1, 2, 3, 4, 5];
arr.forEach(function (ele) {
  console.log(ele);
});
arr.forEach((ele) => {
  console.log(ele);
});

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

classInfo1.forEach((stu) => {
  console.log(stu.grade);
});
// map function
let num = [1, 2, 3, 4];
let newNum = num.map((ele) => ele * 2);
console.log(newNum);

// filter function

let even = num.filter((ele) => ele % 2 == 0);
console.log(even);

// every function
console.log(num.every((el) => el % 2 == 0));

//some function

console.log(num.some((el) => el % 2 == 0));

//reduce function

console.log(num.reduce((res, el) => res + el));

// maximum element in array
console.log(
  num.reduce((max, el) => {
    if (max < el) {
      return el;
    } else {
      return max;
    }
  })
);


// default paramter
function sum(a,b=3){
    return a+b;
}
console.log(sum(2));

// spread
let arr1=[3,2,56,32,45,98,66,1,0,-76];
console.log(Math.min(...arr1));
console.log(...arr1);
console.log(..."apnacollege");

// spread in array 
let arr2=[1,2,3,4,5];
let arr3=[6,7,8,9,10];
let arr4=[...arr2,...arr3];
console.log(arr4);


// spread in object 

const data={
    email:"ghagareayush2001@gmail.com",
    password:"abcd"
};

const dataCopy={id:12,...data};
console.log(dataCopy);

let arr5=[1,2,3,4];
let obj1={...arr5};
console.log(obj1)

let str="hello";
let obj2={...str};
console.log(obj2)

// rest 
// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array,
// if we want to use extra paramter then that should be come before  rest ,after rest if we add it will create problem
function sum(msg ,...args){
  for(let i=0;i<args.length;i++)
    console.log("you gave us : ",args[i])
  console.log(msg)
}

sum("hello ",1,2,3,4,5,6);


// It is not a true array but has a structure similar to one. You can access its elements using indices (arguments[0], arguments[1], etc.).
// However, it does not inherit from Array.prototype, so array methods like .map() or .forEach() are not directly available.
function min(){
  console.log(arguments);
  console.log(arguments.length);

}

min(1,2,3,4);


// destructuring array

let names=["tony","bruce","steve","peter"];
let[winner,runnerup,...others]=names;
console.log(winner,runnerup,others)

// destructuring object

const student={
  name:"karan",
  age:23,
  class:9,
  subjects:["hindi","english","math","science"],
  username:"karan@123",
  password:"abcd",
  // city:"pune"
}

// let {username,password}=student
// console.log(username)
// console.log(password)

let {username:user,password:pass,city="Mumbai"}=student
console.log(user)
console.log(pass)
console.log(city)
// console.log(username);
// in line no. 151 if we print username it will give error because username is key that we use to search that key in object and that key  get store in user
// for city if we provide the value in struct then  preference will be given to struct ie(pune not mumbai)
