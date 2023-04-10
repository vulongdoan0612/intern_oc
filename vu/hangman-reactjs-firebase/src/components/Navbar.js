import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "../style/Navbar.module.scss";
import "../style/cssFolder/Donate.css";
import "../style/cssFolder/Navbar.css";
import { auth } from "../firebase";
import { useStateContext } from "../ContextProvider";

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
  };

  const donate = () => {
    setShowDonate((donate) => !showDonate);
  };

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

  return (
    <div>
      <div className={cx("wrapper")}>
        <div className={cx(`donate${showDonate ? " showDonate" : ""}`)}>
          <h1>Please select</h1>
          <div className={cx("buttonPrices")} style={{ paddingBottom: "20px" }}>
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
          </div>
          <button
            onClick={() => {
              setShowDonate(false);
            }}
            style={{
              width: "100%",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            CLOSE
          </button>
        </div>
        <div className={cx("logo")}>
          <h1
            style={{
              fontWeight: "900",
              cursor: "pointer",
              pointerEvents: "none",
            }}
          >
            Hangman Game
          </h1>
        </div>
        <div className={cx("user")}>
          <div>
            {auth.currentUser ? (
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
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className={cx("money")} style={{ width: "280px" }}>
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
                Money : <span>{user ? money : 0}$</span>
              </h2>
              {user ? (
                <img src="/coin.png" alt="" onClick={displayInput}></img>
              ) : null}
            </div>
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
                value={auth.currentUser ? inputMoney : 0}
                onChange={(e) => setInputMoney(e.target.value)}
                style={{
                  border: "none",
                  borderRadius: "20px",
                  backGroundColor: "green",
                  paddingLeft: "10px",
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
            </div>
            <button
              onClick={() => {
                setShowInput(false);
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
          </div>
        </div>
      </div>
    </div>
  );
}
