for (let i = 0; i <= 5; i++) {
  console.log(i);
}

// odd number

for (let i = 1; i <= 15; i++) {
  if (i % 2 != 0) {
    console.log("odd number ", i);
  }
}

// even number

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log("even number ", i);
  }
}

// table

for (let i = 1; i <= 10; i++) {
  console.log(`5 * ${i} = ${5 * i}`);
}

// nested loop
for (let i = 1; i <= 3; i++) {
  console.log("outer loop ", i);
  for (let j = 1; j <= 3; j++) {
    console.log(j);
  }
}

// while and break

let i = 0;
while (i <= 5) {
  if (i == 3) break;
  console.log(i);
  i++;
}

// loops with array

let colors = ["violet", "green", "orange", "blue", "yellow", "red"];

for(let i=0;i<colors.length;i++){
    console.log(colors[i])
}

// loop with nested array
let nums=[[2,4],[6,7,8],[9,8,0]]

for(let i=0;i<nums.length;i++ ){
  console.log("Array at index  : ",i)
  for (let j=0;j<nums[i].length;j++){
    console.log(nums[i][j])
  }
}

// for of loop
for (let color of colors){
  console.log(color)
}

// nested for of loop
 for (let subarray of nums){
  console.log(subarray)
  for(let num of subarray){
    console.log(num)
  }
 }


 console.log("Using const (no reassignment):");
 for (const color of colors) {
   console.log(color); // No reassignment, safe to use const
 }
 
 console.log("\nUsing let (with reassignment):");
 for (let color of colors) {
   color = color.toUpperCase(); // Reassigning the loop variable
   console.log(color); // Modified copy of each item
 }