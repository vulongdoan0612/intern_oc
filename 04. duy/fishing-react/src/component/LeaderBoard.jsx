import { onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { MdLeaderboard } from "react-icons/md";
import { database } from "../firebase-config";
export const LeaderBoard = (props) => {
  const [rank, setRank] = useState([]);
  useEffect(() => {
    onValue(ref(database, "users"), (snapshot) => {
      const data = snapshot.val();
      console.log("data", Object.values(data));

      setRank(Object.values(data));
    });
  }, []);
  console.log(
    "sort",
    rank.sort((a, b) => a.highscore - b.highscore)
  );
  return (
    <div>
      <h1 className="text-center">
        <MdLeaderboard />
        Leaderboard
      </h1>
      <ol className="list-group list-group-flush list-group-numbered">
        {rank
          .sort((a, b) => b.highscore - a.highscore)
          .map((el, index) => {
            return (
              <li key={index} className="list-group-item">
                {el.email + "- " + el.highscore + " score"}
              </li>
            );
          })}
      </ol>
    </div>
  );
};
