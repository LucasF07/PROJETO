import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';

import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyAWgx6nhLkj3_b29ABD5bptm1T9TZNd85M",
  authDomain: "letmeask-26de7.firebaseapp.com",
  databaseURL: "https://letmeask-26de7-default-rtdb.firebaseio.com",
  projectId: "letmeask-26de7",
  storageBucket: "letmeask-26de7.appspot.com",
  messagingSenderId: "474783895073",
  appId: "1:474783895073:web:4db09ee510c08bc4401d60",
  measurementId: "G-CTEPV9VVS5"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, firebaseConfig, auth, database }