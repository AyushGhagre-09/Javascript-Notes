// this in object
const student={
    name:"shradha",
    age:23,
    eng:95,
    math:93,
    phy:97,
    avg:function(){
        let avg=(this.eng+this.math+this.phy)/3;
        console.log(avg);
        console.log(this);
    }
}
student.avg()

// for normal function this will always refer to window object 
function getAvg(){
    console.log(this)
}
getAvg()

// try and catch
let a=10;
// let b=20;
try{
    console.log(a/b);
}catch(e){
  console.log("caught an error",e)
}
console.log("End")

// arrow function

const sum=(a,b)=>{
    console.log(a+b);
}
sum(10,3);

const cube=x=>{return x*x*x};
console.log(cube(3))

const hello=()=>console.log("hello world");
hello();

// implicit return in arrow functions(both syntax are correct)
const mul=(a,b)=>(a*b)
const div=(a,b)=> a/b
console.log(mul(10,4));
console.log(div(10,2));

// Set timeout

console.log("hi there");
setTimeout(()=>{
console.log("Apna College");
},4000);
console.log("welcome to");


// set interval

console.log("hi");
let id=setInterval(()=>{
console.log("Apna College");
},4000);
console.log("welcome to");
console.log(id);


