import css from "bootstrap/dist/css/bootstrap.min.css";
// this is custom element
class FoodItem extends HTMLElement {
    constructor() {
       super();
       this.shadowDOM = this.attachShadow({mode: "open"});
   }
 
     set food(food) {
         this._food = food;
        this.render();
     }
     render() {
         
         this.shadowDOM.innerHTML = `
         <style>
            ${css}
        </style>
        <div class="card border-info text-center" style="margin-bottom : 10px;">
        <div class="card-header">
        <h2>${this._food.strMeal}</h2></div>
                <div class="card-body">
                        <div class="row no-gutters" style="margin: 8px;">
                            <div class="col-md-6">
                            <img class="card-img-top"style="border-radius: 20px; height:27rem;"  src="${this._food.strMealThumb}" alt="Fan Art">
                            </div>
                            <div class="col-md-4" style="margin: 8px;">
                            <h4>Country</h4> 
                            ${this._food.strArea}
                            <br>
                            <h4>Category</h4> 
                            <p>${this._food.strCategory}</p>
                            <h4>Ingredient</h4>
                            <div>
                                <p>${this._food.strIngredient1}</p>
                                <p>${this._food.strIngredient2}</p>
                                <p>${this._food.strIngredient3}</p>
                                <p>${this._food.strIngredient4}</p>
                                <p>${this._food.strIngredient5}</p>
                            </div>
                            </div>
                        </div>
                        <div style="margin: 20px;">
                            <h5 class="text-center">Overview</h5>
                            <p class="text-justify">${this._food.strInstructions}</p>
                        </div>
                    </div>
                    <div class="card-footer">
                    <a href="${this._food.strSource}" class="btn btn-primary click-me">Show More</a>
	                </div>
            </div>
        </div>
       `;
}
}
  customElements.define("food-item", FoodItem);