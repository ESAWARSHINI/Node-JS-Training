// var i = 4;
// function call(i) {
//   var Test = new Promise((resolve, reject) => {
//     if (i > 1) setTimeout(() => resolve(--i), 1000);
//     else setTimeout(() => reject("Happy New year"), 1000);
//   });
//   return Test;
// }

// call(i)
//   .then((msg) => {
//     console.log(msg);
//     return call(msg);
//   })
//   .then((msg) => {
//     console.log(msg);
//     return call(msg);
//   })
//   .then((msg) => {
//     console.log(msg);
//     return call(msg);
//   })
//   .catch((msg) => console.log(msg));

// Test.then((msg) => console.log(msg))
//   .then((msg) => console.log(msg))
//   .then((msg) => console.log(msg))
//   .then((msg) => console.log("Happy new year"));

var i = 4;
function call(i) {
  var Test = new Promise((resolve, reject) => {
    if (i > 1) setTimeout(() => resolve(--i), 1000);
    else setTimeout(() => reject("Happy New year"), 1000);
  });
  return Test;
}

call(i)
  .then((msg) => {
    console.log(msg);
    return call(msg);
  })
  .then((msg) => {
    console.log(msg);
    return call(msg);
  })
  .then((msg) => {
    console.log(msg);
    return call(msg);
  })
  .catch((msg) => console.log(msg));
