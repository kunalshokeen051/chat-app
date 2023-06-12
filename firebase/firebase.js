import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBrhMOYwVPcpGaKgwmttbTilJ9ejtqW-Y",
  authDomain: "fir-chat-dc874.firebaseapp.com",
  projectId: "fir-chat-dc874",
  storageBucket: "fir-chat-dc874.appspot.com",
  messagingSenderId: "191581828687",
  appId: "1:191581828687:web:f9972ec2e70bea62761c3a"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);