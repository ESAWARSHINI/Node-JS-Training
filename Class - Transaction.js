// Class ---> To Mimic the real world thing

class Transaction {
  constructor(id, user, date, mode, amount, balance) {
    this.id = id;
    this.user = user;
    this.date = date;
    this.mode = mode;
    this.amount = amount;
    this.balance = balance;
  }
}
var arr = [];
var i = 0;
var tid = 1;
class Account {
  #balance;
  constructor(name, phno, accno, balance) {
    this.name = name;
    this.phno = phno;
    this.accno = accno;
    this.#balance = balance;
  }
  Deposit(amt, user) {
    this.#balance = this.#balance + amt;
    arr[i++] = new Transaction(
      tid++,
      user,
      "12/6/24",
      "Deposit",
      amt,
      this.#balance
    );

    return this.getBalance();
  }
  withdraw(amt, user) {
    if (amt <= this.#balance) {
      this.#balance = this.#balance - amt;
      arr[i++] = new Transaction(
        tid++,
        user,
        "12/3/24",
        "Withdraw",
        amt,
        this.#balance
      );
      return this.getBalance();
    } else {
      return `insufficient Balance ${this.getBalance()}`;
    }
  }
  getBalance() {
    return `Your balance is ${this.#balance}`;
  }
}

const user1 = new Account("esa", 9876543567, "A123", 100000);
const user2 = new Account("warshini", 9856785678, "B123", 600000);
const user3 = new Account("karti", 6789564321, "c123", 10000);

console.log(user1.Deposit(100, "user1"));
user1.withdraw(100, "user1");
user2.Deposit(500, "user2");

arr.filter((obj) => {
  if (obj.user == "user2") console.log(obj);
});
