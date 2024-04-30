import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";

import {
    getAuth, sendPasswordResetEmail
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
const resetButton = document.querySelector("#resetButton");

const resetPassword = async () => {
  const resetEmail = userEmail.value;
  try {
    await sendPasswordResetEmail(auth, resetEmail);
    alert("Please check your email for instructions on resetting your password.");
    window.location.href = "index.html";
  } catch (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode + " " + errorMessage);
  }
};

resetButton.addEventListener("click", resetPassword);
