// Create a class for the element
class CustomElement extends HTMLElement {
    // Specify observed attributes so that attributeChangedCallback will work
    static get observedAttributes() {
        return ["color", "size"];
    }
  
    constructor() {
        // Always call super first in constructor
        super();
    
        const div = document.createElement("div");
        const style = document.createElement("style");

        style.textContent = `div { width: 5em; height: 5em; background-color: #800; }`
        this.shadow = this.attachShadow({ mode: "open" });
        this.shadow.appendChild(style);
        this.shadow.appendChild(div);
    }
  
    connectedCallback() {
        console.log("Custom square element added to page.");
        //update();
    }
  
    disconnectedCallback() {
        console.log("Custom square element removed from page.");
    }
  
    adoptedCallback() {
        //console.log("Custom square element moved to new page.");
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
        console.log("Custom square element attributes changed.");
        //update();
    }

    update() {
        this.shadow.querySelector("style").textContent = `
        div {
          width: ${this.getAttribute("size")}em;
          height: ${this.getAttribute("size")}em;
          background-color: ${this.getAttribute("color")};
        }
      `;
    }
}