import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase";

const submit = async () => {
  await addDoc(collection(db, "leaderBoard"), {
    money: 100,
    highScoreLocal: 0,
    tokenLocal: 10,
    timestamp: serverTimestamp(),
    user: auth.currentUser.displayName,
    email: auth.currentUser.email,
    userImg: auth.currentUser.photoURL,
  });
};
export default submit;
