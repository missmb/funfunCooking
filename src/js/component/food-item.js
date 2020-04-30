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
         * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
      }
         :host  {
          display: inline-block;
          width: 30%;
          padding:5px;
          margin-bottom: 18px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          overflow: hidden;
       }
        
       .fan-art-food {
          width: 100%;
          max-height: 160px;
          object-fit: cover;
          object-position: center;
       }
       .food-info {
          padding: 24px;
      }
      
      .food-info > h2 {
          font-weight: lighter;
      }
      
         </style>
         <img class="fan-art-food" src="${this._food.strMealThumb}" alt="Fan Art">
           <div class="food-info">
              <h2>${this._food.strMeal}</h2>
           </div>`;
     }
  }
 
  customElements.define("food-item", FoodItem);