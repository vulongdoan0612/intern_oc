import React from "react";
import classNames from "classnames/bind";
import styles from "../style/Hangman.module.scss";
const cx = classNames.bind(styles);

export default function Hangman() {
  return (
    <div className={cx("wrapper")}>
      <iframe
        src="Hangman/index.html"
        className={cx("hangman-iframe")}
        title="Hang Man Game"
      ></iframe>
     
    </div>
  );
}
