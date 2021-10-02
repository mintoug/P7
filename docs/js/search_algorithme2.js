import {recipeIngredientsListTemplate, recipeIngredientsListTemplate} from "./index.js";
import { recipes } from "./recipes.js";


const inputIngredient = document.querySelector('.button--blue');
const inputAppliance =  document.querySelector('.button--green');
const inputUsetensils = document.querySelector('.button--red');
let inputResult= document.querySelector('#input-result');
let recipesList = document.getElementById('recipes-list');
let filteredUstensil=[];
let filteredIngredient=[];
let filteredRecipes=[];

/*show the inputs in the span of the top*/
/*in ingrdient*/
inputIngredient.addEventListener('input', ()=>{
   if(inputIngredient.value.length>2){
       inputResult.innerHTML = inputIngredient.value;
         filterRecipesIngredients(inputIngredient.value);
         
    }
});
/*in appliance*/
inputAppliance.addEventListener('input', ()=>{
    if(inputAppliance.value.length>2){
        inputResult.innerHTML=inputAppliance.value;
        filterRecipesAppliance();
        
        }
 });

/*in usetensils*/
 inputUsetensils.addEventListener('input', ()=>{
    if(inputUsetensils.value.length>2){
        inputResult.innerHTML=inputUsetensils.value;
         filterRecipesUstensils();
     }
 });

/**the functions to filter recipes  */
/**filter the appliances */
 function filterRecipesAppliance(){

  for (let i=0; i<recipes.length;i++){
      
   if(recipes[i].appliance.toLowerCase().includes(inputResult.innerHTML.toLowerCase())){
       //test if recipes exists  yet 
       if(!filteredRecipes.includes(recipes[i])){
      filteredRecipes.push(recipes[i]);
       }
     }
    }
    console.log(filteredRecipes); 
    
  }
  
 /**filter ustensils */
 
function filterRecipesUstensils(){
  let ustensilsTable = []
  for (let l=0;l<recipes.length;l++){
    ustensilsTable.push(recipes[l].ustensils)
  
  for(let i=0; i<ustensilsTable.length; i++){
         for (let elt in ustensilsTable[i]){
             if(ustensilsTable[i][elt].toLowerCase() === inputResult.innerHTML.toLowerCase()){
      if (!filteredUstensil.includes(recipes[l])){
      filteredUstensil.push(recipes[l])}
      
    }}}
     
    }console.log(filteredUstensil) } 

/**filter ingredients */

 function filterRecipesIngredients(){
   let filteredIngredients =[];
  // console.log(filteredIngredients);
    for(let i=0; i<recipes.length; i++){
        let tableIngredientsDetails = recipes[i].ingredients;
        
        for(let n in tableIngredientsDetails ){
            
            let tableIngredients = tableIngredientsDetails[n].ingredient.toLowerCase();
        
       if (tableIngredients == inputIngredient.value.toLowerCase()){
        
          filteredIngredients.push(recipes[i]);
          
    }
}
}console.log(filteredIngredients);
return filteredIngredients;
}
 


