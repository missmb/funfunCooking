import css from "bootstrap/dist/css/bootstrap.min.css";

class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }
   
    //menyediakan setter. Gunanya untuk menetapkan fungsi event agar dapat mudah diterapkan dari luar class SearchBar.
    set clickEvent(event) {
        this._clickEvent =event;
        this.render();
    }

    //fungsi getter yang mengembalikan nilai value dari elemen <input>
    get value() {
        //penerapan shadowDOM
        // return this.querySelector("#searchElement").value;
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        ${css}
    </style>
    <div class="row mb-4">
    
        <div id="search-container" class="search-container form-group col-md-9">
            <input id="searchElement" class="form-control form-control-underlined" type="text" placeholder="Search food" aria-label="Search">
            </div>
           <div class="form-group col-md-3">
  <button id="searchButtonElement" class="btn btn-primary rounded-pill btn-block shadow-sm" type="submit">Search</button>
        </div>
        </div>
        `;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
 }

 customElements.define("search-bar", SearchBar);