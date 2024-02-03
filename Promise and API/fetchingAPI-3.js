// Fetching data created using MockAPI.com

fetch("https://65bb5cf652189914b5bbdac7.mockapi.io/users")
  .then((res) => res.json())
  .then((data) => console.log(data));

//Delete specific user from api using fetch
fetch("https://65bb5cf652189914b5bbdac7.mockapi.io/users/1", {
  method: "DELETE",
})
  .then((res) => res.json())
  .then((data) => console.log(data));

//Delete 1st three users
var arr = [];
fetch("https://65bb5cf652189914b5bbdac7.mockapi.io/users")
  .then((res) => res.json())
  .then((data) =>
    data.forEach((obj, ind) => {
      if (ind < 3)
        fetch(`https://65bb5cf652189914b5bbdac7.mockapi.io/users/${obj.id}`, {
          method: "DELETE",
        });
    })
  );

//Delete 1st three users

fetch("https://65bb5cf652189914b5bbdac7.mockapi.io/users")
  .then((res) => res.json())
  .then((data) =>
    data.slice(0, 4).forEach((obj) => {
      fetch(`https://65bb5cf652189914b5bbdac7.mockapi.io/users/${obj.id}`, {
        method: "DELETE",
      });
    })
  );

//Using Async and Await
const getData = await fetch(
  "https://65bb5cf652189914b5bbdac7.mockapi.io/users"
);
const response = await getData.json();

response.slice(0, 3).forEach(async (obj) => {
  await fetch(`https://65bb5cf652189914b5bbdac7.mockapi.io/users/${obj.id}`, {
    method: "DELETE",
  });
});
