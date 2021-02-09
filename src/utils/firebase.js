import firebase from 'firebase/app';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyC3mQnpWam5wmwfZ6WOsKZO7h52qnBRMWo',
  authDomain: 'cwra-6b554.firebaseapp.com',
  projectId: 'cwra-6b554',
  storageBucket: 'cwra-6b554.appspot.com',
  messagingSenderId: '813594488892',
  appId: '1:813594488892:web:e8c1905b49440594731339',
  measurementId: 'G-8NMJ90DMWC'
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const { analytics } = firebase;

export { firebase, analytics };
