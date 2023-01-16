import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../firebase";
const GetDataLeaderBoard = async () => {
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
};
export default GetDataLeaderBoard;
