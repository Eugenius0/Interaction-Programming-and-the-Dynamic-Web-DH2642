import { auth } from "./firebaseConfig";

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  updatePassword,
  User,
} from "firebase/auth";
import { Model } from "./model/Model";

export function doCreateUserWithEmailAndPassword(
  email: string,
  password: string
) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function doSignInWithEmailAndPassword(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function doSignInWithGoogle() {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
}

export function doSignOut() {
  return auth.signOut();
}

export function doPasswordReset(email: string) {
  return sendPasswordResetEmail(auth, email);
}

export function doPasswordChange(password: string) {
  const currentUser = auth.currentUser;
  if (!currentUser) {
    // Handle the case where currentUser is null
    throw new Error("No user is currently signed in.");
  }
  return updatePassword(currentUser, password);
}

export const doSendEmailVerfification = () => {
  const currentUser = auth.currentUser;
  if (!currentUser) {
    // Handle the case where currentUser is null
    throw new Error("No user is currently signed in.");
  }
  return sendEmailVerification(currentUser, {
    url: `${window.location.origin}/home`,
  });
};
