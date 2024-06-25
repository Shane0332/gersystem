import { Body } from "#build/components";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export const createUser = async (email: string, password: string) => {
  const auth = getAuth();
  try {
    const credentials = await createUserWithEmailAndPassword(auth, email, password);
    return credentials.user;
  } catch (error: any) {
    console.error(`Error during user creation: ${error.message}`);
    throw new Error(`User creation failed: ${error.message}`);
  }
};

export const signInUser = async (email: string, password: string) => {
  const auth = getAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error: any) {
    console.error(`Error during sign in: ${error.message}`);
    throw new Error(`Sign in failed: ${error.message}`);
  }
};

export const initUser = () => {
  const auth = getAuth();
  const firebaseUser =useFirebaseUser();

  firebaseUser.value=auth.currentUser
const userCookie = useCookie("userCookie")
  onAuthStateChanged(auth, (user) => {
    if (user) {
   
    } else {
      // console.log("No user is signed in");
      
    }
    firebaseUser.value=user
    userCookie.value = user
    $fetch('/api/auth', {
      method: 'POST',
      body: user 
    })
  });
};

export const signOutUser = async () => {
  const auth = getAuth();
  try {
    await signOut(auth);
    return "Signed out successfully";
  } catch (error: any) {
    console.error(`Error during sign out: ${error.message}`);
    throw new Error(`Sign out failed: ${error.message}`);
  }
};
