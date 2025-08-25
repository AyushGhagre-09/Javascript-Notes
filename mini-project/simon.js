let userSeq = [];
let gameSeq = [];
let started = false;
let level = 0;
let h2=document.querySelector("h2");
let btns=["red","yellow","green","purple"]
let allbtns=document.querySelectorAll(".btn")
document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started");
    started = true;
    levelUp();
  }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}
function userFlash(btn){

    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250)
}
function levelUp() {
    userSeq=[]
  level++;

  h2.innerText = `Level ${level}`;
  let rndIdx=Math.floor(Math.random()*4);
  let rndColor=btns[rndIdx]
  let rndBtn=document.querySelector(`.${rndColor}`)
//   console.log(rndColor);
//   console.log(rndIdx);
//   console.log(rndBtn)
  gameSeq.push(rndColor)
  console.log(`game sequence ${gameSeq}`)
  gameFlash(rndBtn)
}

function checkSeq(idx)
{
   
    if(gameSeq[idx]==userSeq[idx])
    {
        if(userSeq.length==gameSeq.length)
        {
            setTimeout(levelUp,1000)
        }
    }
    else 
    {
        h2.innerHTML = `Game Over! Your score was :<b>${level}</b> <br> press any key to Start.`;
        document.querySelector("body").style.backgroundColor="red"
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"
        },150)
        reset()
    }
}
function btnPress()
{  // console.log(this)
    userFlash(this)
    userSeq.push(this.getAttribute("id"))
    console.log(`User Sequence ${userSeq}`)
    checkSeq(userSeq.length-1)
}
for(btn of allbtns)
{
    btn.addEventListener("click",btnPress);
}
function reset()
{
    started=false;
    gameSeq=[]
    userSeq=[]
    level=0
    
}