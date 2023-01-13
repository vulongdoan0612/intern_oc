import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "../style/Navbar.module.scss";
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import "../style/Navbar.css";
import { auth, db } from "../firebase";
import { useStateContext } from "../ContextProvider";
import coin from "../png/coin.png";
import "../style/Donate.css";
const cx = classNames.bind(styles);

export default function Navbar() {
  const { highScoreDb, user, money, setMoney, setToken, token } =
    useStateContext();
  const [inputMoney, setInputMoney] = useState("");
  const changToken = async () => {
    const q = query(
      collection(db, "leaderBoard"),
      where(
        "email",
        "==",
        `${auth.currentUser ? auth.currentUser.email : null}`
      )
    );
    const findUsers = await getDocs(q);
    const data = [];
    findUsers.forEach((doc) => {
      data.push(doc.data());
    });
    setMoney(data[0].money - inputMoney);
    setToken(data[0].tokenLocal);
    window.location.reload();
  };
  useEffect(() => {
    setMoney(user?.money);
    setToken(user?.tokenLocal);
  }, [user]);
  const updateMoney = async () => {
    const docRef = doc(db, "leaderBoard", highScoreDb[0].id);
    const daTa = {
      money: money,
    };
    try {
      await updateDoc(docRef, daTa);
    } catch (e) {
      console.log(e);
    }
  };
  const updateToken = async () => {
    const docRef = doc(db, "leaderBoard", highScoreDb[0].id);
    const daTa = {
      tokenLocal: Number(token) + Number(inputMoney),
    };
    try {
      await updateDoc(docRef, daTa);
      localStorage.setItem("token", Number(token) + Number(inputMoney));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    updateMoney();
  }, [money]);
  useEffect(() => {
    updateToken();
  }, [token, money]);
  useEffect(() => {
    changToken();
  }, []);
  const [showDonate, setShowDonate] = useState(false);
  const updateCredit = async () => {
    const docRef = doc(db, "leaderBoard", highScoreDb[0].id);
    const daTa = {
      money: money + 50,
    };
    try {
      await updateDoc(docRef, daTa);
      localStorage.setItem("token", token + 50);
    } catch (e) {
      console.log(e);
    }
  };
  const updateCredit100 = async () => {
    const docRef = doc(db, "leaderBoard", highScoreDb[0].id);
    const daTa = {
      money: money + 100,
    };
    try {
      await updateDoc(docRef, daTa);
      localStorage.setItem("token", token + 50);
    } catch (e) {
      console.log(e);
    }
  };
  const updateCredit200 = async () => {
    const docRef = doc(db, "leaderBoard", highScoreDb[0].id);
    const daTa = {
      money: money + 200,
    };
    try {
      await updateDoc(docRef, daTa);
      localStorage.setItem("token", token + 50);
    } catch (e) {
      console.log(e);
    }
  };
  const donate = () => {
    setShowDonate((donate) => !showDonate);
  };
  const buyCredit = () => {
    updateCredit();
    alert("donate 50$ success");
    window.location.reload();
  };
  const buyCredit100 = () => {
    updateCredit100();
    alert("donate 100$ success");
    window.location.reload();
  };
  const buyCredit200 = () => {
    updateCredit200();
    alert("donate 200$ success");
    window.location.reload();
  };
  const [showInput, setShowInput] = useState(false);
  const displayInput = () => {
    setShowInput((showInput) => !showInput);
  };
  return (
    <div>
      <div className={cx("wrapper")}>
        <div className={cx(`donate${showDonate ? " showDonate" : ""}`)}>
          <h1>Please select</h1>
          <div className={cx("buttonPrices")} style={{ paddingBottom: "20px" }}>
            <button onClick={buyCredit}>50$</button>
            <button onClick={buyCredit100}>100$</button>
            <button onClick={buyCredit200}>200$</button>
          </div>
          <button
            onClick={() => {
              setShowDonate(false);
            }}
            style={{ width: "100%" }}
          >
            CLOSE
          </button>
        </div>
        <div className={cx("logo")}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Stick_Figure.svg/1200px-Stick_Figure.svg.png"
            alt=""
          ></img>
        </div>
        <div className={cx("user")}>
          <div>
            {auth.currentUser ? (
              <h3 style={{ cursor: "pointer" }} onClick={donate}>
                DONATE HERE
              </h3>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className={cx("money")} style={{ width: "280px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3>
              Money : <span>{auth.currentUser ? money : 0}$</span>
            </h3>
            <img src={coin} alt="" onClick={displayInput}></img>
          </div>
          <div className={cx(`typeInput ${showInput ? "showInput" : ""}`)}>
            <p>Type your number you want to change 1$ / 1 token</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingBottom: "20px",
              }}
            >
              <input
                value={auth.currentUser ? inputMoney : ""}
                onChange={(e) => setInputMoney(e.target.value)}
                style={{
                  border: "none",
                  borderRadius: "20px",
                  backGroundColor: "green",
                  paddingLeft: "10px",
                }}
              ></input>
              <button onClick={changToken}>Oke</button>
            </div>
            <button
              onClick={() => {
                setShowInput(false);
              }}
              style={{ width: "100%" }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
