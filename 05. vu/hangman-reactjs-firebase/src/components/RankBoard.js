import React, { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "../style/RankBoard.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../firebase";
import { gameScores } from "../reducer/gamePlayReducer";
import ModalItem from "./ModalItem";
const cx = classNames.bind(styles);
export default function RankBoard() {
  const dispatch = useDispatch();
  const scoresRedux = useSelector((state) => state.gamePlayReducer.scores);
  
  const getData = async () => {
    const q = query(
      collection(db, "leaderBoard"),
      orderBy("highScoreLocal", "desc"),
      limit(10)
    );
    const queryData = await getDocs(q);
    const data = [];
    queryData.forEach((doc) => {
      data.push(doc.data());
    });
    dispatch(gameScores(data));
  };
  console.log(scoresRedux);
  useEffect(() => {
    console.log("highScore change");
    getData();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <div className={cx("leaderBoard")}>
        {scoresRedux?.map((item, index) => {
          // eslint-disable-next-line no-lone-blocks
          {
            return (
              <ModalItem item={item} index={index} key={index}></ModalItem>
            );
          }
        })}
        {/* <h2>Leaderboard</h2>
        <div className={cx("list-leaderBoard")}>
          <h4>Rank 1 : Vũ</h4>
          <h4>Rank 2 : Trung</h4>
        </div> */}
      </div>
    </div>
  );
}
