// Write your JavaScript code here!
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
      let fuel = fuelLevel.value;
      let cargoMass = document.querySelector("input[name=cargoMass]");
      let cargo = cargoMass.value;

      if (pilot === "" || copilot === "" || fuel === "" || cargo === "") {
         alert("All fields are required!");
         //console.log ("if");  
         //console.log(pilot);
      }
   });
});
    

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
