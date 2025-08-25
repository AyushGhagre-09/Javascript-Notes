// function one(){
//     return 1;
// }

// function two(){
//     return one()+one();
// }

// function three(){
//     let ans=one()+two();
//     console.log(ans);
// }

// three();

// h1=document.querySelector("h1");
// function changeColor(color,delay,nextChangeColor){
//     setTimeout(()=>{
//         h1.style.color=color;
//         if(nextChangeColor){
//             nextChangeColor();
//         }
//     },delay);

// }

// callback nesting->callback hell
// changeColor("red",1000,()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("pink",1000,()=>{
//         changeColor("purple",1000);
//         });
//     });
// });


let h1 = document.querySelector("h1");
function changeColor(color, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      h1.style.color = color;
     
      resolve(`Changed color to ${color}`); 
    }, delay);
  });
}

changeColor("green", 2000)
  .then((result) => {
    console.log(result);
    return changeColor("yellow", 2000);
  })
  .then((result) => {
    console.log(result);
    return changeColor("pink", 2000);
  })
  .then((result) => {
    console.log(result);
    return changeColor("red", 2000);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });