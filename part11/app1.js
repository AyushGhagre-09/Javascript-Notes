// function saveToDb(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }
// // call back hell
// saveToDb(
//   "apnaCollege",
//   () => {
//     console.log("success :  data 1 is saved");
//     saveToDb(
//       "hello",
//       () => {
//         console.log("success :data 2 is saved");
//         saveToDb(
//           "ayush",
//           () => {
//             console.log("success :data3 is saved");
//           },
//           () => {
//             console.log("failure data3 is not saved");
//           }
//         );
//       },
//       () => {
//         console.log("failure :data 2 is not saved ");
//       }
//     );
//   },
//   () => {
//     console.log("failure : data 1 is not saved");
//   }
// );


//promises
function saveToDb(data){
  return   new Promise((resolve,reject)=>{
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
  if (internetSpeed > 4) {
    resolve("promise success :data saved");
  } else {
    reject("promise failure :data not saved");
  }
  });
}
//  then  and catch in promises
// saveToDb("apna college")
// .then(()=>{
//     console.log("promise resolved");
    
// })
// .catch(()=>{
//     console.log("promise rejected")
    
// })


// promises chaning(alernative for callback hell)

saveToDb("apnacollege")
.then((result)=>{
    console.log("success :data1  saved");
    console.log(result);
    return saveToDb("hello world");
})
.then((result)=>{
    console.log("success : data2 saved");
    console.log(result);
    return saveToDb("ayush");
})
.then((result)=>{
    
    console.log("success :data3 saved");
    console.log(result);

})
.catch((error)=>{
    console.log(error);
    console.log("failure  data is not saved");
})