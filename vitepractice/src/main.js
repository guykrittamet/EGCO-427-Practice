import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import firebase from 'firebase'

let app
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDsGsSgbCA0RUnxJ1tuK9czqjSXPa8lYGU",
    authDomain: "egco427-dbc4b.firebaseapp.com",
    databaseURL: "https://egco427-dbc4b-default-rtdb.firebaseio.com",
    projectId: "egco427-dbc4b",
    storageBucket: "egco427-dbc4b.appspot.com",
    messagingSenderId: "628831534589",
    appId: "1:628831534589:web:45406b6e168fb2e0106d94",
    measurementId: "G-KDP0SRL17E"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user)=>{
    if(!app){
        app = createApp(App).use(router).mount('#app')
    }
})

  