import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { useState } from "react";
import { useDispatch } from "react-redux";

const firebaseConfig = {
  apiKey: "AIzaSyAL6O_IPPLlipnTXtp39IjIFswUB6VjlZM",
  authDomain: "movie-next-app-72dba.firebaseapp.com",
  projectId: "movie-next-app-72dba",
  storageBucket: "movie-next-app-72dba.appspot.com",
  messagingSenderId: "259528710123",
  appId: "1:259528710123:web:ce2628b91548e83f176bae",
};

const app = initializeApp(firebaseConfig);

// const dispatch = useDispatch();

// const [userData, setUserData] = useState();

const provider = new GoogleAuthProvider();

let user = "";

const auth = getAuth();
const loginFn = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

// const authProva = signInWithPopup();

// export default authProva;

export { user, loginFn };
