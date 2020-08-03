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

        let fuel = document.getElementById(fuelStatus < 10000);
        fuelStatus.innerHTML = `The fuel level is at ${fuelLevel.value}. There is not enough fuel for the journey`;
        faultyItems.style.visibility = 'visible';
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch.";
        launchStatusCheck.style.color = 'red';
        console.log(fuelStatus);
        
        let cargo = document.getElementById(cargoMass > 10000);
         cargoStatus.innerHTML = `The cargo mass is at ${cargoMass.value}. There is too much cargo for the journey`; 
         faultyItems.style.visibility = 'visible'; 
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch.";
         launchStatusCheck.style.color = 'red';
         console.log(cargoMass);
          /*if (fuelLevel < 10000) {
            faultyItems.style.visibility = 'visible';
            launchStatus = "Shuttle not ready for launch."
            launchStatusCheck.style.color = 'red';
            console.log(`The fuel level is at ${fuelStatus}. There is not enough fuel for the journey`);
         */
          }
      })
   });
;

  
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
