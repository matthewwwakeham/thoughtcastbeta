import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile
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

const displayNameInput = document.querySelector("#displayName");
const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const confirmPassword = document.querySelector("#confirmPassword");
const signUpButton = document.querySelector("#signUpButton");

const userSignUp = async () => {
    const signUpEmail = userEmail.value;
    const signUpPassword = userPassword.value;
    const confirmPasswordValue = confirmPassword.value;

    if (signUpPassword !== confirmPasswordValue) {
        alert("Passwords do not match.");
        return;
    }

    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
        .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, { displayName: displayNameInput.value });
            console.log(user);
            alert("Your account has been created!");
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + errorMessage)
        })
}

signUpButton.addEventListener('click', userSignUp);