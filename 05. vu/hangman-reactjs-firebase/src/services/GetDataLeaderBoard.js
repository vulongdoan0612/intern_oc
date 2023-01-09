import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { db } from "../firebase";
import { gameScores } from "../reducer/gamePlayReducer";
const GetDataLeaderBoard = async () => {
  const dispatch = useDispatch();
  const q = query(
    collection(db, "leaderBoard"),
    orderBy("highScoreLocal", "desc"),
    limit(10)
  );
  const queryData = await getDocs(q);
  const data = [];
  queryData.forEach((doc) => {
    data.push(doc.data());
  });
  dispatch(gameScores(data));
};
export default GetDataLeaderBoard;
