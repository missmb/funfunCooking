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
        
          <div class="row">
        <div class="col s12 m12">
            <div class="card">
                <div class="card-image">
                <img class="card-img-top" src="${this._food.strMealThumb}
                </div>
                <div class="card-content">
                    <div class="flex-column">
                        <div class="flex-row">
                            <div>
                            <img class="card-img-top" src="${this._food.strMealThumb}
                            </div>
                            <div>
                                <h5>${this._food.strMeal}</h5>
                            <h6>${this._food.strMeal}</h6>
                            <p>${this._food.strMeal}</p>
                            <br>
                            <h6>Popularity</h6>
                            <div>
                                <span><h5>${this._food.strMeal}</h5> from <strong>${this._food.strMeal} votes</strong> </span>
                            </div>
                            <br>
                            <h6>Duration</h6> 
                            <h5>${this._food.strMeal} Minutes</h5>
                            </div>
                        </div>
                        <div>
                            <h5>Overview</h5>
                            <p id="movie-description">${this._food.strInstructions}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
}

}
  customElements.define("food-detail", FoodDetail);