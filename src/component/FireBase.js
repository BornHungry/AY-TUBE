import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABVO8VCjhbmmqd0Evaglhd8ykUJGsf_jg",
  authDomain: "aytube-34def.firebaseapp.com",
  projectId: "aytube-34def",
  storageBucket: "aytube-34def.appspot.com",
  messagingSenderId: "900682038472",
  appId: "1:900682038472:web:d4edd773c898b2612739fd",
  measurementId: "G-06JLSCYQ7F",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

// export const Register = async (email, password) => {
//   try {
//     const { user } = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     return user;
//   } catch (error) {
//     toast.error("Wrong");
//   }
// };
// export const login = async (email, password) => {
//   try {
//     const { user } = await signInWithEmailAndPassword(auth, email, password);
//     return user;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// export const logout = async () => {
//   try {
//     await signOut(auth);
//     return true;
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export { auth, provider };
