import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "../style/RankBoard.module.scss";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { gameScores } from "../reducer/gamePlayReducer";
import getUnique from "../services/getUnique";
const cx = classNames.bind(styles);
export default function RankBoard() {
  const [highestScore, setHighestScore] = useState([]);
  const dispatch = useDispatch();
  const gameScore = useSelector((state) => state.gamePlayReducer.scores);
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
  console.log();
  useEffect(() => {
    getTheBestHighScore();
  }, []);
  useEffect(() => {
    const unique = getUnique(sortFunctionGetLargest, "email");
    dispatch(gameScores(unique));
  }, [highestScore]);
  // const handleClick = () => {
  //   const unique = getUnique(sortFunctionGetLargest, "email");
  //   dispatch(gameScores(unique));
  // };
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
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <p>Top :{(index += 1)}</p>
                <p>
                  Scrore :<span>{item.highScoreLocal}</span>
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <p>
                  <span>{item.user}</span>
                </p>
                <img
                  src={item.userImg}
                  alt=""
                  style={{
                    borderRadius: "50%",
                    width: "50px",
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
