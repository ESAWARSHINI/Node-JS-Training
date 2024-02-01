fetch(
  "http://api.weatherapi.com/v1/current.json?key=47268720856e40d1a0844956240102&q=chennai&aqi=no"
)
  .then((data) => data.json())
  .then((msg) => console.log(msg));

// create
// {
// chennai :29,
// madurai :28,
// tuty:25
// }

// Solution 1
var cities = ["chennai", "madurai", "thoothukudi"];
var obj = {};
cities.map((city) => {
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=47268720856e40d1a0844956240102&q=${city}&aqi=no`
  )
    .then((data) => data.json())
    .then((msg) => (obj[msg.location.name] = msg.current.temp_c));
});
console.log(obj);

//Solution 2
function getTemp(city) {
  return fetch(
    `http://api.weatherapi.com/v1/current.json?key=47268720856e40d1a0844956240102&q=${city}&aqi=no`
  )
    .then((data) => data.json())
    .then((data) => [data.location.name, data.current.temp_c]);
}
Promise.all(cities.map(getTemp))
  .then((data) => Object.fromEntries(data)) //fromEntries() -> Convert Array to Object
  .then((data) => console.log(data));

//Solution 3
async function getTemp1(city) {
  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=47268720856e40d1a0844956240102&q=${city}&aqi=no`
  );
  const data = await res.json();
  return [data.location.name, data.current.temp_c];
}

async function getCityTemp() {
  const res = await Promise.all(cities.map(getTemp1));
  console.log(Object.fromEntries(res));
}
getCityTemp();

//Solution 4
//Top level await
const res = await Promise.all(cities.map(getTemp1));
console.log(Object.fromEntries(res));
