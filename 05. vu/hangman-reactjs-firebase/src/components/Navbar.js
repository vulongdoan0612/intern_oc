import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "../style/Navbar.module.scss";
<<<<<<< HEAD
import "../style/cssFolder/Donate.css";
import "../style/cssFolder/Navbar.css";
import { auth } from "../firebase";
import { useStateContext } from "../ContextProvider";
// import coin from "../../public/coin.png";

import {
  getToken,
  updateCreditBuy,
  updateCreditBuy100,
  updateCreditBuy200,
  updateDataUser,
  updateMoney,
} from "../services/user";

const cx = classNames.bind(styles);

export default function Navbar() {
  const { user, money, setUser } = useStateContext();
  const [inputMoney, setInputMoney] = useState(0);
  const [showError, setError] = useState(false);
  const [showString, setString] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [showDonate, setShowDonate] = useState(false);
  const handleGetToken = async () => {
    const data = await getToken();
    setUser(data[0]);
  };

  useEffect(() => {
    handleGetToken();
  });

  const displayInput = () => {
    setShowInput((showInput) => !showInput);
  };

  useEffect(() => {
    if (user) {
      updateMoney(user, money);
    }
  }, [auth]);
  const handleChangeToken = async () => {
    const tokenLocal = parseInt(localStorage.getItem("token"));
    if (
      user?.money > Number(inputMoney) ||
      user?.money === Number(inputMoney)
    ) {
      const credit = user?.money - Number(inputMoney);
      const tokenChange = tokenLocal + Number(inputMoney);
      const data = {
        money: credit,
        tokenLocal: tokenChange,
      };
      if (user) {
        await updateDataUser(data, user);
      }
    } else if (user?.money > Number(inputMoney) && tokenLocal === 0) {
      window.location.reload();
      alert("oke");
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1500);
    }
    setShowInput(false);
    setInputMoney(0);
=======
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
>>>>>>> 63539c33123e4fa6d12e889f9478a4887432fd16
  };
  const donate = () => {
    setShowDonate((donate) => !showDonate);
  };
<<<<<<< HEAD

  const buyCredit = () => {
    updateCreditBuy(user, user?.money);
    setShowDonate(false);
  };

  const buyCredit100 = () => {
    updateCreditBuy100(user, user?.money);
    setShowDonate(false);
  };

  const buyCredit200 = () => {
    updateCreditBuy200(user, user?.money);
    setShowDonate(false);
  };

=======
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
>>>>>>> 63539c33123e4fa6d12e889f9478a4887432fd16
  return (
    <div>
      <div className={cx("wrapper")}>
        <div className={cx(`donate${showDonate ? " showDonate" : ""}`)}>
          <h1>Please select</h1>
          <div className={cx("buttonPrices")} style={{ paddingBottom: "20px" }}>
<<<<<<< HEAD
            <button
              style={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
              onClick={buyCredit}
            >
              50$
            </button>
            <button
              style={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
              onClick={buyCredit100}
            >
              100$
            </button>
            <button
              style={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
              onClick={buyCredit200}
            >
              200$
            </button>
=======
            <button onClick={buyCredit}>50$</button>
            <button onClick={buyCredit100}>100$</button>
            <button onClick={buyCredit200}>200$</button>
>>>>>>> 63539c33123e4fa6d12e889f9478a4887432fd16
          </div>
          <button
            onClick={() => {
              setShowDonate(false);
            }}
<<<<<<< HEAD
            style={{
              width: "100%",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
=======
            style={{ width: "100%" }}
>>>>>>> 63539c33123e4fa6d12e889f9478a4887432fd16
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
<<<<<<< HEAD
              <h2
                style={{
                  cursor: "pointer",
                  textShadow: "rgb(0 0 0 / 80%) -1px 3px 13px",
                  fontWeight: "bold",
                }}
                onClick={donate}
              >
                DONATE HERE
              </h2>
=======
              <h3 style={{ cursor: "pointer" }} onClick={donate}>
                DONATE HERE
              </h3>
>>>>>>> 63539c33123e4fa6d12e889f9478a4887432fd16
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className={cx("money")} style={{ width: "280px" }}>
<<<<<<< HEAD
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h2
                style={{
                  textShadow: "rgb(0 0 0 / 80%) -1px 3px 13px",
                  pointerEvents: "none",
                  fontWeight: "bold",
                }}
              >
                Money : <span>{money}$</span>
              </h2>
              <img src="/coin.png" alt="" onClick={displayInput}></img>
            </div>
=======
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
>>>>>>> 63539c33123e4fa6d12e889f9478a4887432fd16
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
<<<<<<< HEAD
                value={auth.currentUser ? inputMoney : 0}
=======
                value={auth.currentUser ? inputMoney : ""}
>>>>>>> 63539c33123e4fa6d12e889f9478a4887432fd16
                onChange={(e) => setInputMoney(e.target.value)}
                style={{
                  border: "none",
                  borderRadius: "20px",
                  backGroundColor: "green",
                  paddingLeft: "10px",
<<<<<<< HEAD
                  width: "200px",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
              ></input>
              <button
                onClick={handleChangeToken}
                style={{
                  width: "100px",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
              >
                Oke
              </button>
=======
                }}
              ></input>
              <button onClick={changToken}>Oke</button>
>>>>>>> 63539c33123e4fa6d12e889f9478a4887432fd16
            </div>
            <button
              onClick={() => {
                setShowInput(false);
<<<<<<< HEAD
                setInputMoney(0);
              }}
              style={{
                width: "100%",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            >
              Close
            </button>
          </div>
          <div className={cx(`warning ${showError ? "showWarning" : ""}`)}>
            <h4>Not enough money to buy more !</h4>
          </div>
          <div className={cx(`warning ${showString ? "showWarning" : ""}`)}>
            <h4>Please type a number not a string !</h4>
=======
              }}
              style={{ width: "100%" }}
            >
              Close
            </button>
>>>>>>> 63539c33123e4fa6d12e889f9478a4887432fd16
          </div>
        </div>
      </div>
    </div>
  );
}
