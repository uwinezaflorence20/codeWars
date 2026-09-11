fetch("https://handlers.education.launchcode.org/static/weather.json").then(function(response){
console.log(response);
});

fetch("https://handlers.education.launchcode.org/static/weather.json")
.then((res)=>res.json())
.then((data)=>console.log(data));

// second way using the variable
 let data = fetch("https://handlers.education.launchcode.org/static/weather.json");
 data.then((res)=>res.json())
 .then((dat)=>console.log(dat));


 const fetchPromise = fetch("https://handlers.education.launchcode.org/static/weather.json");
fetchPromise.then( function(response) {
   const jsonPromise = response.json();
   jsonPromise.then((data)=> console.log(data));
   jsonPromise.then( function(json) {
      console.log("temp", json.temp);
      console.log("temp", json.windSpeed);
   });
} );

window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      // TODO: do something after fetching and receiving a response
      console.log(response.json())
   });
});