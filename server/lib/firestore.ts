import {
  collection,
  getDocs,
  setDoc,
  addDoc,
  deleteDoc,
  doc,
  where,query
} from "firebase/firestore";

import { firestoreDb } from "./firebase";

export const queryByCollection = async (col: string) => {
  // @ts-ignore
  const colRef = collection(firestoreDb, col);

  const snapshot = await getDocs(colRef);

  const docs = Array.from(snapshot.docs).map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });

  return docs;
};

export const set = async (col: string, document: Object) => {
  await setDoc(doc(collection(firestoreDb, col)), document, { merge: true });
};

export const add = async (col: string, document: Object) => {
  // @ts-ignore
  const colRef = collection(firestoreDb, col);

  const docRef = await addDoc(colRef, document);

  return docRef;
};

export const del = async (col:string, id : string) => {
  const docRef = doc(firestoreDb, col, id);
  return await deleteDoc(docRef);
};
export const readByBId = async (col: string, bId: string) => {
  const colRef = collection(firestoreDb, col);
  const q = query(colRef, where('b_id', '==', bId)); // Adjusted to correctly filter by b_id
  const snapshot = await getDocs(q);

  const docs = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return docs;
};