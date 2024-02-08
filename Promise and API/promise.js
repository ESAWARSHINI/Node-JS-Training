// CallBack Hell
var counter = 10;

setTimeout(() => {
  console.log(counter--);
  setTimeout(() => {
    console.log(counter--);
    setTimeout(() => {
      console.log(counter--);
      setTimeout(() => {
        console.log(counter--);
        setTimeout(() => {
          console.log(counter--);
          setTimeout(() => {
            console.log(counter--);
            setTimeout(() => {
              console.log(counter--);
              setTimeout(() => {
                console.log(counter--);
                setTimeout(() => {
                  console.log(counter--);
                  setTimeout(() => {
                    console.log(counter--);
                    setTimeout(() => {
                      console.log("Happy New Year");
                    }, 500);
                  }, 500);
                }, 500);
              }, 500);
            }, 500);
          }, 500);
        }, 500);
      }, 500);
    }, 500);
  }, 500);
}, 500);

// CREATING A PROMISE

// A Promise will wait until resolve or reject is called

var Test = new Promise((resolve, reject) => {
  let age = 20;
  if (age >= 18) {
    resolve("you are eligible");
  } else {
    reject("Not eligible");
  }
});
console.log(Test, typeof Test);
/** 
 Test is a Promise object
 resole and rejected -> CallBack function

 If resolve gets executed Promise is in "FULLFILLED" State -> output: Promise object
 If reject gets executed Promise is in "REJECTED" State -> output: Error and Promise Object
 If any async statement occer in promise it is in "PENDING" State.
**/

// PROMISE OBJECTS METHODS

var Test = new Promise((resolve, reject) => {
  let age = 20;
  if (age >= 18) {
    setTimeout(() => resolve("you are eligible"), 5000);
  } else {
    reject("Not eligible");
  }
});

Test.then((msg) => console.log("your result", msg)); // executed only when resolve is called
// msg -> things in resolve()

Test.then((msg) => "your result is" + msg)
  .then((x) => x + "super")
  .then((x) => console.log("finally" + x));
//Dot Chaining is Posible with Promise methods because they all return a promise object

// Handle error scenerio

var Test = new Promise((resolve, reject) => {
  let age = 13;
  if (age >= 18) {
    resolve("you are eligible");
  } else {
    reject("Not eligible");
  }
});

Test.then((msg) => "your result is" + msg)
  .then((x) => x + "super")
  .then((x) => console.log("finally" + x))
  .catch((msg) => console.log("error vro"))
  .finally((msg) => console.log("test completed"));
/** output: error vro
              test completed
   **/

//REJECTION IN DOT CHAINING

var Test = new Promise((resolve, reject) => {
  let age = 20;
  if (age >= 18) {
    resolve("you are eligible");
  } else {
    reject("Not eligible");
  }
});

Test.then((msg) => console.log("your result is" + msg))
  .then((x) => Promise.reject("fail"))
  .then((x) => console.log("finally" + x))
  .catch((msg) => console.log("error vro"))
  .finally((msg) => console.log("test completed"));
//Directly go to catch method

// console.log will return undefined
//var y=console.log("hi")
//console.log(y)//undefined

Test.then((msg) => "your result is" + msg)
  .then((x) => console.log(x + "super"))
  .then((y) => console.log("finally" + y));
// output : your result is you are eligible super undefined

// Promise.all()
var f1 = Promise.resolve("11");
var f2 = Promise.resolve("21");
var f3 = Promise.resolve("31");

Promise.all([f1, f2, f3]).then((data) => console.log(data));
// If all the input Promises are resolved then it return output in the order of input passed regardless of their completion time.
// It will reject immediately upon any of the input promises is rejected and return only thr reject msg

//Promise.race()
var f1 = Promise.resolve("11");
var f2 = Promise.resolve("21");
var f3 = Promise.resolve("31");

Promise.race([f1, f2, f3]).then((data) => console.log(data));
// Output returned will be the promise that completed first
// when the faster one is rejected all will be rejected

//Promise.allSettled()
// Unlike .all() It will wait for all input promises to complete, regardless of whether or not one rejects. Use allSettled() if you need the final result of every promise in the input iterable.
// op will be array of objects with properties status and value(For Resolve)/reason(For Reject)

// Callback to Promise
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
