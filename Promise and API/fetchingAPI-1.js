// Only with our own API we can do all the crud operations
// Chrome -get
// Postman - post , put , delete
//Postman ->To Test API
// Open Source API only allow get Operation

fetch("https://restcountries.com/v3.1/all")
  .then((data) => data.json())
  .then((msg) => console.log(msg));
//fetch() is a Browser Method  to get the API

// To fetch all country name which are present in Europe continent
fetch("https://restcountries.com/v3.1/all")
  .then((data) => data.json())
  .then((msg) =>
    console.log(
      msg
        .filter((obj) => obj.continents.includes("Europe"))
        .map((obj) => obj.name.common)
    )
  );

// Countries with Population more than 10000000 and sorted by population

fetch("https://restcountries.com/v3.1/all")
  .then((data) => data.json())
  .then((msg) =>
    console.log(
      msg
        .filter((obj) => obj.population > 10000000)
        .toSorted((a, b) => b.population - a.population)
        .map((obj) => obj.name.common)
    )
  );

// Population more than 10000000
/**
Output:
India -150000000
china -160000000
   **/

fetch("https://restcountries.com/v3.1/all")
  .then((data) => data.json())
  .then((msg) =>
    console.log(
      msg
        .filter((obj) => obj.population > 10000000)
        .map((obj) => `${obj.name.common} - ${obj.population}`)
        .join("\n")
    )
  );

//Get top 10 Populated Countries

fetch("https://restcountries.com/v3.1/all")
  .then((data) => data.json())
  .then((msg) =>
    console.log(
      msg
        .toSorted((a, b) => b.population - a.population)
        .map((obj) => `${obj.name.common} - ${obj.population}`)
        .slice(0, 11)
        .join("\n")
    )
  );
