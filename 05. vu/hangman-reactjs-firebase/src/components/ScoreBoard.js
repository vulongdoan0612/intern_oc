import React, { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "../style/ScoreBoard.module.scss";
import { auth, db } from "../firebase";
import { Dropdown } from "react-bootstrap";
import signOutD from "../services/signOut";
import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { useStateContext } from "../ContextProvider";

const cx = classNames.bind(styles);
export default function ScoreBoard(props) {

  const {
    setUser,
    highScoreDb,
    setHighScoreDb,
    setHighScore,
    highScore,
    score,
    setScore,
    user,
    setToken,
  } = useStateContext();
  useEffect(() => {
    setHighScore(localStorage.getItem("highScore"));
    window.addEventListener("storage", () => {
      setToken(localStorage.getItem("token"));
      setHighScore(localStorage.getItem("highScore"));
      setScore(localStorage.getItem("score"));
    });
  }, []);
  const signOutUser = () => {
    signOutD();
  };
  const updateHighScore = async () => {
    const docRef = doc(db, "leaderBoard", highScoreDb[0].id);
    const daTa = {
      highScoreLocal: highScore,
    };
    await updateDoc(docRef, daTa);
  };
  useEffect(() => {
    updateHighScore();
  }, [highScore]);
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
      localStorage.setItem("highScore", highScore.highScoreLocal);
    });
  }, [user]);
  highScoreDb.slice(0, 1).forEach((highScore) => {
    setUser(highScore);
  });
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
                style={{
                  display: "flex",
                  width: "270px",
                  justifyContent: "space-evenly",
                  backgroundColor: "#8d8741",
                  border: "none",
                }}
                className={cx("user")}
              >
                <h4>{auth.currentUser.displayName}</h4>
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
