import { firebaseConfig } from "./firebaseInit";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, onSnapshot, collection, setDoc } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, doc, onSnapshot, collection, setDoc };
