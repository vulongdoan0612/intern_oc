import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "../style/ScoreBoard.module.scss";
import { gameHighScore, gameScore, gameUser } from "../reducer/gamePlayReducer";
import { useDispatch, useSelector } from "react-redux";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase";
import { signOut } from "firebase/auth";
import { Dropdown } from "react-bootstrap";

const cx = classNames.bind(styles);
export default function ScoreBoard() {
  console.log("auth", auth);
  const dispatch = useDispatch();
  const scoreLocal = localStorage.getItem("score");
  const [score, setScore] = useState(scoreLocal);
  dispatch(gameScore(score));
  const scoresRedux = useSelector((state) => state.gamePlayReducer.scores);
  const token = useSelector((state) => state.gamePlayReducer.token);
  useEffect(() => {
    const changeScore = () => {
      if (scoreLocal) {
        console.log("chage Local");
        const scoreChange = localStorage.getItem("score");
        console.log("scoreChange", scoreChange);
        setScore(scoreChange);
      }
      dispatch(gameScore(score));
    };
    window.addEventListener("storage", changeScore);
    return () => {
      window.removeEventListener("storage", changeScore);
    };
  }, [dispatch, score, scoreLocal]);

  let highScoreLocal = localStorage.getItem("highScore");
  const [highScore, setHighScore] = useState(highScoreLocal);
  dispatch(gameHighScore(highScore));

  const highScoreRedux = useSelector(
    (state) => state.gamePlayReducer.highScore
  );
  // eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(() => {
    const changeHighScore = () => {
      // function submit để đẩy highScoreRedux lên firebase với cú pháp như sau =>
      const highScoreChange = localStorage.getItem("highScore");
      // const tokenLocal = localStorage.getItem("token");
      if (highScoreChange !== highScoreLocal) {
        console.log(highScore, "highScore 1");
        console.log(highScore, "highScore 2");
        setHighScore(highScoreChange);
        submit();
        dispatch(gameHighScore(highScore));
        console.log(scoresRedux);
        alert("change");
      }
    };

    window.addEventListener("storage", changeHighScore);
    return () => {
      window.removeEventListener("storage", changeHighScore);
    };
    // eslint-disable-next-line
  }, [highScoreLocal, highScoreRedux]);

  // dispatch(gameUser(auth.currentUser.email));
  const submit = async (tokenLocal) => {
    await addDoc(collection(db, "leaderBoard"), {
      highScoreLocal,
      tokenLocal,
      timestamp: serverTimestamp(),
      user: auth.currentUser.displayName,
      email: auth.currentUser.email,
      userImg: auth.currentUser.photoURL,
    });
  };
  // submit();
  // console.log(auth.currentUser.displayName);
  // useEffect(() => {
  //   console.log("somethingChange");
  // }, [highScore]);
  const signOutUser = () => {
    localStorage.setItem("token", 0);
    signOut(auth)
      .then(() => {
        //Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className={cx("wrapper")}>
        <h2>
          Score: <span>{score}</span>
        </h2>
        <h2>
          HighScore: <span>{highScore}</span>
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
        {/* <img src={auth.currentUser.photoURL} alt=""></img>

        <h2>{auth.currentUser.displayName}</h2> */}
        {/* {auth.curren}
        <button onClick={signOutUser}>Sign out</button> */}
      </div>
    </div>
  );
}
