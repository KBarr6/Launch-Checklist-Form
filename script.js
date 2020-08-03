// Write your JavaScript code here!

      window.addEventListener("load", function() {
         fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
               response.json().then( function(json) {
               const div = document.getElementById("missionTarget");
               div.innerHTML = `
         <ol>
            <li>Name: ${json[4].name}</li>
            <li>Diameter: ${json[4].diameter}</li>
            <li>Star: ${json[4].star}</li>
            <li>Distance from Earth: ${json[4].distance}</li>
            <li>Number of Moons: ${json[4].moons}</li>
         </ol>
         <img src="${json[4].image}">
         `
            });
         });
      });

window.addEventListener("load", function() {
   let form = document.querySelector("form");
   //console.log('window loaded');
   form.addEventListener("submit", function(event) { 
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]");
      let pilot = pilotName.value;
      let copilotName = document.querySelector("input[name=copilotName]");
      let copilot = copilotName.value;
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let fuel = Number(fuelLevel.value);
      let cargoMass = document.querySelector("input[name=cargoMass]");
      let cargo = Number(cargoMass.value);

      if (pilot === "" || copilot === "" || fuel === "" || cargo === "") {
         alert("All fields are required!");
         console.log ("if");  
         
      } else if (isNaN(fuel) || isNaN(cargo)) {
         alert("number is needed");
         console.log("else if");
      } else {
         //EVERTYTHING ELSE GOES HERE
         let pilot = document.getElementById(pilotStatus);
         pilotStatus.innerHTML = `Pilot ${pilotName.value} Ready.`;

         let copilot = document.getElementById(copilotStatus);
         copilotStatus.innerHTML = `Co-pilot ${copilotName.value} Ready.`;

         if (fuelLevel.value < 10000) {
            let fuel = document.getElementById("fuelStatus");
            fuel.innerHTML = `The fuel level is at ${fuelLevel.value}. There is not enough fuel for the journey`;
            faultyItems.style.visibility = 'visible';
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch.";
            launchStatusCheck.style.color = 'red';     
         }

         if (cargoMass.value > 10000) {
            let cargo = document.getElementById("cargoStatus");
            cargo.innerHTML = `The cargo mass is at ${cargoMass.value}. There is too much cargo for the journey`; 
            faultyItems.style.visibility = 'visible'; 
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch.";
            launchStatusCheck.style.color = 'red'; 
         }
         if (fuelLevel.value > 10000 && cargoMass.value < 10000) {
            document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
            faultyItems.style.visibility = 'hidden';
            launchStatusCheck.style.color = 'green'; 
         }
      }
   })
});
;

  
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${K2-18b}</li>
   <li>Diameter: ${34500 km}</li>
   <li>Star: ${K2-18)}</li>
   <li>Distance from Earth: ${110 light years from Earth}</li>
   <li>Number of Moons: ${0}</li>
</ol>
<img src="${https://www.nasa.gov/sites/default/files/thumbnails/image/heic1916a.jpg}">
*/
