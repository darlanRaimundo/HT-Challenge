import firebase from 'firebase'

export const firebaseConfig = {
  apiKey: "AIzaSyAK8fDpICXA9NvlAlL03DsjAVlfsUEhIGo",
  authDomain: "ht-challenge-25447.firebaseapp.com",
  projectId: "ht-challenge-25447",
  storageBucket: "ht-challenge-25447.appspot.com",
  messagingSenderId: "1082975029292",
  appId: "1:1082975029292:web:78249262e8da4438836989"
};

const app = firebase.initializeApp(firebaseConfig)

export const fbFirestore = app.firestore()
export const fbStorage = app.storage()


