let requestUrl ='/base.json';



/**access to data 
 * Fetch method
 */
 fetch(requestUrl)
  .then(response => {
    if (response.ok) {
      response.json().then(data => {
       
      });
    }
    else {
      document.getElementById("error-json").style.display = "block";
      document.getElementById("error-json").innerHTML = "Erreur avec le fichier JSON<br>" + response.status + " " + response.statusText;
    }
  });

  class recipes {
    constructor(id, info) {
      this.id = id;
      this.name = info.name;
      this.servings = info.servings;
      this.ingredients = info.ingredients;
      this.time = info.time;
      this.description = info.description;
      this.appliance = info.appliance;
      this.ustensils = info.ustensils;
    }
}

// getHomePageInfo(){
//     listIngredients = this.ingredients;

// }