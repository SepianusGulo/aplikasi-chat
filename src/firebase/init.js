import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyARjruJ5_Bd4apopSAu1NGUeM1Iqdzw8JI",
  authDomain: "vueaplikasicodingku.firebaseapp.com",
  databaseURL: "https://vueaplikasicodingku.firebaseio.com",
  projectId: "vueaplikasicodingku",
  storageBucket: "vueaplikasicodingku.appspot.com",
  messagingSenderId: "495949250219",
  appId: "1:495949250219:web:51469c8c49a4003573c1ee",
  measurementId: "G-7J1VQKX6K0"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

firebaseApp.firestore().settings({
  timestampsInSnapshots: true
})

export default firebaseApp.firestore();
