// Promise.all()
// CASE 1

var Test1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Test 1 Resolved"), 5000);
  //setTimeout(() => reject("Test 1 Rejected"), 5000);
});

var Test2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Test 2 Resolved"), 2000);
  //setTimeout(() => reject("Test 2 Rejected"), 5000);
});

var Test3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Test 3 Resolved"), 500);
  //setTimeout(() => reject("Test 3 Rejected"), 5000);
});

Promise.all([Test1, Test2, Test3]).then((data) => console.log(data));

//CASE 2

var Test1 = new Promise((resolve, reject) => {
  //setTimeout(() => resolve("Test 1 Resolved"), 5000);
  setTimeout(() => reject("Test 1 Rejected"), 5000);
});

var Test2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Test 2 Resolved"), 2000);
  //setTimeout(() => reject("Test 2 Rejected"), 5000);
});

var Test3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Test 3 Resolved"), 500);
  //setTimeout(() => reject("Test 3 Rejected"), 500);
});

Promise.all([Test1, Test2, Test3])
  .then((data) => console.log(data))
  .catch((data) => console.log(data));

//Promise.race()

// CASE 1

var Test1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Test 1 Resolved"), 5000);
  //setTimeout(() => reject("Test 1 Rejected"), 5000);
});

var Test2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Test 2 Resolved"), 2000);
  //setTimeout(() => reject("Test 2 Rejected"), 5000);
});

var Test3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Test 3 Resolved"), 500);
  //setTimeout(() => reject("Test 3 Rejected"), 5000);
});

Promise.race([Test1, Test2, Test3]).then((data) => console.log(data));

//CASE 2

var Test1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Test 1 Resolved"), 1000);
  //setTimeout(() => reject("Test 1 Rejected"), 5000);
});

var Test2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Test 2 Resolved"), 2000);
  //setTimeout(() => reject("Test 2 Rejected"), 5000);
});

var Test3 = new Promise((resolve, reject) => {
  //setTimeout(() => resolve("Test 3 Resolved"), 500);
  setTimeout(() => reject("Test 3 Rejected"), 5000);
});

Promise.race([Test1, Test2, Test3]).then((data) => console.log(data));

//Promise.allSettled()

//CASE 1

var Test1 = new Promise((resolve, reject) => {
  //setTimeout(() => resolve("Test 1 Resolved"), 10);
  setTimeout(() => reject("Test 1 Rejected"), 10);
});

var Test2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Test 2 Resolved"), 2000);
  //setTimeout(() => reject("Test 2 Rejected"), 5000);
});

var Test3 = new Promise((resolve, reject) => {
  //setTimeout(() => resolve("Test 3 Resolved"), 500);
  setTimeout(() => reject("Test 3 Rejected"), 500);
});

Promise.allSettled([Test1, Test2, Test3]).then((data) => console.log(data));
