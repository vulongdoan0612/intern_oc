import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "../style/RankBoard.module.scss";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";
const cx = classNames.bind(styles);
export default function RankBoard() {
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
          return (
            <div
              key={index}
              style={{
                paddingTop: "15px",
                borderBottom: "1px solid black",
                paddingBottom: "15px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h5 style={{ color: "#fbecc1" }}>Top :{(index += 1)}</h5>
                <h5 style={{ color: "#fbecc1" }}>
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
                  <span style={{ fontWeight: "bold" }}>{item.user}</span>
                </p>
                <img
                  src={item.userImg}
                  alt=""
                  style={{
                    borderRadius: "50%",
                    width: "50px",
                    border: "1px solid black",
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
