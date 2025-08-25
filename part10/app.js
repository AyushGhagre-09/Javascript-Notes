let btn=document.querySelector("button");

//on click
// btn.onclick=function(){
//     alert("button was clicked");
// }
 
//onmouseenter
function sayHello(){
    console.log("button was hover")
}

function sayName(){
    console.log("Hi I am ayush")
}

// using "dom event" we can perform only one action at time 
// btn.onmouseenter=sayHello;
// btn.onmouseenter=sayName;


// event Listner we can perform multiple action 

btn.addEventListener("click",sayHello);
btn.addEventListener("click",sayName);
btn.addEventListener("dblclick",()=>{
    console.log("you doubled clicked me");
})


// event listner  for elements
let p=document.querySelector("p");
p.addEventListener("click",()=>{
    console.log("para was clicked");
});

// this in event listner

btn.addEventListener("click",function(){
    console.dir(this);
    console.dir(this.innerText);
    this.style.backgroundColor="pink";

})

h1=document.querySelector("h1");
h2=document.querySelector("h2");
h3=document.querySelector("h3");

function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor="yellow"
}

h1.addEventListener("click",changeColor);
h2.addEventListener("click",changeColor);
h3.addEventListener("click",changeColor);


