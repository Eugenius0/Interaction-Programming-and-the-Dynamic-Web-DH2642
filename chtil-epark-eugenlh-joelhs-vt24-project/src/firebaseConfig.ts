import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_WVxVapD528JzIfJ7OPJvRLCEMFrptZk",
  authDomain: "countryquiz-af24a.firebaseapp.com",
  databaseURL:
    "https://countryquiz-af24a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "countryquiz-af24a",
  storageBucket: "countryquiz-af24a.appspot.com",
  messagingSenderId: "121664811271",
  appId: "1:121664811271:web:5f8d6ef3f68614896895a2",
  measurementId: "G-8XS3512TQZ",
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
