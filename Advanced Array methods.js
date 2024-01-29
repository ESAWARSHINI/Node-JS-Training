/**Description: From an array of books, select books published after 2000 and
create an array of their titles and authors in the format "Title by Author".**/

//Data: 
const books = [
    { title: 'Book A', author: 'Author 1', year: 
   1999 },
    { title: 'Book B', author: 'Author 2', year: 
   2005 },
    { title: 'Book C', author: 'Author 3', year: 2001 }
    // more books...
   ];

//Expected Output: 
['Book B by Author 2', 'Book C by Author 3']

//Solution
console.log(books.filter((obj)=>obj.year>2000).map((obj1)=> `${obj1.title} by ${obj1.author}`));

/**Description: Given arrays of attendees for different events, create a single
array of unique attendees (no duplicates) sorted alphabetically by name.**/

//Data: 

const event1Attendees = ['Alice', 'Bob', 'Charlie'];
const event2Attendees = ['Bob', 'Dave', 'Eve'];
const event3Attendees = ['Charlie', 'Eve', 'Frank'];

//Expected Output: 
['Alice', 'Bob', 'Charlie', 'Dave', 'Eve', 'Frank']

//Solution

var arr=[...event1Attendees,...event2Attendees,...event3Attendees];
const names=[];
arr.filter((name)=>{if(!names.includes(name)){
  names.push(name);
}})
console.log(names.sort());