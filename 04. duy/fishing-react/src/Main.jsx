import React, { useEffect, useState } from "react";
import { GamePlay } from "./component/GamePlay";
import { LeaderBoard } from "./component/LeaderBoard";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getOneUserByUid, updateDataUser } from "./service/users";
export const Main = () => {
  const [data, setData] = useState({
    uid: "",
    token: 2,
    highscore: 0,
    credit: 100,
  });
  const [score, setScore] = useState(sessionStorage.getItem("highScore"));
  useEffect(() => {
    window.addEventListener("storage", () => {
      setScore(sessionStorage.getItem("highScore"));
    });
  }, []);
  console.log("scoree", score);
  const auth = getAuth();

  const getData = async () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        let dataUser = await getOneUserByUid(uid);
        localStorage.setItem("token", dataUser.token);
        setData(dataUser);
      } else {
        if (auth.currentUser == null) {
          localStorage.removeItem("token");
          setData({ uid: "", token: 0, highscore: 0, credit: 0 });
        }
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container">
      <div className="content">
        <div className="row">
          <div className="info-game col-md-8">
            <div className="score-game d-flex justify-content-around">
              <span className="score">Score:0</span>
              <span className="high-score">Highscore:{data?.highscore}</span>
            </div>
            <div className="game-play">
              <GamePlay />
            </div>
          </div>
          <div className="ranking-user col-md-4">
            <div className="token-left">Token left:{data?.token}</div>
            <LeaderBoard />
          </div>
        </div>
      </div>
    </div>
  );
};
