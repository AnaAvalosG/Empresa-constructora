
import { initializeApp } from "firebase/app";
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnh0AxSsVJEVvAHEZzRbRdp05UVqucwko",
  authDomain: "recoconstrucciones-2025.firebaseapp.com",
  projectId: "recoconstrucciones-2025",
  storageBucket: "recoconstrucciones-2025.firebasestorage.app",
  messagingSenderId: "108384908788",
  appId: "1:108384908788:web:2ba329f8ecdb4f41dbf5a1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)
const db = getFirestore(app);

export { analytics, app, db };