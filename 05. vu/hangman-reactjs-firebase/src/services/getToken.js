import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../firebase";
const GetToken = async () => {
  const q = query(
    collection(db, "leaderBoard"),
    where("email", "==", `${auth.currentUser.email}`)
  );
  const queryData = await getDocs(q);
  const data = [];
  queryData.forEach((doc) => {
    data.push(doc.data());
  });
  localStorage.setItem("token", data.token);
};
export default GetToken;
