import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase";

const submit = async (highScoreLocal, tokenLocal) => {
  await addDoc(collection(db, "leaderBoard"), {
    highScoreLocal: highScoreLocal,
    tokenLocal: tokenLocal,
    timestamp: serverTimestamp(),
    user: auth.currentUser.displayName,
    email: auth.currentUser.email,
    userImg: auth.currentUser.photoURL,
  });
};
export default submit;
