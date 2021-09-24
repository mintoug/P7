import { recipes } from "./recipes.js";
import { recipesListTemplate } from "./index.js";

const chevron = document.querySelector('.chevron');
const inputIngredient = document.querySelector('.button--blue');
const inputAppliance =  document.querySelector('.button--green');
const inputUsetensils = document.querySelector('.button--red');
let inputResult= document.querySelector('#input-result');
let filteredRecipes=[];
let filteredUstensil=[]
let i=0;

/*show the input*/
inputIngredient.addEventListener('input', ()=>{
   if(inputIngredient.value.length>2){
    let inputValue = inputIngredient.value;
    inputResult.innerHTML =inputValue;
    filterRecipesIngredients()
    }
});

inputAppliance.addEventListener('input', ()=>{
    if(inputAppliance.value.length>2){
     let inputValue = inputAppliance.value;
     inputResult.innerHTML =inputValue;
     filterRecipesAppliance();
        }
 });


 inputUsetensils.addEventListener('input', ()=>{
    if(inputUsetensils.value.length>2){
     let inputValue = inputUsetensils.value;
     inputResult.innerHTML =inputValue;
     filterRecipesUstensils()
     }
 });


 function filterRecipesAppliance(){
  do{     
    if(recipes[i].appliance.includes(inputResult.innerHTML)){
      filteredRecipes.push(recipes[i]);
      console.log(recipes[i].id);   } 
     i++;
}
while(i < recipes.length);console.log(filteredRecipes)
}

function filterRecipesUstensils(){
  do{     
    if(recipes[i].ustensils[0].includes(inputResult.innerHTML)){
      filteredUstensil.push(recipes[i]);
      console.log(recipes[i].id); } 
     i++;
}
while(i < recipes.length);console.log(filteredUstensil)
}

// function filterRecipesIngredients(){
//   do{    for(let j=0; j<recipes.length; j++) {
//     if(recipes[i].ingredients[j].ingredient[0].includes(inputResult.innerHTML)){
//       filteredUstensil.push(recipes[i]);}
//       console.log(recipes[i].id); } 
//      i++;
// }
// while(i < recipes.length);console.log(filteredUstensil)
// }