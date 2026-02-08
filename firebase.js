// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    onSnapshot,
    deleteDoc,
    doc,
    query,
    orderBy,
    updateDoc,
    where,
    getDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// Your web app's Firebase configuration
const firebaseConfig = { apiKey: "AIzaSyCcwljzUileGCkplxHjw3uDl3AxeRtQIaM", authDomain: "archora-43d00.firebaseapp.com", projectId: "archora-43d00", storageBucket: "archora-43d00.firebasestorage.app", messagingSenderId: "855985455967", appId: "1:855985455967:web:86638187206695ae1f2cea", measurementId: "G-LK4PTWKVVY" };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {
    db,
    collection,
    addDoc,
    getDocs,
    onSnapshot,
    deleteDoc,
    doc,
    query,
    orderBy,
    updateDoc,
    where,
    getDoc,
    storage,
    ref,
    uploadBytes,
    getDownloadURL
};
