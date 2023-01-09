import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "../style/ScoreBoard.module.scss";
import { auth } from "../firebase";
import { Dropdown } from "react-bootstrap";
import submit from "../services/submit";
import signOutD from "../services/signOut";
import { useDispatch, useSelector } from "react-redux";
import { gameHighScore, gameScore } from "../reducer/gamePlayReducer";

const cx = classNames.bind(styles);
export default function ScoreBoard() {
  console.log("Time render ScoreBoard");
  const dispatch = useDispatch();
  const tokenRedux = useSelector((state) => state.gamePlayReducer.token);
  let scoreLocal = localStorage.getItem("score");
  let token = localStorage.getItem("token");
  let highScoreLocal = localStorage.getItem("highScore");

  const highScoreRedux = useSelector(
    (state) => state.gamePlayReducer.highScore
  );
  // const scoreRedux = useSelector((state) => state.gamePlayReducer.score);
  const [highScore, setHighScore] = useState(highScoreLocal);

  // console.log("useState highScore:", highScore);
  const [score, setScore] = useState(scoreLocal);

  useEffect(() => {
    const changeScore = () => {
      const scoreChange = localStorage.getItem("score");
      if (scoreLocal) {
        setScore(scoreChange);
      }
      dispatch(gameScore(score));
    };
    window.addEventListener("storage", changeScore);
    return () => {
      window.removeEventListener("storage", changeScore);
    };
  }, [dispatch, score, scoreLocal]);

  useEffect(() => {
    const changeHighScore = () => {
      const highScoreChange = localStorage.getItem("highScore");
      const tokenLocal = localStorage.getItem("token");
      console.log("highScoreChange", highScoreChange);
      if (highScoreChange !== highScoreLocal) {
        submit(highScoreChange, tokenLocal);
        alert("scoreBoard");
      }
      dispatch(gameHighScore(highScoreChange));
      setHighScore(highScoreChange);
    };
    window.addEventListener("storage", changeHighScore);
    return () => {
      window.removeEventListener("storage", changeHighScore);
    };
    // eslint-disable-next-line
  }, [highScoreLocal, highScoreRedux, tokenRedux]);

  const signOutUser = () => {
    window.location.reload(false);

    signOutD();
    localStorage.setItem("token", 0);
    localStorage.setItem("highScore", 0);
  };
  return (
    <div>
      <div className={cx("wrapper")}>
        <h2>
          Score: <span>{score || 0}</span>
        </h2>
        <h2>
          HighScore: <span>{highScore || 0}</span>
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
