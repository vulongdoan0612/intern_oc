import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "../style/TokenLeft.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { gameToken } from "../reducer/gamePlayReducer";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "../firebase";

const cx = classNames.bind(styles);
export default function TokenLeft() {
  const dispatch = useDispatch();
  const tokenLeft = localStorage.getItem("token");
  // dispatch(gameToken(tokenLeft));
  const tokenRedux = useSelector((state) => state.gamePlayReducer.token);
  const [token, setToken] = useState(tokenLeft);
  dispatch(gameToken(token));

  useEffect(() => {
    const changeToken = () => {
      alert("change token");

      const tokenChange = localStorage.getItem("token");
      setToken(tokenChange);
      dispatch(gameToken(token));
    };

    window.addEventListener("storage", changeToken);
    return () => {
      window.removeEventListener("storage", changeToken);
    };
  }, [token, dispatch, tokenLeft]);
  console.log(auth.currentUser.email);
  const getData = async () => {
    const q = query(
      collection(db, "leaderBoard"),
      where("email", "==", `${auth.currentUser.email}`),
      orderBy("tokenLocal","desc"),
      limit(1)
    );
    const queryData = await getDocs(q);
    const data = [];
    queryData.forEach((doc) => {
      data.push(doc.data());
      console.log(doc.data());
      // console.log(doc);
      // console.log(doc.id, " => ", doc.data());
    });
    // console.log(data);
    // dispatch(gameToken(data));
  };
  useEffect(() => {
    console.log("highScore change");
    getData();
    // eslint-disable-next-line
  }, []);
  // console.log(tokenRedux);
  return (
    <div>
      <div className={cx("wrapper")}>
        Token Left : <span>{token}</span>
      </div>
    </div>
  );
}
