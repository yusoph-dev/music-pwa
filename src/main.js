import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
// import { initializeApp } from "firebase-app";
// const firebaseConfig = {
//     apiKey: "AIzaSyByD_iwseVCkYfSTQg2fOqhXyFmb61Mohc",
//     authDomain: "pwa-musicapp.firebaseapp.com",
//     projectId: "pwa-musicapp",
//     storageBucket: "pwa-musicapp.appspot.com",
//     messagingSenderId: "420595287715",
//     appId: "1:420595287715:web:95a5ad8e05abde1c7aa116"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
createApp(App).mount('#app')
