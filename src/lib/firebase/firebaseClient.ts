// Lazy-loaded Firebase initialization for better performance
import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBUFgM77hnwbKlrpRNHfeXd7K4o5dnwMs",
  authDomain: "portfolio-12cb3.firebaseapp.com",
  projectId: "portfolio-12cb3",
  storageBucket: "portfolio-12cb3.firebasestorage.app",
  messagingSenderId: "327678539765",
  appId: "1:327678539765:web:3aec9c07299dd50b1692bc"
};

// Lazy initialization - only initialize when needed
let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let db: Firestore | null = null;

const getApp = (): FirebaseApp => {
  if (!app) {
    app = initializeApp(firebaseConfig);
  }
  return app;
};

export const getAuthInstance = (): Auth => {
  if (!auth) {
    auth = getAuth(getApp());
  }
  return auth;
};

export const getDbInstance = (): Firestore => {
  if (!db) {
    db = getFirestore(getApp());
  }
  return db;
};

// For backward compatibility
export { getAuthInstance as auth, getDbInstance as db };