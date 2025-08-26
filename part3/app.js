// string are immutable in javascript
let msg = " hello ";
console.log(msg.trim());
console.log(msg);

// toUpperCase() and toLowerCase() 
let name = "Ayush Ghagre";
console.log(name.toUpperCase());
console.log(name.toLowerCase());

// indexOf
let str = "Ilovecoding";
console.log(str.indexOf("love"));
console.log(str.indexOf("z"));
console.log(str.indexOf("o"));
console.log(str.lastIndexOf("o"));

// method chaining
console.log(msg.trim().toUpperCase());

// slice
console.log(str.slice(1));
console.log(str.slice(1, 5));
console.log(str.slice(-5, -2));
console.log(str.slice(-2));

// replace
console.log(str.replace("o", "x"));
console.log(str.replaceAll("o", "x"));
console.log(str.replace("love", "do"));

// repeat
console.log(str.repeat(3));

// array
let arr = [12, 32, 7, 43, 87];
console.log(arr, arr[0]);
console.log(arr[5]);
console.log(arr.length);
console.log(typeof arr);

// mixed array
let info = ["ayush", 12, 78.67];

// empty array
let newArray = [];

// array are mutable
let fruits = ["manago", "apple", "litchi"];
fruits[0] = "papaya";
console.log(fruits);
console.log(fruits[0][0]);
console.log(fruits[0].length);

// array method
let cars = ["audi", "bmw", "xuv"];
let count = cars.push("toyota"); //it return the count
console.log(cars, count);
let deleteItem = cars.pop(); //it delete the last item
console.log(cars, deleteItem);
count = cars.unshift("toyota");
console.log(cars, count);
deleteItem = cars.shift();
console.log(cars, deleteItem);

// index of and include
let colors = ["red", "yellow", "blue"];
console.log(colors.indexOf("red"));
console.log(colors.indexOf("pink"));
console.log(colors.includes("red"));
console.log(colors.includes("pink"));

// concat and slice(it will create  new array)
let primary = ["red", "yellow", "blue"];
let secondary = ["orange", "green", "violet"];
let allColors = primary.concat(secondary);
console.log(allColors);
console.log(allColors.reverse()); //it will make the changes to original array
console.log(allColors.slice(1)); //it will create new array
console.log(allColors.slice(2, 4));
console.log(allColors.slice(-4, -2));


// splice(it will make the changes the original arrray)
let color = ["violet", "green", "orange", "blue", "yellow", "red"];
color.splice(4)
console.log(color)
color.splice(0,1)
console.log(color)
color.splice(0,1,"black","grey")
console.log(color)

// sort(it will make the changes to original array)

let names=["yash","ayush","rohit","pankaj"]
names.sort()
console.log(names)

// for number it  will conveted it string and based on unicode value it will sort
let marks=[98,89,67,42,100]
marks.sort()
console.log(marks)

// array is reference of type

let arr1=['a','b','c'];
let arrCopy=arr1;
console.log(arr1===arrCopy)
console.log(arrCopy)
arrCopy.push('d')
console.log(arr1)



// constant array

const arr2=['a','b','c','d','e']
let arr4=[1,2,3,4]
arr2.push('g')
// arr2=arr4 (error) it will point to only one array
console.log(arr2)

//nested array
let nums=[[2,4],[6,7,8],[9,8,0]]
console.log(nums)
console.log(nums[0][0])
console.log(nums[1].length)
