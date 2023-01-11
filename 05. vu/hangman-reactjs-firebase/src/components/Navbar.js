import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "../style/Navbar.module.scss";
import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { auth, db } from "../firebase";
import { useStateContext } from "../ContextProvider";
// import { auth } from "../firebase";

const cx = classNames.bind(styles);

export default function Navbar() {
  const { user } = useStateContext();
  const [money, setMoney] = useState(0);
  const [inputMoney, setInputMoney] = useState("");
  const [dataLeaderBoard, setData] = useState("");
  // console.log(auth.currentUser.displayName)

  const changToken = async () => {
    const q = query(
      collection(db, "leaderBoard"),
      where(
        "email",
        "==",
        `${auth.currentUser ? auth.currentUser.email : null}`
      ),
      orderBy("timestamp", "desc")
    );
    const findUsers = await getDocs(q);
    const data = [];
    findUsers.forEach((doc) => {
      data.push(doc.data());
    });
    data.slice(0, 1).forEach((money) => {
      if (money.money < inputMoney) {
        alert("no money ");
      } else {
        setMoney(money.money - inputMoney);
        setData(money.money.toString());
      }
    });
    // updateMoney();
  };
  const updateMoney = async () => {
    const docRef = doc(db, "leaderBoard", user.id);
    const tokenLocalStor = localStorage.getItem("token");
    const daTa = {
      money: money,
      tokenLocal: Number(tokenLocalStor) + Number(inputMoney),
    };
    await updateDoc(docRef, daTa);
  };
  useEffect(() => {
    updateMoney();
  }, [money]);
  useEffect(() => {
    changToken();
  }, []);
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
        </div>
        <div>
          <h3>
            Money : <span>{money}</span>
          </h3>
          <input
            value={inputMoney}
            onChange={(e) => setInputMoney(e.target.value)}
          ></input>
          <button onClick={changToken}>Oke</button>
        </div>
      </div>
    </div>
  );
}
