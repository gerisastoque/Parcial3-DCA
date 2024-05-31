import styles from './nav.css'


export class Nav extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = '';

			this.shadowRoot.innerHTML += `
              <style>${styles}</style>
              <nav class="menu-bar">
                  <div class="title">
                  <h1> Vinyl Srore" </h1>
                  </div>
                  <p> home </p>
                  <p> Add New Product </p>
                  <p> Modify Product </p>
              </nav>`;}

            
        }}

customElements.define('app-nav', Nav);
export default Nav;
