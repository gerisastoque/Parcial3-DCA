import { Nav, Vinyl } from "../../components/export";
import styles from './home.css'

class Home extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {

        if (this.shadowRoot) {
			this.shadowRoot.innerHTML += `
            <style>${styles}</style>
        `;
        const nav = this.ownerDocument.createElement('app-nav') as Nav ;
        this.shadowRoot?.appendChild(nav);

        const vinyls = this.ownerDocument.createElement('app-vinyl') as Vinyl ;
        this.shadowRoot?.appendChild(vinyls);
        

    }
}}

customElements.define('app-home', Home)

