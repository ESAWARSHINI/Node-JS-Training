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

user1.getname.call(user2, "hiii", "good to see you");
user1.getname.apply(user2, ["hello", "have great day"]);
