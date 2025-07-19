// lib/firebase.ts

import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyBtuggD52GPRIbMkUavly-98Z3DrwvEcPc",
  authDomain: "serbot-install.firebaseapp.com",
  databaseURL: "https://serbot-install-default-rtdb.firebaseio.com",
  projectId: "serbot-install",
  storageBucket: "serbot-install.appspot.com", // ← صححتها من ".firebasestorage.app"
  messagingSenderId: "1085972177850",
  appId: "1:1085972177850:web:8e98e300b468e042a83383"
}

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)

export { db }
