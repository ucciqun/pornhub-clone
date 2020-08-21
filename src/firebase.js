import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBlKZN8Gx3ce-TAyWtKu5pkrVQVXAoUhAo",
  authDomain: "pornhub-clone.firebaseapp.com",
  databaseURL: "https://pornhub-clone.firebaseio.com",
  projectId: "pornhub-clone",
  storageBucket: "pornhub-clone.appspot.com",
  messagingSenderId: "410908802191",
  appId: "1:410908802191:web:64d6bf11994dcab50284fa"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default app;
