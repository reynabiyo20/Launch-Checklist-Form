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

      } else if (isNaN(fuelLevelInput.value) === true || fuelLevelInput.value <= 0) {
         alert("Please input a valid number for fuel.") 

      } else if (isNaN(cargoMassInput.value) === true || cargoMassInput.value <= 0) {
          alert("Please input a valid number for cargo mass.") 

      } else if (Number(fuelLevelInput.value) < 10000) {
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch.`;
         copilotStatus.innerHTML = `Copilot ${copilotNameInput.value} is ready for launch.`;
         fuelStatus.innerHTML = "Fuel level too low for launch";
         launchStatus.innerHTML = "Shuttle not ready for launch.";
         launchStatus.style.color = "red";

      } else if (Number(cargoMassInput.value) > 10000) {
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch.`;
         copilotStatus.innerHTML = `Copilot ${copilotNameInput.value} is ready for launch.`;
         cargoStatus.innerHTML = "Cargo mass too high to take off.";
         launchStatus.innerHTML = "Shuttle not ready for launch.";
         launchStatus.style.color = "red";

      } else {
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch.`;
         copilotStatus.innerHTML = `Copilot ${copilotNameInput.value} is ready for launch.`;
         launchStatus.style.color = "green";
         launchStatus.innerHTML = "Shuttle is ready for launch.";
      };
   });
});
