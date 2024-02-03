### `this` Keyword

- When `this` Keyword has no Context(Object)

  - if `<script type="module" src="this.js> </script>`(Strict) ---> this - undefined

```js
console.log(this);
// Output : Undefined
```

- if `<script  src="this.js> </script>` (No Strict) ---> this - Window Object

```js
console.log(this);
// Output : window object
```

- `this` does not get reference from where it is defined it get reference from where it is called

```js
function log() {
  console.log(this);
}
log(); // no strict - window
// strict - undefined

const obj1 = { name: "obj1" };

const obj2 = { name: "obj2" };

obj1.log = log;
obj2.log = log;
obj1.log(); //obj1
obj2.log(); //obj2
```

- `new` will bind the `this` to the object we are creating

```js
class user={
    constructor(name,age,id){
        this.name=name;
        this.age=age;
        this.id=id
    }
}

const obj1=new user("abc",21,1);
console.log(obj1.name)//abc
```

### call() , bind() , apply()

- To force the context to the function

### <ins>call()

```js
const user1 = {
  name: "hiiiii",
  getname: function (greet1, greet2) {
    console.log(`name is ${this.name} ${greet1} ${greet2}`);
  },
};

const user2 = {
  name: "hello",
};

user1.getname.call(user2, "hiii", "good to see you");

//Output : name is hello hiii good to see you
```

### <ins> bind()

- Return a function

```js
const user1 = {
  name: "hiiiii",
  getname: function (greet1, greet2) {
    console.log(`name is ${this.name} ${greet1} ${greet2}`);
  },
};

const user2 = {
  name: "hello",
};

var x = user1.getname.bind(user2);
x("welcome", "pleasure to see you");

//Output: name is hello welcome pleasure to see you
```

### <ins> apply()

```js
const user1 = {
  name: "hiiiii",
  getname: function (greet1, greet2) {
    console.log(`name is ${this.name} ${greet1} ${greet2}`);
  },
};

const user2 = {
  name: "hello",
};

user1.getname.apply(user2, ["hello", "have great day"]);

//Output : name is hello hello have great day
```
