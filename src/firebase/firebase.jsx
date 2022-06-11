import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAaEgSxvyTPHslrBd2KVf710jxX25kWKwU",
  authDomain: "handball-gear.firebaseapp.com",
  projectId: "handball-gear",
  storageBucket: "handball-gear.appspot.com",
  messagingSenderId: "542667363261",
  appId: "1:542667363261:web:2a3b0cf330cfb36b0ff8d4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)






