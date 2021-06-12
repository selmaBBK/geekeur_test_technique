import app from 'firebase/app';

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

class Firebase {
    constructor() {
        app.initializeApp(config)
    }
}
const db = firebase.firestore();

export { db };

export default Firebase;