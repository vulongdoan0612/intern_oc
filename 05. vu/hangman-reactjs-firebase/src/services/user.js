import {
  where,
  query,
  collection,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "../firebase";

export const getAllUsers = async () => {
  const q = query(collection(db, "leaderBoard"));
  const queryData = await getDocs(q);
  const data = [];
  queryData.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
};
export const getToken = async () => {
  const q = query(
    collection(db, "leaderBoard"),
    where("email", "==", `${auth.currentUser?.email}`)
  );
  const queryData = await getDocs(q);
  const data = [];
  queryData.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
};

export const updateCreditBuy = async (user, moneyCurrent) => {
  const docRef = doc(db, "leaderBoard", user?.id);
  const daTa = {
    money: moneyCurrent + 50,
  };
  try {
    await updateDoc(docRef, daTa);
  } catch (e) {
    console.log(e);
  }
};

export const updateCreditBuy100 = async (user, moneyCurrent) => {
  const docRef = doc(db, "leaderBoard", user?.id);
  const daTa = {
    money: moneyCurrent + 100,
  };
  try {
    await updateDoc(docRef, daTa);
  } catch (e) {
    console.log(e);
  }
};

export const updateCreditBuy200 = async (user, moneyCurrent) => {
  const docRef = doc(db, "leaderBoard", user?.id);
  const daTa = {
    money: moneyCurrent + 200,
  };
  try {
    await updateDoc(docRef, daTa);
  } catch (e) {
    console.log(e);
  }
};

export const updateToken = async (user, token, inputMoney) => {
  const docRef = doc(db, "leaderBoard", user?.id);
  const daTa = {
    tokenLocal: Number(token) + Number(inputMoney),
  };
  try {
    if (user) {
      await updateDoc(docRef, daTa);
    }
  } catch (e) {
    console.log(e);
  }
};

export const updateMoney = async (user, money) => {
  const docRef = doc(db, "leaderBoard", user?.id);
  const daTa = {
    money: money,
  };
  try {
    if (user) {
      await updateDoc(docRef, daTa);
    }
  } catch (e) {
    console.log(e);
  }
};

export const updateDataUser = async (data, user) => {
  const docRef = doc(db, "leaderBoard", user?.id);
  if (user) {
    await updateDoc(docRef, {
      money: data.money,
      tokenLocal: data.tokenLocal,
    });
  }
};

export const updateHighScore = async (user, highScore) => {
  const docRef = doc(db, "leaderBoard", user?.id);
  const daTa = {
    highScoreLocal: highScore,
  };
  await updateDoc(docRef, daTa);
};

export const changeTokenAfterGame = async (user, tokenLocal) => {
  const docRef = doc(db, "leaderBoard", user?.id);
  const daTa = {
    tokenLocal: tokenLocal,
  };
  try {
    await updateDoc(docRef, daTa);
  } catch (e) {
    console.log(e);
  }
};
