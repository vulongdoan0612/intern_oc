import React, { useEffect, useState } from "react";
import { GamePlay } from "./component/GamePlay";
import { LeaderBoard } from "./component/LeaderBoard";
import { getDatabase, ref, onValue } from "firebase/database";
import { database } from "./firebase-config";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
export const Main = () => {
  const data = useSelector((state) => state.GameReducer.dataUser);
  console.log("datauser", data);
  return (
    <div className="container-fluid">
      <div className="content">
        <div className="row">
          <div className="info-game col-md-8">
            <div className="score-game d-flex justify-content-around">
              <span className="score">Score:0</span>
              <span className="high-score">Highscore:{data.highscore}</span>
            </div>
            <div className="game-play">
              <GamePlay />
            </div>
          </div>
          <div className="ranking-user col-md-4">
            <div className="token-left">Token left: {data.token}</div>
            <LeaderBoard />
          </div>
        </div>
      </div>
    </div>
  );
};
