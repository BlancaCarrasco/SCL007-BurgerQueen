import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyC5Nrb7aOmz67u1JAX1pwFwJMNfol1Wdmc",
  authDomain: "burgerqueen-11ae8.firebaseapp.com",
  databaseURL: "https://burgerqueen-11ae8.firebaseio.com",
  projectId: "burgerqueen-11ae8",
  storageBucket: "burgerqueen-11ae8.appspot.com",
  messagingSenderId: "17580590238"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
