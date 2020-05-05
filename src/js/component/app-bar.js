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
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
                </ul>
            </div>
        </nav>`
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