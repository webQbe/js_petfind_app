// fetchJsonp is used for making request
import fetchJsonp from "fetch-jsonp";

 // Select Form Element
const petForm = document.querySelector('#pet-form');

// Add Event Listener for petForm Element
petForm.addEventListener('submit', fetchAnimals);

// Fetch Animals from API
function fetchAnimals(e){
    e.preventDefault(); // Prevent form submission

    // Get Value from Dropdown User Input
    const animal = document.querySelector('#animal').value;

    // Get Zip Code
    const zip = document.querySelector('#zip').value;

    // Fetch Pets
    fetchJsonp(`http://api.petfinder.com/pet.find?format=json&key=${apiKey}&animal=${animal}&location=${zip}&callback=callback`, {
        jsonpCallbackFunction: 'callback'
    })
      .then(res => res.json()) // fetchJsonp() returns a promise
      .then(data => console.log(data)) // This is when we get data
      .catch(err => console.log(err)); // Catch any errors

}