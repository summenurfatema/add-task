/// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDUCN_i-xKUsSq4ly8D45lYOnb5CIJQAkU",
    authDomain: "daily-task-92024.firebaseapp.com",
    projectId: "daily-task-92024",
    storageBucket: "daily-task-92024.appspot.com",
    messagingSenderId: "418252838451",
    appId: "1:418252838451:web:34e1e41bb5d2d2921e3546"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app