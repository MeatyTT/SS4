import ComicContainer from "./Comic.js";

const $template = document.createElement("template");
$template.innerHTML = `
    <div class="comic-list">

    </div>
`;
export default class ComicList extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$list= this.querySelector('.comic-list');
    }
    static get observedAttributes() {
        return ['comic'];
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == 'comic'){
            // console.log(newValue);
            let data=JSON.parse(newValue);
            console.log(data);
            for(let comicData of data){
                let $comicContainer = new ComicContainer();
                $comicContainer.setAttribute("id", comicData.id);
                $comicContainer.setAttribute("name", comicData.name);
                $comicContainer.setAttribute("original-name", comicData.originalName);
                $comicContainer.setAttribute("image", comicData.image);
                $comicContainer.setAttribute("type", comicData.type);
                $comicContainer.setAttribute("duration", comicData.duration);

                this.$list.appendChild($comicContainer);
            }
        }
    }
}
window.customElements.define("comic-list", ComicList);