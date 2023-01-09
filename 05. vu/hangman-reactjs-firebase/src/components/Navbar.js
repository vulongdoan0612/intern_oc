import React from "react";
import classNames from "classnames/bind";
import styles from "../style/Navbar.module.scss";
// import { auth } from "../firebase";
import { auth, db } from "../firebase";

const cx = classNames.bind(styles);

export default function Navbar() {
  // console.log(auth.currentUser.displayName)

  return (
    <div>
      <div className={cx("wrapper")}>
        <div className={cx("logo")}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Stick_Figure.svg/1200px-Stick_Figure.svg.png"
            alt=""
          ></img>
        </div>
        <div className={cx("user")}>
          <div>
            <h3 style={{ cursor: "pointer" }}>DONATE HERE</h3>
          </div>
          {/* {auth.currentUser ? ( */}
          <div>
            {/* <img src={auth.currentUser.photoURL} alt=""></img> */}
            {/* <h2>{auth.currentUser.displayName}</h2> */}
          </div>
          {/* ) : null} */}
        </div>

        {/* <h1>{auth.currentUser.displayName}</h1> */}
      </div>
    </div>
  );
}
