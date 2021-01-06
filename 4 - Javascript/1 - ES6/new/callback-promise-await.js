// function one()
// {
//     console.log("one")
// }
// function two()
// {
//     setTimeout(() => {
//         console.log("two");
//     },3000)

// }
// function three()
// {
//     console.log("Three")
// }

// one();
// two();
// three();

// In order to force these functions to execute in order we can use the following methods

// 1 - Callback functions

// function one(callback)
// {
//     setTimeout(() => {
//         console.log("One");
//         callback();
//     },5000)
// }
// function two(callback)
// {
//     setTimeout(() => {
//         console.log("two");
//         callback();
//     },2000)
// }
// function three(callback)
// {
//     setTimeout(() => {
//         console.log("three");
//         callback();
//     },1000)
// }

// one(() => {
//     two(() => {
//         three(() => {

//         });
//     });
// });

// 2 - Promises

// function one() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("one");
//       resolve("done");
//     }, 5000);
//   });
// }
// function two() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("two");
//       resolve("done");
//     }, 3000);
//   });
// }
// function three() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("three");
//       resolve("done");
//     }, 2000);
//   });
// }

// one().then(() => {
//     two().then(() => {
//         three().then(() => {

//         })
//     })
// })

// function one() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("one");
//       resolve("done");
//     }, 5000);
//   });
// }
// function two() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("two");
//       resolve("done");
//     }, 3000);
//   });
// }
// function three() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("three");
//       resolve("done");
//     }, 2000);
//   });
// }

// async function run() {
// await one();
// await two();
// await three();
// }

// run();