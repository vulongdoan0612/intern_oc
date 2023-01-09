import React from "react";
import Hangman from "../components/Hangman";
import RankBoard from "../components/RankBoard";
import ScoreBoard from "../components/ScoreBoard";
import TokenLeft from "../components/TokenLeft";
import classNames from "classnames/bind";
import styles from "../style/Home.module.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import Login from "../components/Login";
const cx = classNames.bind(styles);
export default function Home(props) {
  const [user, loading, error] = useAuthState(auth);
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
          <ScoreBoard ></ScoreBoard>
          {user ? <Hangman></Hangman> : <Login></Login>}
          {/* <Hangman></Hangman> */}
        </div>
        <div className={cx("rightScreen")}>
          <TokenLeft></TokenLeft>
          <RankBoard></RankBoard>
        </div>
      </div>
    </div>
  );
}
