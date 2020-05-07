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

     set foods(foodd) {
      this._foodd = foodd;
      this.render();
  }
   
     connectedCallback(){
      this.render();
  }
  //menyediakan setter. Gunanya untuk menetapkan fungsi event agar dapat mudah diterapkan dari luar class SearchBar.
  set clickEventD(event) {
      this._clickEventD =event;
      this.render();
  }

  //fungsi getter yang mengembalikan nilai value dari elemen <input>
  get textContent() {
      //penerapan shadowDOM
      // function myFunction() {
      //   var x = document.getElementById("myBtn").textContent;
      //   document.getElementById("demo").innerHTML = x;  
      // }
      return this.shadowDOM.querySelector("#idElement").text();
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
          <button id="detailButtonElement" class="btn btn-primary rounded-pill btn-block shadow-sm" type="submit">Detail</button>
          <p id="idElement">${this._food.idMeal}</p>
          </div>
          </div>`;
          this.shadowDOM.querySelector("#detailButtonElement").addEventListener("click", this._clickEventD)
}

}
  customElements.define("food-item", FoodItem);