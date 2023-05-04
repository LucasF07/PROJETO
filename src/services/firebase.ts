import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';

import 'firebase/compat/database';


const firebaseConfig = {
  apiKey: "AIzaSyDbwgUIPDJKQMFbgAr7K9VTZfA7Eb9ja2Y",
  authDomain: "projeto-js-dc398.firebaseapp.com",
  databaseURL: "https://projeto-js-dc398-default-rtdb.firebaseio.com",
  projectId: "projeto-js-dc398",
  storageBucket: "projeto-js-dc398.appspot.com",
  messagingSenderId: "843274748351",
  appId: "1:843274748351:web:6e720cfbb36d836565a10a",
  measurementId: "G-YJY7WK8VS4"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, firebaseConfig, auth, database }