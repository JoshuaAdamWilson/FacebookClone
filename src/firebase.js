// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCD5w9R7dx5x5GRY23Vw9FD8IHzfWhdOyA",
  authDomain: "facebook-clone-5a681.firebaseapp.com",
  projectId: "facebook-clone-5a681",
  storageBucket: "facebook-clone-5a681.appspot.com",
  messagingSenderId: "441506748288",
  appId: "1:441506748288:web:49ce4e096edf33fb3f1365",
  measurementId: "G-F7WSXB34XZ"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth =firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider }
  export default db