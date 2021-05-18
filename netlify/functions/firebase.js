const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyAbhJjoSw4LT1nbMxGUYwVOzrRBD48sAGE",
  authDomain: "kiei-451-2eaef.firebaseapp.com",
  projectId: "kiei-451-2eaef",
  storageBucket: "kiei-451-2eaef.appspot.com",
  messagingSenderId: "299551643698",
  appId: "1:299551643698:web:cb3dcb64a82d477db6442b"
} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase