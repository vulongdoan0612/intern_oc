import React, { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "../style/TokenLeft.module.scss";
import "../style/cssFolder/TokenLeft.css";
import { auth } from "../firebase";
import { useStateContext } from "../ContextProvider";
import { changeTokenAfterGame, getToken } from "../services/user";

const cx = classNames.bind(styles);

export default function TokenLeft() {
  
  const { user, token, setUser, setToken } = useStateContext();
  const tokenLeft = parseInt(localStorage.getItem("token"));

  const handleGetToken = async () => {
    const data = await getToken();
    setUser(data[0]);
    // console.log(data);
  };

  useEffect(() => {
    setToken(user?.tokenLocal);
  }, [user]);

  useEffect(() => {
    if (user) {
      handleGetToken();
    }
    localStorage.setItem("token", user?.tokenLocal);
  }, [user?.tokenLocal, auth?.currentUser]);

  useEffect(() => {
    const getDocs = async () => {
      try {
        if (user) {
          changeTokenAfterGame(user, tokenLeft);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getDocs();
  }, [tokenLeft]);

  return (
    <div>
      <div className={cx("wrapper")}>
        <h4
          style={{
            textShadow: "rgb(0 0 0 / 80%) -1px 3px 13px",
            pointerEvents: "none",
            fontWeight: "bold",
          }}
        >
          Token Left
        </h4>
        <h4
          style={{
            textShadow: "rgb(0 0 0 / 80%) -1px 3px 13px",
            pointerEvents: "none",
            fontWeight: "bold",
          }}
        >
          {token}
        </h4>
      </div>
    </div>
  );
}
