import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from '@firebase/firestore';
const firebaseConfig = {
	apiKey: 'AIzaSyAP2yU30m1WdgR50clQK9H9p2yXHo2htkA',
	authDomain: 'fir-learn-bf97f.firebaseapp.com',
	projectId: 'fir-learn-bf97f',
	storageBucket: 'fir-learn-bf97f.appspot.com',
	messagingSenderId: '88019803499',
	appId: '1:88019803499:web:53afa68841a8a76d49c02e',
	measurementId: 'G-M503PQL3ZZ',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const analytics = getAnalytics(app);
