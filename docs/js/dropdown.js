import { recipes } from "./recipes.js";


let appliances = document.querySelector('.appliance-list');
let ustensils = document.querySelector('.ustensiles-list');
let Ingredients = document.querySelector('.ingredients-list');

showAppliances(); 
showUstensils();
showIngredients();

function showAppliances(){
    let applianceItems =[];
    for(let i = 0; i < recipes.length; i++){
        applianceItems.push(recipes[i].appliance)
    }
    let noDoubleAppliance = applianceItems.filter((item, index)=>applianceItems.indexOf(item)===index)
    for (let k=0; k<noDoubleAppliance.length; k++){
        appliances.innerHTML += `<li>${noDoubleAppliance[k]}</li>`;
    }
}

function showUstensils() {
    let ustensilsItem =[];
        for (let i = 0; i < recipes.length; i++) {
    ustensilsItem.push(recipes[i].ustensils[0]) }
    let noDoubleUstensils = ustensilsItem.filter((item, index)=>ustensilsItem.indexOf(item)===index)
    for (let k=0; k<noDoubleUstensils.length; k++){   
    ustensils.innerHTML += `<li>${noDoubleUstensils[k]}</li>`;
}}

function showIngredients() {
    let ingredientArray=[]; let ingredientItem=[];
    for (let j = 0; j < recipes.length; j++) {
         ingredientArray.push(recipes[j].ingredients);}
      //  console.log(ingredientArray)
   for(let elt in ingredientArray){
             let item = ingredientArray[elt][0].ingredient;
             ingredientItem.push(item) }           
           // console.log(ingredientItem)
        let noDoubleIngredient = ingredientItem.filter((item, index)=>ingredientItem.indexOf(item)===index)
        for (let i = 0; i < noDoubleIngredient.length; i++) {       
             Ingredients.innerHTML += `<li>${noDoubleIngredient[i]}</li>`; 
        }}
    




// export {showIngredients, showAppliances, showUstensils}
