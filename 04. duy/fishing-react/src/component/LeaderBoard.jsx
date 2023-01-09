import { onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { MdLeaderboard } from "react-icons/md";
import { database } from "../firebase-config";
import leaderboard from "../assets/image/leaderboard.png";
import { getAllDataUser } from "../service/users";
export const LeaderBoard = (props) => {
  const [rank, setRank] = useState([]);
  // useEffect(async () => {
  //   let listData = await getAllDataUser();
  //   setRank(listData);
  // }, []);
  console.log(
    "sort",
    rank.sort((a, b) => a.highscore - b.highscore)
  );
  return (
    <div id="leaderboard">
      <div className="logo-leader">
        <img src={leaderboard} alt="" />
      </div>
      <ol className="list-group list-group-flush list-group-numbered">
        {/* {rank
          .sort((a, b) => b.highscore - a.highscore)
          .map((el, index) => {
            return (
              <li key={index} className="list-group-item">
                {el.email + "- " + el.highscore + " score"}
              </li>
            );
          })} */}
      </ol>
    </div>
  );
};
