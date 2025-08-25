// let hello=async ()=>{
//     // throw "error";
//     return "hello world";
// }

// hello()
// .then((result)=>{
// console.log(result);
// })
// .catch((error)=>{
// console.log(error);
// })

// example1 
function getNum(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        let number=Math.floor(Math.random()*10)+1;
        if (number>3){
        console.log(number);
        resolve("resolved");
        }else{
        reject("promise rejected");
        }
        },1000)
    });
   }

async function demo(){
    try{
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    }catch(err){
        console.log(err);
    }
    console.log("hello")
}
//demo();

//example 2
let h1 = document.querySelector("h1");
function changeColor(color, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      h1.style.color = color;
     
      resolve(`Changed color to ${color}`); 
    }, delay);
  });
}


async function rainbowEffect(){
  try{
   console.log(await changeColor("red",2000));
   console.log(await changeColor("blue",2000));
   console.log(await changeColor("pink",1000));
   console.log(await changeColor("yellow",1000));
  }catch(err){
    console.log(err);
  }

}

//rainbowEffect();