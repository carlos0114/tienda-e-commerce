
import { initializeApp } from "firebase/app"
import { collection, getDoc, getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDB8UIBchRKS1NxBvy0jeRw-0itGCwGmqI",
    authDomain: "my-app-con-reactjs.firebaseapp.com",
    projectId: "my-app-con-reactjs",
    storageBucket: "my-app-con-reactjs.appspot.com",
    messagingSenderId: "731285718749",
    appId: "1:731285718749:web:94f29aa33d6b5edfb9bd34"
  }
  export const app = initializeApp(firebaseConfig)
   const db = getFirestore ()


  export default db 
  // traer todos los items
  export const getItems = async () => {
    const items = await getDoc(collection(db, "items"))
    return items
  }