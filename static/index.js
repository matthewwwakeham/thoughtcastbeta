import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";

import {
    getAuth,
    signInWithEmailAndPassword,
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
const auth = getAuth(app);

const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const signUpButton = document.querySelector("#signUpButton");
const signInButton = document.querySelector("#signInButton");

const userSignIn = async () => {
    const signInEmail = userEmail.value;
    const signInPassword = userPassword.value;
    signInWithEmailAndPassword(auth, signInEmail, signInPassword)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("You have signed in successfully!");
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + errorMessage)
        })
}

signInButton.addEventListener('click', userSignIn);