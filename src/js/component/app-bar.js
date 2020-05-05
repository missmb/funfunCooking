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
        this.shadowRoot.innerHTML = 
       `
       <style>
            ${css}
        </style>
        <p class="navbar-text">Signed in as Mark Otto</p>`
    }
 }
//  `
//         <style>
//            * {
//                margin: 0;
//                padding: 0;
//                box-sizing: border-box;
//            }
//            :host {
//                display: block;
//                width: 100%;
//                background-color: cornflowerblue;
//                color: white;
//                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
//            }
//            h2 {
//                padding: 16px;
//            }
//        </style>
//        <h2>food Finder</h2>`;
 
 customElements.define("app-bar", AppBar)