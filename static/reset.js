import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";

import {
    getAuth,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyC0S-8Wkjd_fXWmxE8eI27YQUrLutQoCTM",
    authDomain: "thoughtcast-5ca30.firebaseapp.com",
    projectId: "thoughtcast-5ca30",
    storageBucket: "thoughtcast-5ca30.appspot.com",
    messagingSenderId: "41273661048",
    appId: "1:41273661048:web:df2b8420c11546762bff8d",
  };

const app = initializeApp(firebaseConfig);

const resetForm = document.getElementById('resetForm');

resetForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;

    firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            alert('Password reset email sent. Check your inbox.');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
});