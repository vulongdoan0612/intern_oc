import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  where,
} from "firebase/firestore";
import { useDispatch } from "react-redux";
import { auth, db } from "../firebase";
import { gameScores, gameToken } from "../reducer/gamePlayReducer";
const GetToken = async () => {
  const dispatch = useDispatch();
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
  dispatch(gameToken(data.token));
};
export default GetToken;
