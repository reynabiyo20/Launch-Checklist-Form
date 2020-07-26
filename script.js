// Write your JavaScript code here!

window.addEventListener("load", function () {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
      response.json().then(function (json) {
         const planets = document.getElementById("missionTarget");
         for (planet of json) {
            function getRandomInt(max) {
               return Math.floor(Math.random() * Math.floor(max));
             }
             
            let index = getRandomInt(6);
            planets.innerHTML = `<h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[index].name}</li>
                  <li>Diameter: ${json[index].diameter}</li>
                  <li>Star: ${json[index].star}</li>
                  <li>Distance from Earth: ${json[index].distance}</li>
                  <li>Number of Moons: ${json[index].moons}</li>
               </ol>
               <img src="${json[index].image}">
               </div>`;
         };
      });
   });


   // Write your JavaScript code here!

   const form = document.querySelector("form");
   form.addEventListener("submit", function (event) {
      event.preventDefault();

      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      let launchStatus = document.getElementById("launchStatus");
      let faultyItems = document.getElementById("faultyItems");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");



      if (pilotNameInput.value.trim() === "") {
         alert("Pilot name cannot be blank. ");
      } else if (copilotNameInput.value.trim() === "") {
         alert("Copilot name cannot be blank. ");
      } else if (fuelLevelInput.value.trim() === "") {
         alert("Fuel level cannot be blank.");
      } else if (cargoMassInput.value.trim() === "") {
         alert("Cargo mass cannot be blank.");
      } else if (isNaN(fuelLevelInput.value) === true) {
         alert("Please input a valid number for fuel level.");
      } else if (isNaN(cargoMassInput.value) === true) {
         alert("Please input a valid number for cargo mass.");
      } else {

         pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch.`;
         copilotStatus.innerHTML = `Copilot ${copilotNameInput.value} is ready for launch.`;
         faultyItems.style.visibility = "visible";

         if (Number(fuelLevelInput.value) < 10000) {
            fuelStatus.innerHTML = "Fuel level too low for launch.";
            fuelStatus.style.color = "red";
         } else {
            fuelStatus.innerHTML = "Fuel level high enough for launch.";
            fuelStatus.style.color = "black";
         };

         if (Number(cargoMassInput.value) > 10000) {
            cargoStatus.innerHTML = "Cargo mass too high to take off.";
            cargoStatus.style.color = "red";

         } else {
            cargoStatus.innerHTML = "Cargo mass low enough to take off.";
            cargoStatus.style.color = "black";
         };

         if (Number(fuelLevelInput.value) < 10000 || Number(cargoMassInput.value) > 10000) {
            launchStatus.innerHTML = "Shuttle is not ready for launch.";
            launchStatus.style.color = "red";

         } else {
            launchStatus.style.color = "green";
            launchStatus.innerHTML = "Shuttle is ready for launch.";
         };
      };
   });
});