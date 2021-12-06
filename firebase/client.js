
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFb74ROEbq2aSWUvxBJY9QM9FCQlWFhHs",
  authDomain: "tweetthis-5718a.firebaseapp.com",
  projectId: "tweetthis-5718a",
  storageBucket: "tweetthis-5718a.appspot.com",
  messagingSenderId: "284718547531",
  appId: "1:284718547531:web:769e7540625b79572143ce",
  measurementId: "G-V89KH4WSQ8",
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);


const mapUserFromFirebaseToUser = (user) => {
  const { email, displayName, photoURL } = user;

  return {
    avatar: photoURL,
    username: displayName,
    email,
  };
};

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = mapUserFromFirebaseToUser(user);
    onChange(normalizedUser);
  });
};

export const loginWithGitHub = () => {

  const githubProvider = new firebase.auth.GithubAuthProvider();
  const popup = firebase.auth().signInWithPopup(githubProvider);
  return popup;
};
