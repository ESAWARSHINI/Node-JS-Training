### <ins>JSON and JS Object

JSON
- **"JSON - Universal language between frontend and backend"** -> Because type of JSON is string and every language supports String.

- Data Type of JSON is **"String"**
- Does not have all the features of JS Object.

```js
const obj={
    name:"esa",
    age:21,
    fun : function sum(){
        return 10;
    }
};
var data=JSON.stringify(obj)
console.log(data);

//{"name":"esa","age":21}

console.log(JSON.parse(data));
//{name: 'esa', age: 21}
```
- We know that spread Operator makes only the shallow copy of Objects. To copy entire object JSON method is used.
```js
  const obj1={
    name:"esa",
    age:21,
    place:{
        street:"raju nagar",
        city:"tuty"
    }
};
const obj2={...obj1};
console.log(obj2);
// {name: 'esa', age: 21, place: {…}}

// The key 'place' will be as "Copy By Reference" (i.e) The change in obj2.place will also change obj1.place

// To copy entire Object
const obj2=JSON.parse(JSON.stringify(obj1));
console.log(obj2);
//
```
- Supports Loose Coupling

**Single page Application** 
- Not Good in Search Engine Optimization 
-  **Crawler Bots**(A bot that is used by search Engines to browse the World Wide Web for indexing the content ) in  Browser finds difficult to grasp the content of SPA.

**Multi Page Application** 
 - Good in search engine optimization
 - Because Crawler bot can easily grasp html css content 
 - So easily comes in google
 - Gain more users
