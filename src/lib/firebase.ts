import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// TODO: Replace with your Firebase config
const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const saveContactSubmission = async (data: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}) => {
  const docRef = await addDoc(collection(db, "contact_submissions"), {
    ...data,
    submittedAt: serverTimestamp(),
    status: "new",
  });
  return docRef.id;
};

export { db };
