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
        <div class="card" style="width: 18rem;">
         <img class="card-img-top" src="${this._food.strMealThumb}" alt="Fan Art">
         <div class="card-body text-center">
          <h2 class= "cart-title">${this._food.strMeal}</h2>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
          </div>`;
}
}
  customElements.define("food-item", FoodItem);