import React, { useEffect } from "react";
import Hangman from "../components/Hangman";
import RankBoard from "../components/RankBoard";
import ScoreBoard from "../components/ScoreBoard";
import TokenLeft from "../components/TokenLeft";
import classNames from "classnames/bind";
import styles from "../style/Home.module.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import Login from "../components/Login";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useStateContext } from "../ContextProvider";

const cx = classNames.bind(styles);

export default function Home() {

  const [user, loading, error] = useAuthState(auth);

  const GetAllUser = async () => {
    const data = [];
    const q = query(
      collection(db, "leaderBoard"),
      where("email", "==", `${auth.currentUser?.email}`)
    );
    const queryData = await getDocs(q);
    queryData.forEach((doc) => {
      data.push(doc.data());
    });
  };

  useEffect(() => {
    GetAllUser();
  }, [user]);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error ...</h1>;
  }

  return (
    <div>
      <div className={cx("wrapper")}>
        <div className={cx("leftScreen")}>
          <ScoreBoard></ScoreBoard>
          {user ? <Hangman></Hangman> : <Login></Login>}
        </div>
        <div
          className={cx("rightScreen")}
          style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        >
          <TokenLeft></TokenLeft>
          <RankBoard></RankBoard>
        </div>
      </div>
    </div>
  );
}
