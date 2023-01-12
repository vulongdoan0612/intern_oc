import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "../style/TokenLeft.module.scss";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { auth, db } from "../firebase";
import "../style/TokenLeft.css";
const cx = classNames.bind(styles);
export default function TokenLeft() {
  const tokenLeft = localStorage.getItem("token");
  const [token, setToken] = useState(tokenLeft);
  const [tokenUser, setTokenUser] = useState([]);

  const GetToken = async () => {
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
      data.push(doc.data());
    });
    setTokenUser(data);
  };
  const changeToken = () => {
    const tokenChange = localStorage.getItem("token");
    if (tokenLeft) {
      setToken(tokenChange);
    }
  };
  const tokenUserSlice = () => {
    tokenUser.slice(0, 1).forEach((token) => {
      localStorage.setItem("token", token.tokenLocal);
      console.log("token of this user is :", token.tokenLocal);
    });
  };
  useEffect(() => {
    tokenUserSlice();
  }, []);
  useEffect(() => {
    GetToken();
  }, [tokenLeft]);
  useEffect(() => {
    changeToken();
  });
  const handleReload = () => {
    window.location.reload();
  };
  console.log(tokenUser);
  return (
    <div>
      <div className={cx("wrapper")}>
        <h4>Token Left :</h4> <h4>{auth.currentUser ? token : 0}</h4>
        {/* <button onClick={handleReload}>press to reload leaderboard</button> */}
      </div>
    </div>
  );
}
