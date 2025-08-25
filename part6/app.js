// function in js
function rollaDice() {
  console.log(Math.floor(Math.random() * 6) + 1);
}
rollaDice();

// function with arugment and return keyword

function sum(a, b) {
  return a + b;
}
console.log(sum(3, 4));
console.log(sum); //it will print function defination

// function scopes

let global = 54; // global scope
function calSum(a, b) {
  let sum = a + b; //function scope
  console.log(sum);
  {  //block scope
    let age=18;

  }
//   console.log(age)
}
calSum(2, 3);


// lexical scope

function outerFunction(){
    let a=10;
    let b=20;
    function innerfunction(){
        console.log(a);
        console.log(b);
    }
    innerfunction();
}
outerFunction();


// function expression

const add=function(a,b){
    return a+b;
}
console.log(add(23,1));

// higher order function


function multipleGreet(func,n){
    for(let i=0;i<n;i++){
        func();
    }
}
let greet=function(){
    console.log("hello");
}

multipleGreet(greet,2)

function oddOrEven(request){
    if(request=="odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }
    if(request=="even"){
        return function(n){
            console.log((n%2==0));
        }
    }
}

let request=oddOrEven("odd")
request(3)

// methods

const calculator={
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    }
};
console.log("addition is ",calculator.add(2,3))

