// fetchJsonp is used for making request
import fetchJsonp from "fetch-jsonp";

 // Select Form Element
const petForm = document.querySelector('#pet-form');

// Add Event Listener for petForm Element
petForm.addEventListener('submit', fetchAnimals);