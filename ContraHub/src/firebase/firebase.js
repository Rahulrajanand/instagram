import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
	apiKey: "AIzaSyAXBTwPEOp_WvOQsWPLdnYb6KdB-2WSOpI",
	authDomain: "insta-clone-8eb8f.firebaseapp.com",
	projectId: "insta-clone-8eb8f",
	storageBucket: "insta-clone-8eb8f.appspot.com",
	messagingSenderId: "38206809398",
	appId: "1:38206809398:web:730c99e13c5b680c01ff97",
	measurementId: "G-HV23S8VMQP",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };