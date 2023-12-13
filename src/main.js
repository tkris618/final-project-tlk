import 'bootstrap/dist/css/bootstrap.css'
import '../src/assets/scss/app.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import {initializeApp} from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyDyq_8r8fMbQUa919fNy6uxOPXF_6V2yg0",
    authDomain: "fir-demo-d8000.firebaseapp.com",
    projectId: "fir-demo-d8000",
    storageBucket: "fir-demo-d8000.appspot.com",
    messagingSenderId: "190123843247",
    appId: "1:190123843247:web:8bcf14131e753fa72d3e5a",
    measurementId: "G-JJJLFP3C8S"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
initializeApp(firebaseConfig);
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
