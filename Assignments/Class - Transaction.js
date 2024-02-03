// Class ---> To Mimic the real world thing

class Account {
  #balance;
  constructor(name, phno, accno, balance) {
    this.name = name;
    this.phno = phno;
    this.accno = accno;
    this.#balance = balance;
  }
  Deposit(amt) {
    this.#balance = this.#balance + amt;
    return this.getBalance();
  }
  withdraw(amt) {
    if (amt <= this.#balance) {
      this.#balance = this.#balance - amt;
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

console.log(user1.withdraw(100));
var arr = [user1, user2, user3];
arr.map((obj) => console.log(obj));
