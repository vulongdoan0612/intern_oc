import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "../style/TokenLeft.module.scss";
import { gameToken } from "../reducer/gamePlayReducer";
import { useDispatch, useSelector } from "react-redux";
import GetToken from "../services/getToken";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { auth, db } from "../firebase";

const cx = classNames.bind(styles);
export default function TokenLeft() {
  const dispatch = useDispatch();
  const tokenLeft = localStorage.getItem("token");
  const [token, setToken] = useState(tokenLeft);
  const [tokenUser, setTokenUser] = useState([]);
  const tokenRedux = useSelector((state) => state.gamePlayReducer.token);

  const GetToken = async () => {
    const q = query(
      collection(db, "leaderBoard"),
      where("email", "==", `${auth.currentUser.email}`),
      orderBy("timestamp", "desc")
    );
    console.log(q);
    const queryData = await getDocs(q);
    const data = [];
    queryData.forEach((doc) => {
      data.push(doc.data());
    });
    setTokenUser(data);
    console.log(data);
  };
  useEffect(() => {
    tokenUser.slice(0, 1).forEach((token) => {
      localStorage.setItem("token", token.tokenLocal);
      console.log("token of this user is :", token.tokenLocal);
    });
  }, [tokenUser]);
  // console.log(tokenUser);
  useEffect(() => {
    GetToken();
    console.log("getToken");
    // window.location.reload();
  }, [tokenLeft]);
  useEffect(() => {
    const changeToken = () => {
      const tokenChange = localStorage.getItem("token");
      if (tokenChange !== tokenLeft) {
        setToken(tokenChange);
        dispatch(gameToken(tokenChange));
      }
    };
    window.addEventListener("storage", changeToken);
    // return () => {
    //   window.removeEventListener("storage", changeToken);
    // };
    // eslint-disable-next-line
  }, [tokenLeft]);
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div>
      <div className={cx("wrapper")}>
        Token Left : <span>{token}</span>
        <button onClick={handleReload}>press to reload leaderboard</button>
      </div>
    </div>
  );
}
