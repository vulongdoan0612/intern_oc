import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "../style/RankBoard.module.scss";
<<<<<<< HEAD
import { useStateContext } from "../ContextProvider";
import { getAllUsers } from "../services/user";

=======
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";
>>>>>>> 63539c33123e4fa6d12e889f9478a4887432fd16
const cx = classNames.bind(styles);

export default function RankBoard() {
<<<<<<< HEAD
  const { user } = useStateContext();
  const [allUser, setAllUser] = useState([]);
  const allUsers = async () => {
    const data = await getAllUsers();
    const result = data.sort((a, b) => b.highScoreLocal - a.highScoreLocal);
    setAllUser(result);
  };

  useEffect(() => {
    allUsers();
  }, [user?.highScoreLocal]);

  return (
    <div>
      <div className={cx("leaderBoard")}>
        {allUser.map((item, index) => {
=======
  const [gameScore, setGameScore] = useState([]);
  const [highestScore, setHighestScore] = useState([]);
  const getTheBestHighScore = async () => {
    const q = query(collection(db, "leaderBoard"));
    const queryData = await getDocs(q);
    const data = [];
    queryData.forEach((doc) => {
      data.push(doc.data());
    });
    setHighestScore(data);
  };
  const sortFunctionGetLargest = [...highestScore].sort(
    (a, b) => b.highScoreLocal - a.highScoreLocal
  );
  useEffect(() => {
    getTheBestHighScore();
  }, [highestScore]);
  useEffect(() => {
    setGameScore(sortFunctionGetLargest);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [highestScore]);
  return (
    <div>
      <div className={cx("leaderBoard")}>
        {/* <button onClick={handleClick}>Reload</button> */}
        {gameScore.map((item, index) => {
>>>>>>> 63539c33123e4fa6d12e889f9478a4887432fd16
          return (
            <div
              key={index}
              style={{
                paddingTop: "15px",
                borderBottom: "1px solid black",
                paddingBottom: "15px",
              }}
            >
<<<<<<< HEAD
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  pointerEvents: "none",
                }}
              >
                <h5
                  style={{
                    color: "#fbecc1",
                    textShadow: "rgb(0 0 0 / 80%) -1px 3px 13px",
                  }}
                >
                  Top :{(index += 1)}
                </h5>
                <h5
                  style={{
                    color: "#fbecc1",
                    textShadow: "rgb(0 0 0 / 80%) -1px 3px 13px",
                  }}
                >
=======
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h5 style={{ color: "#fbecc1" }}>Top :{(index += 1)}</h5>
                <h5 style={{ color: "#fbecc1" }}>
>>>>>>> 63539c33123e4fa6d12e889f9478a4887432fd16
                  Scrore :<span>{item.highScoreLocal}</span>
                </h5>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p>
<<<<<<< HEAD
                  <span
                    style={{
                      fontWeight: "bold",
                      textShadow: "rgb(0 0 0 / 80%) -1px 3px 13px",
                    }}
                  >
                    {item.user}
                  </span>
=======
                  <span style={{ fontWeight: "bold" }}>{item.user}</span>
>>>>>>> 63539c33123e4fa6d12e889f9478a4887432fd16
                </p>
                <img
                  src={item.userImg}
                  alt=""
                  style={{
                    borderRadius: "50%",
                    width: "50px",
                    border: "1px solid black",
<<<<<<< HEAD
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
=======
>>>>>>> 63539c33123e4fa6d12e889f9478a4887432fd16
                  }}
                ></img>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
