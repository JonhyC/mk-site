// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Config do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB-kjGlsQFYdPrZ5LUnNpl--pagrIfVfi4",
  authDomain: "mk-site-8140d.firebaseapp.com",
  projectId: "mk-site-8140d",
  storageBucket: "mk-site-8140d.firebasestorage.app",
  messagingSenderId: "526637494117",
  appId: "1:526637494117:web:07ead2e05b8be00db3fb8c"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Instâncias
const db = getFirestore(app);
const auth = getAuth(app);

// ✅ Exporta como módulo
export { db, auth };