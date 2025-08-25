// event parameter
// let btn=document.querySelector("button");
// btn.addEventListener("dblclick",(event)=>{
//     console.log(event)
// })

// keyboard event

//let inp=document.querySelector("input");
// inp.addEventListener("keydown",(event)=>{
//     console.log(event)
//     console.log(event.code)
//     console.log(event.key)
//     console.log("key was pressed")
// })


// similar for key up

// inp.addEventListener("keyup",(event)=>{
//     console.dir(event)
//     console.log(event.code)
//     console.log(event.key)
//     console.log("key was released")
// })


// Form event

//let form=document.querySelector("form");

// form.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     alert("form submitted");
//     let user=document.querySelector("#user");
//     let pass=document.querySelector("#pass");
//     console.log(user.value);
//     console.log(pass.value);
// });
// event.preventDefault();-> it will not  redirect to action

// form.addEventListener("submit",function(event){
//         event.preventDefault();
//         alert("form submitted");
//         console.dir(form);
//         console.log(this.elements[1].value);
//         console.log(this.elements[2].value);
//     });

let inp=document.querySelector("#text");
let p=document.querySelector("p");

// inp.addEventListener("change",()=>{
//     console.log(inp.value);
//     p.innerText=inp.value
// })

inp.addEventListener("input",()=>{
    console.log(inp.value);
    p.innerText=inp.value
})