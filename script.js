// Write your JavaScript code here!

window.addEventListener("load", function () {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
      response.json().then(function (json) {
         const planets = document.getElementById("missionTarget");
         for (planet of json) {
            let index = 2;
            planets.innerHTML = `<h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[index].name}</li>
                  <li>Diameter: ${json[index].diameter}</li>
                  <li>Star: ${json[index].star}</li>
                  <li>Distance from Earth: ${json[index].distance}</li>
                  <li>Number of Moons: ${json[index].moons}</li>
               </ol>
               <img src="${json[index].image}">;
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



      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required.");
      } else if (pilotNameInput.value === " " || copilotNameInput.value === " " || fuelLevelInput.value === " " || cargoMassInput.value === " ") {
         alert("Blank is not a valid input.");
      } else if (isNaN(fuelLevelInput.value) === true || (isNaN(cargoMassInput.value) === true)) {
         alert("Please input a valid number.")
      } else {

         pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch.`;
         copilotStatus.innerHTML = `Copilot ${copilotNameInput.value} is ready for launch.`;

         if (Number(fuelLevelInput.value) < 10000) {
            faultyItems.style.visibility = "visible";
            fuelStatus.innerHTML = "Fuel level too low for launch.";
         } else {
            faultyItems.style.visibility = "visible";
            fuelStatus.innerHTML = "Fuel level high enough for launch.";
         };

         if (Number(cargoMassInput.value) > 10000) {
            faultyItems.style.visibility = "visible";
            cargoStatus.innerHTML = "Cargo mass too high to take off.";

         } else {
            faultyItems.style.visibility = "visible";
            cargoStatus.innerHTML = "Cargo mass low enough to take off.";
         };

         if (Number(fuelLevelInput.value) < 10000 || Number(cargoMassInput.value) > 10000) {
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle is not ready for launch.";
            launchStatus.style.color = "red";

         } else {
            launchStatus.style.color = "green";
            launchStatus.innerHTML = "Shuttle is ready for launch.";
         };
      };
   });
});