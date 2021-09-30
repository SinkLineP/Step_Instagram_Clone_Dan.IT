import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCihRSsAdSxhajYWnUg-ZECoHF1YCDqRHc',
  authDomain: 'instagram-clone-1b3ac.firebaseapp.com',
  projectId: 'instagram-clone-1b3ac',
  storageBucket: 'instagram-clone-1b3ac.appspot.com',
  messagingSenderId: '235832648052',
  appId: '1:235832648052:web:ca1dbca3d33eb05f9f0c21'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
