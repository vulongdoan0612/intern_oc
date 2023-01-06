import React from "react";
import classNames from "classnames/bind";
import styles from "../style/Navbar.module.scss";

const cx = classNames.bind(styles);

export default function Navbar() {
  // console.log(auth.currentUser.displayName)
  
  return (
    <div>
      <div className={cx("wrapper")}>
        <h1>Navbar</h1>
        {/* <h1>{auth.currentUser.displayName}</h1> */}
      </div>
    </div>
  );
}
