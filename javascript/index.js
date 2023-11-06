// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));



// Iteration 1 - using callbacks
// ...

// Iteration 2 - using promises
// ...

// Iteration 3 using async/await
// ...

// Bonus 2 - Promise all
const brusselsPromises = []; // Create an array of Promises to fetch Brussels Sprouts instructions

for (let step = 0; step < brusselsSprouts.length; step++) {
  brusselsPromises.push(
    obtainInstruction("brusselsSprouts", step)
  );
}

Promise.all(brusselsPromises)
  .then((steps) => {
    const brusselsList = document.querySelector("#brusselsSprouts");

    steps.forEach((stepInstruction) => {
      brusselsList.innerHTML += `<li>${stepInstruction}</li>`;
    });

    // Add an additional <li> to indicate Brussels Sprouts are ready
    brusselsList.innerHTML += '<li>Brussels sprouts are ready!</li>';
  })
  .catch((error) => console.log(error));