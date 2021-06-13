import Firebase from 'firebase';

/**
 * Firebase configuration
 */
const config = {
    apiKey: "AIzaSyB_rObsT9i0qM8dkhmnOLiRc0ZY00ma9bc",
    authDomain: "my-test-geekeur.firebaseapp.com",
    projectId: "my-test-geekeur",
    storageBucket: "my-test-geekeur.appspot.com",
    messagingSenderId: "279794824954",
    appId: "1:279794824954:web:a0aecfd787c23804443b43"
};

/**
* Initialize Firebase
 */


 Firebase.initializeApp(config);
    
const db = Firebase.firestore();

export { db };
export default Firebase;