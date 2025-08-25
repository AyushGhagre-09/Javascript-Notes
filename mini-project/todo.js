let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click",()=>{
 // create new element
   let newli= document.createElement("li")
   let newbtn=document.createElement("button")
   newbtn.innerText="delete"
   newbtn.classList.add("delete");
   newli.innerText=inp.value
    ul.append(newli)
    newli.appendChild(newbtn)
    inp.value=""
});


// event delegation
ul.addEventListener("click",function(event){
    console.log(event.target)
    console.log(event.target.nodeName)
        if (event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
    }
})

// let detBtns=document.querySelectorAll(".delete");

// for (delBtn of detBtns){
// delBtn.addEventListener("click",function(){
//     let par=this.parentElement;
//     par.remove();
// })
// }