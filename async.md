### setTimeout() setInterval()

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

### Architecture (refer loupe website)

- Call Stack
  - All JS code run in Call Stack
- Web Apis
  - Handle Asynchronous Part (Asyn code waits here)
- Call Queue
  - After mentioned time async code will be here
- Event Loop
