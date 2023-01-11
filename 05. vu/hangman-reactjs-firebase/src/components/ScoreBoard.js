import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "../style/ScoreBoard.module.scss";
import { auth, db } from "../firebase";
import { Dropdown } from "react-bootstrap";
import submit from "../services/submit";
import signOutD from "../services/signOut";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { useStateContext } from "../ContextProvider";

const cx = classNames.bind(styles);
export default function ScoreBoard(props) {
  // const scoreLocal = localStorage.getItem("score");
  // let token = localStorage.getItem("token");
  const {
    setUser,
    highScoreDb,
    setHighScoreDb,
    setHighScore,
    highScore,
    score,
    setScore,
  } = useStateContext();

  // const [highScore, setHighScore] = useState(highScoreLocal);
  // const [score, setScore] = useState(scoreLocal);
  // const changeScore = () => {
  //   const scoreChange = localStorage.getItem("score");
  //   if (scoreLocal) {
  //     setScore(scoreChange);
  //     alert("score");
  //   }
  // };

  // const changeHighScore = () => {
  //   const highScoreChange = localStorage.getItem("highScore");
  //   if (highScoreLocal) {
  //     alert("submit database");
  //     // submit();
  //     setHighScore(highScoreChange);
  //   }
  // };
  useEffect(() => {
    setHighScore(localStorage.getItem("highScore"));
    window.addEventListener("storage", () => {
      setHighScore(localStorage.getItem("highScore"));
      setScore(localStorage.getItem("score"));
    });
  }, []);
  console.log(highScore, score);
  const signOutUser = () => {
    signOutD();
  };

  useEffect(() => {
    const GetHighScore = async () => {
      const q = query(
        collection(db, "leaderBoard"),
        where(
          "email",
          "==",
          `${auth.currentUser ? auth.currentUser.email : null}`
        ),
        orderBy("timestamp", "desc")
      );
      const queryData = await getDocs(q);
      const data = [];
      // const dataUser = [];
      queryData.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setHighScoreDb(data);
    };
    GetHighScore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    highScoreDb.slice(0, 1).forEach((highScore) => {
      setUser(highScore);
      localStorage.setItem("highScore", highScore.highScoreLocal);
    });
  }, []);
  return (
    <div>
      <div className={cx("wrapper")}>
        <h2>
          Score: <span>{auth.currentUser ? score : 0}</span>
        </h2>
        <h2>
          HighScore: <span>{auth.currentUser ? highScore : 0}</span>
        </h2>

        {auth.currentUser ? (
          <div>
            <Dropdown>
              <Dropdown.Toggle
                style={{ display: "flex" }}
                className={cx("user")}
              >
                <h2>{auth.currentUser.displayName}</h2>
                <img src={auth.currentUser.photoURL} alt=""></img>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>{auth.currentUser.displayName}</Dropdown.Item>
                <Dropdown.Item> {auth.currentUser.email}</Dropdown.Item>
                <Dropdown.Item onClick={signOutUser}>Log out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        ) : null}
      </div>
    </div>
  );
}
