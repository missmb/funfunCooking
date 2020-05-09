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

//      set foods(foodd) {
//       this._foodd = foodd;
//       this.render();
//   }
   
//      connectedCallback(){
//       this.render();
//   }
//   set clickEventD(event) {
//       this._clickEventD =event;
//       this.render();
//   }
//   get textContent() {
//       return this.shadowDOM.querySelector("#lala").text();
//   }

// function reply_click()
// {
//     alert(event.srcElement.id);
// }

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
                            <img class="card-img-top"style="border-radius: 20px; height:30rem;"  src="${this._food.strMealThumb}" alt="Fan Art">
                            </div>
                            <div class="col-md-4" style="margin: 8px;">
                            <h4>Country</h4> 
                            ${this._food.strArea}
                            <br>
                            <h4>Category</h4> 
                            <p>${this._food.strCategory}</p>
                            <br>
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
        //   this.shadowDOM.querySelector("click-me").addEventListener("click", this._clickEventD)
}
 // <div class="card" style="width: 30rem;">
        //  <img class="card-img-top" src="${this._food.strMealThumb}" alt="Fan Art">
        //  <div class="card-body text-center">
        //   <h2 class= "cart-title">${this._food.strMeal}</h2>
        //   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //   <a href="detail.html" id="${this._food.idMeal}" class="btn btn-primary click-me" onClick="reply_click()">Detail</a>
        //   <p id="idElement">${this._food.idMeal}</p>
        //   </div>
        //   </div>
}
  customElements.define("food-item", FoodItem);