import React, { useEffect, useState } from "react";
import { GamePlay } from "./component/GamePlay";
import { LeaderBoard } from "./component/LeaderBoard";

export const Main = () => {
  return (
    <div className="container-fluid">
      <div className="content">
        <div className="row">
          <div className="info-game col-md-8">
            <div className="score-game d-flex justify-content-around">
              <span className="score">Score:0</span>
              <span className="high-score">Highscore:0</span>
            </div>
            <div className="game-play">
              <GamePlay />
            </div>
          </div>
          <div className="ranking-user col-md-4">
            <div className="token-left">Token left: 0</div>
            <LeaderBoard />
          </div>
        </div>
      </div>{" "}
    </div>
  );
};
