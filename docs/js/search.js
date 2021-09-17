import { recipes } from "./recipes.js";
import {recipesListTemplate} from "./index.js"

let inputs = document.querySelectorAll('.inputs');
let inputIngredient = document.querySelector('.button--blue').value.toLowerCase;
let inputAppliance =  document.querySelector('.button--green').value.toLowerCase;
let inputUsetensils = document.querySelector('.button--red').value.toLowerCase;
let recipesList = document.getElementById('recipes-list');


let filteredRecipes=recipes;


function filterTheAppliance(){
  
     for (let i=0;i<recipes.length;i++ ){
    if (recipes[i].appliance.toLocaleLowerCase !== inputAppliance){
    filteredRecipes = recipes.pop(recipes[i])
      }
    else {
        return filteredRecipes = filteredRecipes}
    
    }}
  console.log(filteredRecipes)
  





function showRecipes(){
    for(let j=0; j<inputs.length; j++){
inputs[j].addEventListener('input', (e)=>{
   if( inputs[j].value.length >2 ){
       filterTheAppliance();
    displayFilteredRecipes()}
    
});
}}


function displayFilteredRecipes(){
    recipesList.innerHTML =filteredRecipes.map((recipe) => recipesListTemplate(recipe)).join("");   
   
}