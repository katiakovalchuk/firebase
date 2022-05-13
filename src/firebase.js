import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCn86ggmfN6ewx7Y_2xy647QJHzEi379QA",
    authDomain: "fibebase-project.firebaseapp.com",
    projectId: "fibebase-project",
    storageBucket: "fibebase-project.appspot.com",
    messagingSenderId: "436518510145",
    appId: "1:436518510145:web:fc2fbaa2781df106d030c0",
    measurementId: "G-ZL6HQ2DX68"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
