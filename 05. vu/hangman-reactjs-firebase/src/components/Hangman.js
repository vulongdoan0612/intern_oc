import React from "react";
import classNames from "classnames/bind";
import styles from "../style/Hangman.module.scss";
import { useStateContext } from "../ContextProvider";
const cx = classNames.bind(styles);

export default function Hangman() {
  const { user } = useStateContext();
  return (
<<<<<<< HEAD
    <div
      className={cx("wrapper")}
      style={{
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      {user?.tokenLocal !== 0 ? (
        <iframe
          src="Hangman/index.html"
          className={cx("hangman-iframe")}
          title="Hang Man Game"
        ></iframe>
      ) : (
        <img
          src="https://i.ytimg.com/vi/ACPVQXCtOF0/maxresdefault.jpg"
          alt=""
        ></img>
      )}
=======
    <div className={cx("wrapper")}>
      <iframe
        src="Hangman/index.html"
        className={cx("hangman-iframe")}
        title="Hang Man Game"
      ></iframe>
     
>>>>>>> 63539c33123e4fa6d12e889f9478a4887432fd16
    </div>
  );
}
