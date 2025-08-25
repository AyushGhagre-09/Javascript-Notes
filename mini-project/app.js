// event bubbling

let div=document.querySelector("div");
let ul=document.querySelector("ul");
let lis=document.querySelectorAll("li");

div.addEventListener("click",()=>{

    console.log("div was clicked");
})

ul.addEventListener("click",(event)=>{
    event.stopPropagation();
    console.log("ul was clicked");
})

for(li of lis){
    li.addEventListener("click",(event)=>{
        event.stopPropagation();
        console.log("li is clicked");
    })
}