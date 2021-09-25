import { recipes } from "./recipes.js";


const inputIngredient = document.querySelector('.button--blue');
const inputAppliance =  document.querySelector('.button--green');
const inputUsetensils = document.querySelector('.button--red');
let inputResult= document.querySelector('#input-result');
let filteredRecipes=[];
let filteredUstensil=[]
let filteredIngredient=[];


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
   for (let i=0; i<recipes.length;i++){
    let x =recipes[i].appliance.toLowerCase();
   if( x.includes(inputResult.innerHTML.toLowerCase())){
      filteredRecipes.push(recipes[i]);
      console.log(recipes[i].id);
   }}}
 
 
function filterRecipesUstensils(){
  let ustensils = []
  for (let l=0;l<recipes.length;l++){
    ustensils.push(recipes[l].ustensils)
  }

for(let i=0; i<recipes.length; i++){
    let y =   ustensils[i][0].toLowerCase() ;
    if(y.includes(inputResult.innerHTML.toLowerCase())){
      filteredUstensil.push(recipes[i]);
console.log(recipes[i].id);
} }}


 function filterRecipesIngredients(){
   let ingredients =[];
   let ingredientTable=[];
   for(let i=0;i<recipes.length;i++){
     ingredients.push(recipes[i].ingredients)}
   
   for (let j=0; j<ingredients.length;j++){
     ingredientTable.push(ingredients[j][0].ingredient)
   }
   for (let elt in ingredientTable){
     if(ingredientTable[elt].toLowerCase().includes(inputResult.innerHTML.toLowerCase())){
       filteredIngredient.push(recipes[elt])
       console.log(recipes[elt].id)
     }
   }}