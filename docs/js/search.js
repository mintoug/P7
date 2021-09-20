import { recipes } from "./recipes.js";


const chevron = document.querySelector('.chevron');
const inputIngredient = document.querySelector('.button--blue');
const inputAppliance =  document.querySelector('.button--green');
const inputUsetensils = document.querySelector('.button--red');
let inputResult= document.querySelector('#input-result')
let recipesList = document.querySelector('#recipes-list');
let filteredRecipes=[];
let i=0;

/*show the input*/
inputIngredient.addEventListener('input', ()=>{
   if(inputIngredient.value.length>2){
    let inputValue = inputIngredient.value;
    inputResult.innerHTML =inputValue;
   return tag=inputValue;
    }
});

inputAppliance.addEventListener('input', ()=>{
    if(inputAppliance.value.length>2){
     let inputValue = inputAppliance.value;
     inputResult.innerHTML =inputValue;
   }
 });
 inputUsetensils.addEventListener('input', ()=>{
    if(inputUsetensils.value.length>2){
     let inputValue = inputUsetensils.value;
     inputResult.innerHTML =inputValue;
     return inputValue=tag}
 });


function filterRecipesAppliance(){
    
   do{
        if(recipes[i].appliance.includes(toString(inputResult))){
         filteredRecipes=filteredRecipes.push(recipes[i]);
        } else{i++;} 
    }
 while(i<recipes.length)}
 filterRecipesAppliance();
 console.log(filteredRecipes)