document.all[8].innerText="Peter Parker";

img=document.getElementById("mainImg")
img.src="./assets/creation_1.png"
console.dir(img)

className=document.getElementsByClassName("oldImg");
for(let i=0;i<className.length;i++){
    className[i].src="assets/spiderman_img.png"
}

tag=document.getElementsByTagName("p");
//tag[0].innerText="ayush"
console.dir(tag)

// query selector (for complex selection)
console.dir(document.querySelector("div a"));
console.dir(document.querySelectorAll("div a"));

// content property in object
console.dir(tag[0].innerText)
console.dir(tag[0].innerHTML)
console.dir(tag[0].textContent)
// tag[0].innerHTML="<b>ayush<b>"


// get attribute 

console.dir(img.getAttribute("id"))
//  img.setAttribute("id","new_id")


h1=document.querySelector("h1")
// h1.style.color="blue"
// h1.style.backgroundColor="yellow"

// classList property
console.dir(h1.classList)
h1.classList.add("green")
h1.classList.add("underline")
console.dir(h1.classList.contains("green"))
h1.classList.toggle("underline")


// navigation
box=document.querySelector(".box");
console.dir(box.parentElement)
console.dir(box.children)
console.dir(box.previousElementSibling)
console.dir(box.nextElementSibling)
console.dir(box.childElementCount)

// adding element

let body=document.querySelector("body");
let p=document.querySelector("p");
let btn=document.querySelector("button");
let newP=document.createElement("p");
let newB=document.createElement("button");
newP.innerText="Hi I am Ayush ";
newB.innerText="Click ME"
newP.append("this is new post");
// box.append(newP);
// box.appendChild(newP);
// box.prepend(newB);
p.insertAdjacentElement('afterend',newB);


//remove and remove child
// body.removeChild(newB)
newB.remove();
p.removeChild(btn);

// remove :-> it will direclty remove the element

//removeChild :-> it will remove the children of parent element (eg:-parent.removeChild(child));
