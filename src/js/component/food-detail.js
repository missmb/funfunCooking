import css from "bootstrap/dist/css/bootstrap.min.css";
// this is custom element
class FoodDetail extends HTMLElement {
    constructor() {
       super();
       this.shadowDOM = this.attachShadow({mode: "open"});
   }
     
     set foods(foodd) {
      this._foodd = foodd;
      this.render();
  }
   
  renderErrord(message) {
    this.shadowDOM.innerHTML = `
    <style>.placeholder {
           font-weight: lighter;
           color: rgba(0,0,0,0.5);
           -webkit-user-select: none;
           -moz-user-select: none;
           -ms-user-select: none;
           user-select: none;
       }
   </style>`;
    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
}
     render() {
         
         this.shadowDOM.innerHTML = `
         <style>
            ${css}
        </style>
        <div class="card" ">
         <img class="card-img-top" src="${this._food.strMealThumb}" alt="Fan Art">
         <div class="card-body text-center">
          <h2 class= "cart-title">${this._food.strMeal}</h2>
          <p>dgfggd</p>ss
          <p class="card-text"> ${this._food.strInstructions}</p>
            </div>
          </div>`;
}

}
  customElements.define("food-detail", FoodDetail);