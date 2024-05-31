import { Product } from "../../types/produtc";
import { addProduct } from "../../firebaseConfig";
import { Vinyl } from "../export";

const FormData: Omit<Product, 'id'> = {
	image: '',
	name: '',
	artist: '',
	price: '',
	onStock: '',
};

class Card extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}
	changeimage(e: any) {
		FormData.image = e?.target?.value;
	}
	changeName(e: any) {
		FormData.name = e?.target?.value;
	}
	changeArtist(e: any) {
		FormData.artist = e?.target?.value;
	}
	changePrice(e: any) {
		FormData.price = e?.target?.value;
	}
	changeOnStock(e: any) {
		FormData.onStock = e?.target?.value;
	}

	submitForm() {
		addProduct(FormData);
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = ``;

			const css = this.ownerDocument.createElement('style');
			this.shadowRoot?.appendChild(css);

			const title = this.ownerDocument.createElement('h1');
			title.innerText = 'Add New Product';
			this.shadowRoot?.appendChild(title);

            const name = this.ownerDocument.createElement('input');
			name.placeholder = 'name';
			name.addEventListener('change', this.changeName);
			this.shadowRoot?.appendChild(name);

			const artist = this.ownerDocument.createElement('input');
			artist.placeholder = 'artist';
			artist.addEventListener('change', this.changeArtist);
			this.shadowRoot?.appendChild(artist);

			const price = this.ownerDocument.createElement('input');
			price.placeholder = 'price';
			price.addEventListener('change', this.changePrice);
			this.shadowRoot?.appendChild(price);

			const onStock = this.ownerDocument.createElement('input');
			onStock.placeholder = 'onStock';
			onStock.addEventListener('change', this.changeOnStock);
			this.shadowRoot?.appendChild(onStock);

            const image = this.ownerDocument.createElement('input');
			image.type = 'file';
			image.addEventListener('change', this.changeimage);
			this.shadowRoot?.appendChild(image);

            
			const save = this.ownerDocument.createElement('button');
			save.innerText = 'ADD product';
			save.addEventListener('click', this.submitForm);
			this.shadowRoot?.appendChild(save);

			const vinyl = this.ownerDocument.createElement('app-vinyl') as Vinyl;
			this.shadowRoot?.appendChild(vinyl);
		}
	}
}

customElements.define('app-newVinyl', Card);
export default Card;