import { Product } from '../../types/produtc';
import { getProduct } from '../../firebaseConfig';


const FormData: Omit<Product, 'id'> = {
	image: '',
	name: '',
	artist: '',
	price: '',
	onStock: '',
};

class Vinyl extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	async render() {
		const css = this.ownerDocument.createElement('style');
		this.shadowRoot?.appendChild(css);

		const Vinyl = await getProduct();
		Vinyl.forEach((song: Product) => {
			const container = this.ownerDocument.createElement('section');
			const image = this.ownerDocument.createElement('img');
			image.innerText = song.image;
			container.appendChild(image);

			const name = this.ownerDocument.createElement('H1');
			name.innerText = song.name;
			container.appendChild(name);

			const artist = this.ownerDocument.createElement('p');
			artist.innerText = song.artist;
			container.appendChild(artist);

			const price = this.ownerDocument.createElement('p');
			price.innerText = song.price;
			container.appendChild(price);

			const onStock = this.ownerDocument.createElement('p');
			onStock.innerText = song.onStock;
			container.appendChild(onStock);

			this.shadowRoot?.appendChild(container);
		});
	}
}

customElements.define('app-vinyl', Vinyl);
export default Vinyl;