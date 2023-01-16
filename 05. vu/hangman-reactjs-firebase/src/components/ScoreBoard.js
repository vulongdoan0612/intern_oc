import React, { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "../style/ScoreBoard.module.scss";
<<<<<<< HEAD
import { auth } from "../firebase";
import { Dropdown } from "react-bootstrap";
import signOutD from "../services/signOut";
import { useStateContext } from "../ContextProvider";
import { getToken, updateHighScore, updateToken } from "../services/user";

const cx = classNames.bind(styles);

export default function ScoreBoard(props) {
  const {
=======
import { auth, db } from "../firebase";
import { Dropdown } from "react-bootstrap";
import signOutD from "../services/signOut";
import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { useStateContext } from "../ContextProvider";

const cx = classNames.bind(styles);
export default function ScoreBoard(props) {

  const {
    setUser,
    highScoreDb,
    setHighScoreDb,
>>>>>>> 63539c33123e4fa6d12e889f9478a4887432fd16
    setHighScore,
    highScore,
    score,
    setScore,
    user,
    setToken,
<<<<<<< HEAD
    token,
    inputMoney,
    setMoney,
    money,
  } = useStateContext();

  useEffect(() => {
    window.addEventListener("storage", () => {
      setHighScore(localStorage.getItem("highScore"));
      setScore(localStorage.getItem("score"));
      setToken(parseInt(localStorage.getItem("token")));
    });
  }, []);
  const handleSetDataStorage = (user) => {
    localStorage.setItem("highScore", user?.highScoreLocal || 0);
  };

  const signOutUser = () => {
    localStorage.setItem("highScore", 0);
    localStorage.setItem("score", 0);
    window.location.reload();
    signOutD();
  };

  useEffect(() => {
    if (user) {
      setToken(user?.tokenLocal);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      setMoney(user?.money);
    }
  }, [user]);

  useEffect(() => {
    handleSetDataStorage(user);
    if (user) {
      setHighScore(user?.highScoreLocal);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      updateToken(user, token, inputMoney);
    }
  }, []);

  useEffect(() => {
    if (user) {
      getToken();
    }
  }, []);

  useEffect(() => {
    if (user) {
      updateHighScore(user, highScore);
    }
  }, [highScore]);
  // console.log(token, money);

=======
  } = useStateContext();
  useEffect(() => {
    setHighScore(localStorage.getItem("highScore"));
    window.addEventListener("storage", () => {
      setToken(localStorage.getItem("token"));
      setHighScore(localStorage.getItem("highScore"));
      setScore(localStorage.getItem("score"));
    });
  }, []);
  const signOutUser = () => {
    signOutD();
  };
  const updateHighScore = async () => {
    const docRef = doc(db, "leaderBoard", highScoreDb[0].id);
    const daTa = {
      highScoreLocal: highScore,
    };
    await updateDoc(docRef, daTa);
  };
  useEffect(() => {
    updateHighScore();
  }, [highScore]);
  useEffect(() => {
    const GetHighScore = async () => {
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
        data.push({ id: doc.id, ...doc.data() });
      });
      setHighScoreDb(data);
    };
    GetHighScore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    highScoreDb.slice(0, 1).forEach((highScore) => {
      localStorage.setItem("highScore", highScore.highScoreLocal);
    });
  }, [user]);
  highScoreDb.slice(0, 1).forEach((highScore) => {
    setUser(highScore);
  });
>>>>>>> 63539c33123e4fa6d12e889f9478a4887432fd16
  return (
    <div style={{ paddingBottom: "20px" }}>
      <div className={cx("wrapper")}>
<<<<<<< HEAD
        <h2
          style={{
            textShadow: "rgb(0 0 0 / 80%) -1px 3px 13px",
            fontWeight: "bold",
          }}
        >
          Score: <span>{score || 0}</span>
        </h2>
        <h2
          style={{
            textShadow: "rgb(0 0 0 / 80%) -1px 3px 13px",
            fontWeight: "bold",
          }}
        >
          HighScore: <span>{highScore || 0}</span>
=======
        <h2>
          Score: <span>{auth.currentUser ? score : 0}</span>
        </h2>
        <h2>
          HighScore: <span>{auth.currentUser ? highScore : 0}</span>
>>>>>>> 63539c33123e4fa6d12e889f9478a4887432fd16
        </h2>

        {auth.currentUser ? (
          <div>
            <Dropdown>
              <Dropdown.Toggle
                style={{
                  display: "flex",
                  width: "270px",
                  justifyContent: "space-evenly",
                  backgroundColor: "#8d8741",
                  border: "none",
<<<<<<< HEAD
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
                className={cx("user")}
              >
                <h4 style={{ textShadow: "rgb(0 0 0 / 80%) -1px 3px 13px" }}>
                  {auth.currentUser.displayName}
                </h4>
                <img
                  style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  src={auth.currentUser.photoURL}
                  alt=""
                ></img>
=======
                }}
                className={cx("user")}
              >
                <h4>{auth.currentUser.displayName}</h4>
                <img src={auth.currentUser.photoURL} alt=""></img>
>>>>>>> 63539c33123e4fa6d12e889f9478a4887432fd16
              </Dropdown.Toggle>

              <Dropdown.Menu
                style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              >
                <Dropdown.Item>{auth.currentUser.displayName}</Dropdown.Item>
                <Dropdown.Item> {auth.currentUser.email}</Dropdown.Item>
                <Dropdown.Item onClick={signOutUser}>Log out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        ) : null}
      </div>
    </div>
  );
}
