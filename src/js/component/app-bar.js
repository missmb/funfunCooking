import css from "bootstrap/dist/css/bootstrap.min.css";

class AppBar extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

      connectedCallback(){
        this.render()
    }
  
    
    render() {
        this.shadowRoot.innerHTML = `
       <style>
            ${css};
            .bg-cover {
              background-color: green;
          }
          
        </style>
        <div class="jumbotron text-center bg-cover">
          <h1>DELICIOUS FOOD</h1>
          <p>find delicious daily food with one click</p>
        </div>`
    }
 }

 customElements.define("app-bar", AppBar)