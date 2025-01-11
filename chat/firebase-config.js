// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg6aBNq8EKOL5Ww3p6ZWiYuqmoAFn46QA",
  authDomain: "brainychat-2de0d.firebaseapp.com",
  databaseURL: "https://brainychat-2de0d-default-rtdb.firebaseio.com",
  projectId: "brainychat-2de0d",
  storageBucket: "brainychat-2de0d.firebasestorage.app",
  messagingSenderId: "194782342364",
  appId: "1:194782342364:web:1efec0343e1512b9231819",
  measurementId: "G-EH8NVLM5YL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);