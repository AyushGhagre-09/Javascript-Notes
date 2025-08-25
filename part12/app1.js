let jsonRes='{"fact":"Blue-eyed, white cats are often prone to deafness.","length":50}'
jsData=JSON.parse(jsonRes);
console.log(jsData)
console.log(JSON.stringify(jsData))

let url="https://catfact.ninja/fact";


fetch(url)
.then((res)=>{
    return res.json();
})
.then((data)=>{
    console.log(data.fact);
})
.catch((err)=>{
    console.log(err);
})

async function getFacts(){
    try{
    let res=await fetch(url);
    let data=await res.json();
    console.log(data.fact);
    }catch(err){
        console.log("ERROR->",err)
    }
}

getFacts();