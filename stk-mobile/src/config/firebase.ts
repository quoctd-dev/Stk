import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCdYAyfUK5GxtlZjtCSRvrI2GpFbr_4LR4",
    authDomain: "songtietkiem.firebaseapp.com",
    projectId: "songtietkiem",
    storageBucket: "songtietkiem.firebasestorage.app",
    messagingSenderId: "946723332698",
    appId: "1:946723332698:web:b10de73021fe71a6ce2e63",
    measurementId: "G-351X9GFD4R"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
