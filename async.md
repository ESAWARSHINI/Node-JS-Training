- SYNCHRONOU CODE
  - Executed line by line
- ASYNCHRONOUS CODE
  - Executed Simultaneously ( Code that run in the background without blocking the execution of other code.)

### setTimeout() setInterval()

- Both are part of Browser Method not Javascript functions (Including EventListeners)

- Both Accept **Function** as 1st argument and **time delay(in milli second)** as 2nd argument

```js
setTimeout(function () {
  console.log("hi");
}, 2000);
```

- Function inside setTimeout() and setInterval() is called **"CallBack"** function.

- **"CallBack function"** -> Function that is Executed after an event completes

  - Here the event is time delay for 2000ms.

- To stop the SetInterval() -> clearInterval()
- **setTimeout() and setInterval()** may not run exactly after the mentioned time delay
- **setTimeout() and setInterval()** without second argument -> Will have a default argument

```js
const x = setInterval(function () {
  console.log("super");
}, 2000);

console.log("hi");
console.log("hi");
console.log("hi");
console.log("hi");
console.log("hi");
console.log("hi");
// Output :
//hi
//hi
//hi
//hi
//hi
//hi
//super
```

```js
// Print "super" n times

function print(n) {
  const x = setInterval(function () {
    console.log("super");
  }, 2000);

  setTimeout(() => {
    clearInterval(x);
  }, n * 2000);
}
print(4);

// To print the colours repetedly

const arr1 = ["red", "purple", "green"];
var i = 0;
function slideShow(arr1) {
  setInterval(() => {
    if (i >= arr1.length) i = 0;
    console.log(`%c ${arr1[i]}`, `color:${arr1[i]}`); // To assign colour to text
    i++;
  }, 1000);
}

slideShow(arr1);

// Display 3 buttons
// 'start' -> Start the slide show of colours
// 'stop' -> stop the slideshow...when we click again on start it should start from first
//'pause' -> stop the slideshow...but when we click again on start it should resume the slideshow of colour

var color;
var i = 0;
var index;
const arr = ["red", "purple", "green", "yellow", "blue", "black"];

function colours() {
  color = setInterval(() => {
    if (i >= arr.length) i = 0;
    document.body.style.background = arr[i];

    i++;
  }, 1000);
}

function start() {
  stop(); // to avoid glitch when start is clicked repetedly
  colours();
}
function stop() {
  clearInterval(color);
  i = 0;
}

function pause() {
  clearInterval(color);
}
```

> Js is Single thread and Asynchronous

### JS Engine Architecture (refer loupe website)

- Call Stack or Main Thread
  - All JS code run in Call Stack
  - Follow FILO when code forms a stack
  - **functions call** Remain in Call Stack until the function definition returns.
- Web Apis
  - Handle Asynchronous Part (Asyn code waits here)
- Call Queue
  - After mentioned time async code will be here
- Event Loop

  - Only when call stack is empty eventloop pushes code in call queue to call stack

  ### To improve WebPage Performance

  - Keep the Call Stack Empty (i.e) write a good code

  ### CallBack Hell

  - caused by Nesting of callback function
  - Reduce Readability
  - Callback Hell can be Resolved by **Promise**

  ### Promise

- Has 3 States
  - Pending
  - Fullfilled
  - Rejected
- Promise Methods
  - .then() - Executed when resolve is called
  - .catch() - Executed when reject is called
  - .finally() - Whatever is called it will be executed
  - .all() - Trigger multiple promises at a same time
- Above All method Return Promise Object
