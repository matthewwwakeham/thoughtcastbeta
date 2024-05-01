import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";

import {
    getAuth,
    onAuthStateChanged,
    signOut
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

const secretContent = document.querySelector("#secretContent");
const signOutButton = document.querySelector("#signOutButton");
const profileButton = document.querySelector("#profileButton");
const dashButton = document.querySelector("#dashButton");

const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

const checkAuthState = () => {
    onAuthStateChanged(auth, user => {
        if(user) {
            secretContent.style.display = "block";
            const displayName = user.displayName;
            const userDisplayNameElement = document.getElementById('userDisplayName');
            userDisplayNameElement.innerText = `Welcome, ${displayName}!`;
        } else{
            secretContent.style.display = 'none';
        }
    });
};

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
  });

dashButton.addEventListener("click", () => {
    window.location.href = "dashboard.html";
  });

profileButton.addEventListener("click", () => {
    window.location.href = "profile.html";
  });

const userSignOut = async () => {
    await signOut(auth);
    alert("You have been signed out!")
    window.location.href = "index.html";
};

checkAuthState();

signOutButton.addEventListener('click', userSignOut);
