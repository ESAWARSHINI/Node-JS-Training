fetch("https://65bb5cf652189914b5bbdac7.mockapi.io/users")
  .then((res) => res.json())
  .then((data) => console.log(data));

//Code to update user data in the API

const updateData = {
  avatar:
    "https://www.istockphoto.com/vector/flag-of-india-gm519611160-90622047",
};

fetch("https://65bb5cf652189914b5bbdac7.mockapi.io/users")
  .then((res) => res.json())
  .then((data) =>
    data.forEach((obj) =>
      fetch(`https://65bb5cf652189914b5bbdac7.mockapi.io/users/${obj.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      })
    )
  );

//Code to create new users in the API

const newUsersData = [
  {
    name: "esa",
    avatar: "https://example.com/avatar1.jpg",
  },
  {
    name: "warshini",
    avatar: "https://example.com/avatar2.jpg",
  },
  {
    name: "seetha",
    avatar: "https://example.com/avatar3.jpg",
  },
];

newUsersData.forEach((userData) => {
  fetch("https://65bb5cf652189914b5bbdac7.mockapi.io/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
});
