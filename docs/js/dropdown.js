import { recipes } from "./recipes.js";


let appliances = document.querySelector('.appliance-list');
let ustensils = document.querySelector('.ustensiles-list');
let Ingredients = document.querySelector('.ingredients-list');

 
showAppliances(); 
showUstensils();
showIngredients();
    
    
    //console.log(ingredientArray[1])
function showAppliances() {
    for (let i = 0; i < recipes.length; i++) {

        appliances.innerHTML += `<li>${recipes[i].appliance}</li>`;
        
    }}

function showUstensils() {
    for (let i = 0; i < recipes.length; i++) {
    
        ustensils.innerHTML += `<li>${recipes[i].ustensils}</li>`;
    
}}

function showIngredients() {
    for (let j = 0; j < recipes.length; j++) {
        let ingredientArray =  recipes[j].ingredients;
        for (let i = 0; i < ingredientArray.length; i++) {        
             Ingredients.innerHTML += `<li>${ingredientArray[i].ingredient}</li>`; 
        }
    }
}




// export {showIngredients, showAppliances, showUstensils}
