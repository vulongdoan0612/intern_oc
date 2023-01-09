import {
  collection,
  setDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase-config";
export const addDataUser = async (userId, email, credit, token, highscore) => {
  try {
    let docRef = await setDoc(doc(db, "users", userId), {
      userId,
      email,
      credit,
      token,
      highscore,
    });
    return docRef;
  } catch (error) {
    console.error(error);
  }
};

export const getOneUserByUid = async (uid) => {
  const docRef = await doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    localStorage.setItem("token", docSnap?.data()?.token);
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    return;
  }
};

export const getAllDataUser = async () => {
  const listData = [];
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    listData.push(doc.data());
  });
  return listData;
};

export const updateDataUser = async (uid, data) => {
  await updateDoc(doc(db, "users", uid), {
    credit: data.credit,
    highscore: data.highscore,
    token: data.token,
  });
};
