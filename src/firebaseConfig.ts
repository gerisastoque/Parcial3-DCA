
const firebase = require('firebase/app');
import 'firebase/firestore';
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
const { collection, addDoc, getDocs } = require('firebase/firestore');
import { Product } from './types/produtc';
const firebaseConfig = {
	apiKey: 'AIzaSyB5Ufe3t7fGcP8XO9bBFYvdrH_ccaUV7o0',
	authDomain: 'labs-cc48e.firebaseapp.com',
	projectId: 'labs-cc48e',
	storageBucket: 'labs-cc48e.appspot.com',
	messagingSenderId: '576494088419',
	appId: '1:576494088419:web:15955e2e0b96971ab115d6',
	measurementId: 'G-X7LFMKJMGE',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const addProduct = async (FormData: Omit<Product, 'id'>) => {
	console.log('form', FormData);
	try {
		const docRef = await addDoc(collection(db, 'productcAdded'), FormData);
		console.log('Document written with ID: ', docRef.id);
	} catch (e) {
		console.error('Error adding document: ', e);
	}
};

export const getProduct = async () => {
	const querySnapshot = await getDocs(collection(db, 'musicAdded'));
	const Arraysongs: Array<Product> = [];

	querySnapshot.forEach((doc: any) => {
		const data = doc.data() as any;
		Arraysongs.push({ id: doc.id, ...data });
	});
	console.log('get', Arraysongs);
	return Arraysongs;
};