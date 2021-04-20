const $template = document.createElement('template');
$template.innerHTML = `
<div class="comic-container">
    <div class="comic-image">
        <div class="comic-type ribbon">1</div>
    </div>
    <div class="comic-info"> 
        <div class="comic-name">2</div>
        <div class="comic-original-name">3</div>
        <div class="comic-duration">4</div>
    </div>
</div>
`;
export default class ComicContainer extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$name = this.querySelector('.comic-name');
        this.$originalName = this.querySelector('.comic-original-name');
        this.$image = this.querySelector('.comic-image');
        this.$type = this.querySelector('.comic-type');
        this.$duration = this.querySelector('.comic-duration');
    }
    static get observedAttributes() {
        return ["name", "original-name", "type", "image", "duration"];
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        // console.log("Thuộc tính "+ attrName + ": " + newValue);
        if (attrName == "name") {
            this.$name.innerHTML = newValue;
        } else if (attrName == "original-name") {
            this.$originalName.innerHTML = newValue;
        } else if (attrName == "type") {
            this.$type.innerHTML = newValue;
        } else if (attrName == "image") {
            this.$image.style.backgroundImage = `url('${newValue}')`;
        } else if (attrName == "duration") {
            this.$duration.innerHTML = newValue + " phút";
        }
    }
}

window.customElements.define('comic-container', ComicContainer);