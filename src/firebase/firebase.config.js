// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI1-CXEjquYlpk2jFAonKgTAgdyPWxp5U",
  authDomain: "event-wizard-shahin.firebaseapp.com",
  projectId: "event-wizard-shahin",
  storageBucket: "event-wizard-shahin.appspot.com",
  messagingSenderId: "551368130127",
  appId: "1:551368130127:web:ba52b48cf041d934aab43a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;