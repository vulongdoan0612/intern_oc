import React, { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "../style/ScoreBoard.module.scss";
import { auth } from "../firebase";
import { Dropdown } from "react-bootstrap";
import signOutD from "../services/signOut";
import { useStateContext } from "../ContextProvider";
import { getToken, updateHighScore, updateToken } from "../services/user";

const cx = classNames.bind(styles);

export default function ScoreBoard(props) {
  const {
    setHighScore,
    highScore,
    score,
    setScore,
    user,
    setToken,
    token,
    inputMoney,
    setMoney,
  } = useStateContext();

  useEffect(() => {
    window.addEventListener("storage", () => {
      setHighScore(localStorage.getItem("highScore"));
      setScore(localStorage.getItem("score"));
      setToken(parseInt(localStorage.getItem("token")));
    });
  }, []);
  
  const handleSetDataStorage = (user) => {
    localStorage.setItem("highScore", user?.highScoreLocal || 0);
  };

  const signOutUser = () => {
    localStorage.setItem("highScore", 0);
    localStorage.setItem("score", 0);
    signOutD();
  };

  useEffect(() => {
    if (user) {
      setToken(user?.tokenLocal);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      setMoney(user?.money);
    }
  }, [user]);

  useEffect(() => {
    handleSetDataStorage(user);
    if (user) {
      setHighScore(user?.highScoreLocal);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      updateToken(user, token, inputMoney);
    }
  }, []);

  useEffect(() => {
    if (user) {
      getToken();
    }
  }, []);

  useEffect(() => {
    if (user) {
      updateHighScore(user, highScore);
    }
  }, [highScore]);
  // console.log(token, money);

  return (
    <div style={{ paddingBottom: "20px" }}>
      <div className={cx("wrapper")}>
        <h2
          style={{
            textShadow: "rgb(0 0 0 / 80%) -1px 3px 13px",
            fontWeight: "bold",
          }}
        >
          Score: <span>{score || 0}</span>
        </h2>
        <h2
          style={{
            textShadow: "rgb(0 0 0 / 80%) -1px 3px 13px",
            fontWeight: "bold",
          }}
        >
          HighScore: <span>{user ? highScore : 0}</span>
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
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
                className={cx("user")}
              >
                <h4 style={{ textShadow: "rgb(0 0 0 / 80%) -1px 3px 13px" }}>
                  {auth.currentUser.displayName}
                </h4>
                <img
                  style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  src={auth.currentUser.photoURL}
                  alt=""
                ></img>
              </Dropdown.Toggle>

              <Dropdown.Menu
                style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              >
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
