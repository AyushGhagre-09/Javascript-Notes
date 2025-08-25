let url ="https://catfact.ninja/fact";
let btn=document.querySelector("button");
let p=document.querySelector("#fact");

async function getFacts(){
try{
let res =await axios.get(url);
return res.data.fact;
}
catch(err){
    console.log(err)
    return "error"
}
}

btn.addEventListener("click",async ()=>{
    let fact= await getFacts();
    p.innerText= fact
})

