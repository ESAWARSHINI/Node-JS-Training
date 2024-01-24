### <ins>HOISTING

- var and function - Hoisted
- let and const - Not Hoisted

JS has JIT compilation - Done by JS Engine
It has 2 Phase and 2 parts

Phase 1 - Compilation   
Phase 2 - Exceution

Part 1 - JS Engine   
Part 2 -  Execution Context (**Each scope have different context**)

```js
console.log(a); // undefined
var a=10;
console.log(a); // 10
```
***Phase 1 - Compilation***
 - All declarations are note down by context
 ```js
console.log(a); // Skipped
var a=10; 
// JS to context : whether you know 'a'
// context to JS : No
// JS to context :  Note down 'a' (context -> a)
console.log(a); // Skipped
```
***Phase 2 - Exection***

 ```js
console.log(a); 
// JS to context : Do you know 'a'
// context to JS : yes
// JS to context : what is the value
// Context to JS : undefined
var a=10; 
// JS to context : whether you know 'a'
// context to JS : yes
// JS to context : Note down value of 'a' (context -> a=10)
console.log(a); 
// JS to context : Do you know 'a'
// context to JS : yes
// JS to context : what is the value
// Context to JS : 10
```



```js
var price = 200;

function price(){
 console.log(price); // undefined
 var price= 400;
 console.log(price); // 400
}
getPrice();
```


```js
let price = 200;

function price(){
//TDZ - Temporal Dead Zone (Area where Variables cannot be accessed)

 console.log(price); // Error
 let price= 400;
 console.log(price); // 400
}
getPrice();
```

### <ins>ARRAY METHODS
  ***2 Things to be noted in array methods***  
  => Whether it mutate the Original Array  
  => What data type it returns

  -  Reason why Map , filter , and reduce are better than for-loops...Because it is **Declarative**
- Imperative -> Saying How to do it
 - Declarative -> Saying What to do

MAP
 - It always return a new array
 - sourceArray.length == outputArray.length ->true
 - Transform Data Type

 ```js
 const avengers=["hulk","Iron Man","Spider Man","Thor","Black Widow","Captain America"];

 const nameLength=avengers.map((n)=>n.length);
 console.log(nameLength); //  [4, 8, 10, 4, 11, 15]

 ```
 FILTER
  - It always return a new array
 - sourceArray.length >= outputArray.length ->true
 
 ```js
 const avengers = [
  "Hulk",
  "Iron man",
  "Black widow",
  "Captain america",
  "Spider man",
  "Thor",
];

// Longer names which has 10 or more chars

const names=avengers.filter((name)=>name.length>=10);
console.log(names);
//["Black widow","Captain america","Spider man"]
 ```

 FOREACH
 - Does not return anything
 ```js
 function sum(...num){
    var total=0;
    num.forEach((num)=>total+=num)
    return total;
}
console.log(sum(1,2,3,4)); //10
 ```

 REDUCE
 
 

